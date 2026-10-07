<template>
  <private-view :title="page_title">
    <template v-if="breadcrumb" #headline>
      <v-breadcrumb :items="breadcrumb" />
    </template>

    <template #navigation>
      <page-navigation :current="page" :pages="all_pages" />
    </template>

    <div class="lp-container">
      <div class="lp-banner" v-if="page_banner">
        <img :src="page_banner" alt="" />
      </div>
      <!-- <div class="lp-cards" v-if="page_cards">
        <div class="lp-card" v-for="card in page_cards.filter(item => (item.uri != page))" :key="card.uri"
          :style="`background-color: ${card.color}`" @click="change_page(card.to)">
          <v-icon :name="card.icon" />
          <span class="lp-card-title">{{ card.label }}</span>
        </div>
      </div> -->
      <div class="lp-body" v-if="page_body" v-html="page_body"></div>
    </div>

    <router-view name="landing-page" :page="page" />
  </private-view>

</template>

<script>
import { ref, watch } from 'vue';
import { useApi } from '@directus/extensions-sdk';
import { useRouter } from 'vue-router';
import PageNavigation from './components/navigation.vue';
import useDirectusToken from './use-directus-token.js';

export default {
  components: {
    PageNavigation,
  },
  props: {
    page: {
      type: String,
      default: 'home',
    },
  },
  setup(props) {
    const router = useRouter();
    const api = useApi();
    const { addTokenToURL } = useDirectusToken(api);

    const page_title = ref('');
    const page_banner = ref('');
    const page_cards = ref([]);
    const page_body = ref('');
    const breadcrumb = ref([
      {
        name: 'Home',
        to: `/landing-page`,
      },
    ]);

    const all_pages = ref([]);

    render_page(props.page);

    fetch_all_pages();

    watch(
      () => props.page,
      () => {
        render_page(props.page);
      }
    );

    function change_page(to) {
      const next = router.resolve(`${to}`);
      router.push(next);
    }

    return { page_title, page_banner, page_cards, page_body, breadcrumb, all_pages, change_page };

    async function getPage(page, fields = 'title,body,banner') {
      if (page === null) {
        page_title.value = '500: Internal Server Error';
        breadcrumb.value.splice(1, 1);
        page_banner.value = '';
        page_cards.value = [];
        page_body.value = '';
        return
      }

      let resp
      try {
        resp = await api.get(`/items/docs?fields=${fields}&filter[slug][_eq]=${page}`);
        if (resp.data.data) {
          resp.data.data.forEach((item) => {
            page_title.value = item.title;
            page_body.value = item.body;
            if (item.banner) {
              page_banner.value = `/assets/${item.banner}?width=2000&height=563&fit=cover`;
            } else {
              page_banner.value = '';
            }
          });
        } else {
          page_title.value = '404: Not Found';
          page_body.value = `<p>Page "${page} not found.</p>`;
        }

        if (page === 'home') {
          breadcrumb.value.splice(1, 1);
        } else {
          breadcrumb.value[1] = {
            name: page_title.value,
            to: `/landing-page/${page}`,
          };
        }
      } catch (error) {
        console.error(`getPage(${page}) error:${error}`);
        page_title.value = '500: Internal Server Error';
        page_banner.value = '';
        page_cards.value = [];
        page_body.value = `<p>Failed to load page "${page}": ${error}</p>`;
      }
    }

    async function render_page(page) {
      await getPage(page);
    }

    function fetch_all_pages() {
      api.get('/items/docs?fields=title,slug,icon,color').then((rsp) => {
        all_pages.value = [];
        rsp.data.data.forEach(item => {
          if (item.slug === 'home') {
            console.log('adding home')
            all_pages.value.unshift({
              label: item.title,
              uri: 'landing-page',
              to: `/landing-page`,
              icon: item.icon,
              color: item.color,
            });
          } else {
            console.log('adding page:', item.slug)
            all_pages.value.push({
              label: item.title,
              uri: item.slug,
              to: `/landing-page/${item.slug}`,
              icon: item.icon,
              color: item.color,
            });
          }
        });
      }).catch((error) => {
        console.error(`fetch_all_pages() error: ${error}`);
      });
    };
  }
};
</script>

