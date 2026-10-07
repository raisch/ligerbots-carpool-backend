import { c as create_ssr_component } from "../../../chunks/ssr.js";
import { e as escape } from "../../../chunks/escape.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<center><div class="notindex-title">${escape(data.page.title)}</div></center> <div class="level4-heading"></div> <!-- HTML_TAG_START -->${data.page.content}<!-- HTML_TAG_END -->`;
});
export {
  Page as default
};
