export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","philip-face.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B4oZLxVo.js",app:"_app/immutable/entry/app.Dd_-4y8M.js",imports:["_app/immutable/entry/start.B4oZLxVo.js","_app/immutable/chunks/J1j13NYR.js","_app/immutable/chunks/CZmuBx9L.js","_app/immutable/chunks/CzN-7z24.js","_app/immutable/entry/app.Dd_-4y8M.js","_app/immutable/chunks/CZmuBx9L.js","_app/immutable/chunks/C7inNcmy.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
