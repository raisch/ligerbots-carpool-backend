import { g as getDirectusInstance } from "../../../../chunks/directus.js";
import { readFiles } from "@directus/sdk";
const API_URL = "http://ligerbots.4msg.net:8055";
async function getFileUrlByName(name) {
  const directus = await getDirectusInstance();
  const query = {
    filter: {
      filename_download: { _eq: name }
    },
    fields: ["id"]
  };
  const resp = await directus.request(readFiles(query));
  const fileId = resp[0]?.id;
  const url = fileId ? `${API_URL}/assets/${fileId}` : null;
  return { name, fileId, url };
}
async function load({ params }) {
  const slug = params.slug;
  return await getFileUrlByName(slug);
}
export {
  load
};
