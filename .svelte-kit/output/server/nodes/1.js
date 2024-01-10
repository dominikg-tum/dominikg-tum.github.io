

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9e_zbLdl.js","_app/immutable/chunks/scheduler.ZJD6yJjf.js","_app/immutable/chunks/index.ZZ0jTpSs.js","_app/immutable/chunks/singletons.w8dg_HTZ.js","_app/immutable/chunks/index.Hn1nVu3u.js"];
export const stylesheets = [];
export const fonts = [];
