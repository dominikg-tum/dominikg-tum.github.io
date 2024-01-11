import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.yqGl-8xA.js","_app/immutable/chunks/scheduler.ZJD6yJjf.js","_app/immutable/chunks/index.ZZ0jTpSs.js","_app/immutable/chunks/each.-oqiv04n.js"];
export const stylesheets = ["_app/immutable/assets/0.BgWowbSJ.css"];
export const fonts = [];
