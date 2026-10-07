import * as universal from '../entries/pages/images/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/images/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/images/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.-zzNVhw1.js","_app/immutable/chunks/directus.Bns8Ojrd.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.sCugdgLd.js"];
export const stylesheets = [];
export const fonts = [];
