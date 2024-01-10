

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.73wl4u8d.js","_app/immutable/chunks/scheduler.7XQgmEE1.js","_app/immutable/chunks/index.P3tU8r6o.js","_app/immutable/chunks/singletons.0pD5DycS.js"];
export const stylesheets = [];
export const fonts = [];
