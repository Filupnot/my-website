import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C9_EbLDs.js","_app/immutable/chunks/CZmuBx9L.js","_app/immutable/chunks/C7inNcmy.js","_app/immutable/chunks/CzN-7z24.js"];
export const stylesheets = ["_app/immutable/assets/0.B_I4SDS5.css"];
export const fonts = [];
