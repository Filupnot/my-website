

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.PEJtqzQo.js","_app/immutable/chunks/CZmuBx9L.js","_app/immutable/chunks/C7inNcmy.js"];
export const stylesheets = ["_app/immutable/assets/3.BEkLjZFH.css"];
export const fonts = [];
