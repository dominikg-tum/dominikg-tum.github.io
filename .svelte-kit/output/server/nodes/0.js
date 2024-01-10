import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.wQweZTOw.js","_app/immutable/chunks/scheduler.7XQgmEE1.js","_app/immutable/chunks/index.P3tU8r6o.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = ["_app/immutable/assets/0.ZkM0iGYx.css"];
export const fonts = [];