<style lang="scss">
.lp-container {
  padding: var(--content-padding);
  padding-top: 0;
  width: 100%;
  max-width: 1024px;

  &>div {
    margin-bottom: var(--content-padding);
  }
}

.lp-banner {
  border-radius: var(--border-radius);
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }
}

.lp-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--input-padding);
  row-gap: var(--input-padding);

  .lp-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: var(--border-radius);
    padding: var(--input-padding);
    color: white;

    .v-icon {
      width: 100%;
      height: 50px;
      margin-bottom: 6px;

      i {
        font-size: 50px;
        color: white;
      }
    }

    .lp-card-title {
      display: block;
      font-weight: bold;
      font-size: 1.4em;
      line-height: 1.2;
    }
  }
}

.lp-body {
  @font-face {
    font-family: 'Fira Mono';
    font-style: normal;
    src: url(http://ligerbots.4msg.net:8055/admin/assets/FiraMono-Medium-CE-6Frqh.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    src: url(http://ligerbots.4msg.net:8055/admin/assets/merriweather-regular-D4NWdWaV.woff2) format('woff2');
  }

  ::selection {
    background: #e4eaf1;
  }

  body {
    color: color-mix(in srgb, #000000, #D04F1D 70%);
    background-color: #FFFFFF;
    margin: 20px;
    font-family: "Inter", system-ui;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: inherit, serif;
    color: inherit;
    font-weight: 700;
    margin-bottom: 0;
  }

  h1+p,
  h2+p,
  h3+p,
  h4+p,
  h5+p,
  h6+p {
    margin-top: 0.5em;
  }

  h1 {
    font-size: 36px;
    line-height: 46px;
    margin-top: 1em;
  }

  h2 {
    font-size: 24px;
    line-height: 34px;
    margin-top: 1.25em;
  }

  h3 {
    font-size: 19px;
    line-height: 29px;
    margin-top: 1.25em;
  }

  h4 {
    font-size: 16px;
    line-height: 26px;
    margin-top: 1.5em;
  }

  h5 {
    font-size: 14px;
    line-height: 24px;
    margin-top: 2em;
  }

  h6 {
    font-size: 12px;
    line-height: 22px;
    margin-top: 2em;
  }

  p {
    font-family: inherit, serif;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    margin: 1.5em 0;
  }

  a {
    color: color-mix(in srgb, #D04F1D, #2e3c43 25%);
    text-decoration: none;
  }

  ul,
  ol {
    font-family: inherit, serif;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    margin: 1.5em 0;
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin: 0;
  }

  b,
  strong {
    font-weight: 700;
  }

  code {
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    padding: 2px 4px;
    font-family: "Fira Mono", monospace, monospace;
    background-color: color-mix(in srgb, #FFFFFF, #D04F1D 20%);
    border-radius: 12px;
    overflow-wrap: break-word;
  }

  pre {
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    padding: 1em;
    font-family: "Fira Mono", monospace, monospace;
    background-color: color-mix(in srgb, #FFFFFF, #D04F1D 20%);
    border-radius: 12px;
    overflow: auto;
  }

  blockquote {
    font-family: inherit, serif;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    border-left: 2px solid color-mix(in srgb, #FFFFFF, #D04F1D 20%);
    padding-left: 1em;
    margin-left: 0px;
  }

  video,
  img {
    max-width: 100%;
    border-radius: 12px;
    height: auto;
  }

  iframe {
    max-width: 100%;
    border-radius: 12px;
  }

  hr {
    background-color: color-mix(in srgb, #FFFFFF, #D04F1D 20%);
    height: 1px;
    border: none;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  table {
    border-collapse: collapse;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
  }

  table th,
  table td {
    border: 1px solid color-mix(in srgb, #FFFFFF, #D04F1D 20%);
    padding: 0.4rem;
  }

  figure {
    display: table;
    margin: 1rem auto;
  }

  figure figcaption {
    color: #999;
    display: block;
    margin-top: 0.25rem;
    text-align: center;
  }
}
</style>