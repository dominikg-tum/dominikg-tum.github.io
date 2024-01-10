

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.XFZxzGj3.js","_app/immutable/chunks/scheduler.ZJD6yJjf.js","_app/immutable/chunks/index.ZZ0jTpSs.js","_app/immutable/chunks/each.-oqiv04n.js","_app/immutable/chunks/index.Hn1nVu3u.js"];
export const stylesheets = [];
export const fonts = [];
