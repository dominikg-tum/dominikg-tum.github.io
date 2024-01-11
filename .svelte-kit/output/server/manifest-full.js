export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","android-chrome-512x512.png","assets/Craft24.png","assets/Logo_fortiss.png","assets/TUM_Logo.png","assets/car3.png","assets/craft24-website.png","assets/particles.json","assets/profile.png","assets/robot.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.pf0qEN4N.js","app":"_app/immutable/entry/app.QcCSv-Nq.js","imports":["_app/immutable/entry/start.pf0qEN4N.js","_app/immutable/chunks/scheduler.ZJD6yJjf.js","_app/immutable/chunks/singletons.__xgy9QO.js","_app/immutable/chunks/index.Hn1nVu3u.js","_app/immutable/entry/app.QcCSv-Nq.js","_app/immutable/chunks/scheduler.ZJD6yJjf.js","_app/immutable/chunks/index.ZZ0jTpSs.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
