import { c as create_ssr_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
const css = {
  code: "h2.svelte-1tcp8tm{color:red}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  /** @type {import('./$types').PageData} */\\n  export let data;\\n<\/script>\\n\\n<h1>{data.global.title}</h1>\\n\\n<p>{@html data.global.description}</p>\\n\\n<h2>DANGER! This is a WORK IN PROGRESS</h2>\\n\\n<p>If you expect it to work with complete fidelity to <a href=\\"http://ligerbots.org\\" target=_blank>ligerbots.org</a>,\\n   you will be disappointed.</p>\\n\\n<p>But if you want to see how it's done, or even help out, you're in the right place.</p>\\n\\n<style>\\n  h2 {\\n    color: red;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiBE,iBAAG,CACD,KAAK,CAAE,GACT"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<h1>${escape(data.global.title)}</h1> <p><!-- HTML_TAG_START -->${data.global.description}<!-- HTML_TAG_END --></p> <h2 class="svelte-1tcp8tm" data-svelte-h="svelte-1dy4m9i">DANGER! This is a WORK IN PROGRESS</h2> <p data-svelte-h="svelte-vaseza">If you expect it to work with complete fidelity to <a href="http://ligerbots.org" target="_blank">ligerbots.org</a>,
   you will be disappointed.</p> <p data-svelte-h="svelte-osjz6o">But if you want to see how it&#39;s done, or even help out, you&#39;re in the right place.</p>`;
});
export {
  Page as default
};
