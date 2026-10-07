import { createDirectus, authentication, rest } from "@directus/sdk";
const API_URL = "http://ligerbots.4msg.net:8055";
const USERNAME = "frontend@example.com";
const PASSWORD = "supersecret";
async function getDirectusInstance() {
  const directus = createDirectus(API_URL).with(authentication("json")).with(rest());
  await directus.login(USERNAME, PASSWORD);
  return directus;
}
export {
  getDirectusInstance as g
};
