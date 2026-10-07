import { g as getDirectusInstance } from "../../chunks/directus.js";
import { readItems } from "@directus/sdk";
async function load({ fetch }) {
  const directus = await getDirectusInstance();
  return {
    global: await directus.request(readItems("global"))
  };
}
export {
  load
};
