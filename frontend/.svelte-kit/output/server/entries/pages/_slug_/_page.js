import { e as error } from "../../../chunks/index.js";
import { g as getDirectusInstance } from "../../../chunks/directus.js";
import { readItem } from "@directus/sdk";
async function load({ fetch, params }) {
  const directus = await getDirectusInstance();
  try {
    return {
      page: await directus.request(readItem("page", params.slug))
    };
  } catch (err) {
    throw error(404, "Page not found");
  }
}
export {
  load
};
