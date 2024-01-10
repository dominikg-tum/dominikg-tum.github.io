export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/Craft24.png","assets/Logo_fortiss.png","assets/TUM_Logo.png","assets/car3.png","assets/favicon.png","assets/particles.json","assets/profile.png","favicon.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.EsUx_cfl.js","app":"_app/immutable/entry/app.d0XYby0R.js","imports":["_app/immutable/entry/start.EsUx_cfl.js","_app/immutable/chunks/scheduler.7XQgmEE1.js","_app/immutable/chunks/singletons.0pD5DycS.js","_app/immutable/entry/app.d0XYby0R.js","_app/immutable/chunks/scheduler.7XQgmEE1.js","_app/immutable/chunks/index.P3tU8r6o.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
