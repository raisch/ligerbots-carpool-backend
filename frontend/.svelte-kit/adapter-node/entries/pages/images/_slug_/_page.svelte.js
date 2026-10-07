import { c as create_ssr_component } from "../../../../chunks/ssr.js";
import { e as escape } from "../../../../chunks/escape.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<pre>${escape(JSON.stringify(data, null, 2))}</pre>`;
});
export {
  Page as default
};
