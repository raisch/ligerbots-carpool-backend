import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0) $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0) $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0) $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0) $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0) $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
function set_read_implementation(fn) {
}
function set_manifest(_) {
}
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n\n<head>\n  <meta charset="utf-8" />\n  <link rel="icon" href="@assets/2611e18f-2ca4-4c9f-94c3-7f6cf5e56196" type="image/x-icon">\n  <meta name="viewport" content="width=device-width, initial-scale=1" />\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">\n  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700">\n  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Serif:700">\n  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700">\n  <link rel="stylesheet" href="' + assets2 + '/css/ligerbots.css">\n  <meta property="og:title" content="Welcome to the LigerBots">\n  ' + head + '\n</head>\n\n<body data-sveltekit-preload-data="hover">\n  <div id="header-ghost"></div>\n  <div class="container-fluid no-side-padding" id="myMain">\n\n    <div class="col-xs-12 no-side-padding">\n      <div class="row header" id="myMasthead">\n        <div class="masthead">\n          <a href="/">\n            <img id="liger-text" src="@assets/c632dcdf-27dd-448c-950d-21ec6e97e7ce/masthead_text.svg">\n            <img id="liger_head" src="@assets/5579e4ad-0648-4819-b917-2ee06be2aad8/liger_head.svg">\n          </a>\n        </div>\n        <ul>\n          <li>\n            <a class="header-link" target="_blank" href="http://www.firstinspires.org/robotics/frc">\n              <img src="/images/first.svg">\n            </a>\n          </li>\n          <li>\n            <a class="header-link" target="_blank" href="https://www.youtube.com/c/ligerbots">\n              <img src="/images/youtube.png">\n            </a>\n          </li>\n          <li>\n            <a class="header-link" target="_blank" href="https://twitter.com/ligerbots">\n              <img src="/images/twitter.png">\n            </a>\n          </li>\n          <li>\n            <a class="header-link" target="_blank" href="https://www.facebook.com/The-LigerBots-162121450506644/">\n              <img src="/images/facebook.png">\n            </a>\n          </li>\n          <li>\n            <a class="header-link" target="_blank" href="https://www.instagram.com/ligerbots_frc2877/">\n              <img src="/images/instagram.png">\n            </a>\n          </li>\n          <li>\n            <a class="header-link" target="_blank" href="https://www.flickr.com/photos/ligerbots/">\n              <img src="/images/flickr.png">\n            </a>\n          </li>\n          <li>\n            <a class="header-link" href="/sponsor-us">\n              <img style="width:10%" src="/images/donate.png">\n            </a>\n          </li>\n        </ul>\n      </div><!-- #myMasthead -->\n\n      <nav class="navbar navbar-ligerbots">\n        <div class="container-fluid" id="navbarContainer">\n          <div class="navbar-header">\n            <button type="button" class="navbar-toggle navbar-toggle-ligerbots" data-toggle="collapse"\n              data-target="#myNavbar">\n              <span class="icon-bar icon-bar-ligerbots"></span>\n              <span class="icon-bar icon-bar-ligerbots"></span>\n              <span class="icon-bar icon-bar-ligerbots"></span>\n            </button>\n          </div>\n          <div class="collapse navbar-collapse" id="myNavbar">\n            <ul class="nav navbar-nav nav-stacked">\n              <li class="active"><a href="/">Home</a></li>\n              <li class="dropdown">\n                <a class="dropdown-toggle" data-toggle="dropdown" href="#">About<span class="caret"></span></a>\n                <ul class="dropdown-menu">\n                  <li><a href="/join">Join the LigerBots</a></li>\n                  <li><a href="/about">About Us</a></li>\n                  <li><a href="/contact">Contact Us</a></li>\n                </ul>\n              </li>\n              <li class="dropdown">\n                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Support<span class="caret"></span></a>\n                <ul class="dropdown-menu">\n                  <li><a href="/sponsor-us">Become a Sponsor</a></li>\n                  <li><a href="/current-sponsors">Current Sponsors</a></li>\n                </ul>\n              </li>\n\n              <li><a href="/calendar">Calendar</a></li>\n\n              <li class="dropdown">\n                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Outreach<span class="caret"></span></a>\n                <ul class="dropdown-menu">\n                  <li><a href="/outreach">Outreach</a></li>\n                  <li role="separator" class="divider"></li>\n                  <li><a href="/fll">FLL</a></li>\n                  <li><a href="/educational-resources">Educational Resources</a></li>\n                </ul>\n              </li>\n              <li class="dropdown">\n                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Media<span class="caret"></span></a>\n                <ul class="dropdown-menu">\n                  <li><a href="/gallery">Photos</a></li>\n                </ul>\n              </li>\n              <li class="dropdown">\n                <a class="dropdown-toggle" data-toggle="dropdown" href="#">Resources<span class="caret"></span></a>\n                <ul class="dropdown-menu">\n                  <li><a href="/carpools.php">Carpools</a></li>\n                  <li><a href="/links">Team Links</a></li>\n                  <li><a href="/directory.php">Directory</a></li>\n                  <li><a href="/facebook.php">Facebook</a></li>\n                  <li><a href="/preseason-resources/">Preseason Resources</a></li>\n                  <li><a href="http://team.ligerbots.com">Team Internal Site</a></li>\n                </ul>\n              </li>\n              <li class="dropdown">\n                <a class="dropdown-toggle" data-toggle="dropdown" href="#">My Account<span class="caret"></span></a>\n                <ul class="dropdown-menu">\n                  <li><a href="/wp-backend/wp-admin/edit.php">Edit Posts</a></li>\n                  <li><a href="/wp-backend/wp-admin/profile.php">My Profile</a></li>\n                  <li><a href="/login.php?logout">Logout</a></li>\n                </ul>\n              </li>\n            </ul>\n          </div><!-- #myNavbar -->\n        </div><!-- #navbarContainer -->\n      </nav>\n\n      <div class="row page-body" id="myContent">\n        <div class="col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">\n          <div class="row top-spacer"> </div>\n          <div class="row bottom-margin text-background">\n            <div class="col-md-10 col-md-offset-1 col-sm-12">\n              <div style="display: contents">' + body + '</div>\n            </div>\n          </div>\n        </div>\n      </div><!-- #myContent -->\n\n      <div class="row page-body" id="myFooter">\n        <div class="col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">\n          <div class="row row-margins">\n            <div class="col-xs-12">\n              <div class="panel panel-sprs">\n                <div class="big-sprs">\n                  <!-- RR / This was an embed to support clickable areas. -->\n\n                  <img class="sprs-image" usemap="#sprs-map" width="1110" height="190"\n                    src="@assets/07afc2bc-cd08-48a6-93d7-852ff435cb7c/sponsor_bar_full_2024a.svg">\n\n                  <map name="sprs-map">\n                    <area shape="rect" coords="0,0,100,51" href="/foo" alt="Foo">\n                    <area shape="rect" coords="100,0,200,51" href="/bar" alt="Sponsor Bar">\n                  </map>\n\n                </div>\n                <div class="small-sprs">\n                  <!-- RR / This was an embed to support clickable areas. -->\n                  <img class="sprs-image"\n                    src="@assets/e3cc554d-9b43-4123-ba86-3c83c4ddf0b2/sponsor_bar_narrow_2024a.svg">\n                </div>\n              </div>\n              <div style="text-align: center;">\n                <p class="label-blue"><a href="/current-sponsors">Thank you to ALL our Sponsors (click here)!</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div><!-- #myFooter -->\n\n    </div>\n\n  </div><!-- #myMain -->\n\n  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"><\/script>\n  <script type="text/javascript"\n    src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"><\/script>\n\n</body>\n\n</html>',
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "83giyn"
};
async function get_hooks() {
  return {
    ...await import("./hooks.server.js")
  };
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_manifest as k,
  set_prerendering as l,
  set_read_implementation as m,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
