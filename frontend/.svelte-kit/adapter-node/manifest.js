export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/ligerbots.css","favicon.ico","images/background.jpg","images/donate.png","images/facebook.png","images/first.svg","images/flickr.png","images/instagram.png","images/liger_head.svg","images/masthead_text.svg","images/twitter.png","images/youtube.png"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bn17fc64.js","app":"_app/immutable/entry/app.DOYPlsAY.js","imports":["_app/immutable/entry/start.Bn17fc64.js","_app/immutable/chunks/entry.CnGwax1y.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.DOYPlsAY.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.sCugdgLd.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/images/[slug]",
				pattern: /^\/images\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";