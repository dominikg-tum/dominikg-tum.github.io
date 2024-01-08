
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js\"\n\t\tintegrity=\"sha512-Kef5sc7gfTacR7TZKelcrRs15ipf7+t+n7Zh6mKNJbmW+/RRdCW9nwfLn4YX0s2nO6Kv5Y2ChqgIakaC6PW09A==\"\n\t\tcrossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>\n\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\"\n\t\tintegrity=\"sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==\"\n\t\tcrossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n\t<link\n\t\thref=\"https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Libre+Barcode+128+Text&family=Poppins:wght@100;300;400;500;600;700;800&family=Questrial&family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Serif:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700&display=swap\"\n\t\trel=\"stylesheet\">\n\t<link\n\t\thref=\"https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Libre+Barcode+128+Text&family=Poppins:wght@100;300;400;500;600;700;800&family=Questrial&display=swap\"\n\t\trel=\"stylesheet\">\n\t<link\n\t\thref=\"https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Libre+Barcode+128+Text&family=Poppins:wght@100;300;400;500;600;700;800&family=Questrial&display=swap\"\n\t\trel=\"stylesheet\">\n\t<link\n\t\thref=\"https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;300;400;500;600;700;800&family=Questrial&display=swap\"\n\t\trel=\"stylesheet\">\n\t<link\n\t\thref=\"https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Questrial&display=swap\"\n\t\trel=\"stylesheet\">\n\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t" + head + "\n</head>\n\n<body data-sveltekit-preload-data=\"hover\" class=\"bg-slate-950 text-white relative\">\n\t<div style=\"display: contents\" class=\"relative z-[1]\">" + body + "</div>\n\t<div class=\"absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-75\">\n\t\t<div class=\"absolute inset-0\" id=\"particles-js\"></div>\n\t</div>\n\n\t<!-- heropattern abstract background -->\n\t<svg id=\"hero-abstract-pattern\" class=\"svg-snoweb svg-theme-light\" preserveaspectratio=\"xMidYMid slice\"\n\t\tviewbox=\"0 0 1120 920\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t<defs>\n\t\t\t<linearGradient id=\"newGradient\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\">\n\t\t\t\t<stop offset=\"0%\" stop-color=\"#800080\" /> <!-- Dark Purple -->\n\t\t\t\t<stop offset=\"100%\" stop-color=\"#600080\" /> <!-- Darker Purple -->\n\t\t\t</linearGradient>\n\t\t\t<pattern height=\"92\" id=\"unit-202312-3121-2522-50c9d82d-f054-4d15-a12d-1c8163d1fe22\"\n\t\t\t\tpatternunits=\"userSpaceOnUse\" width=\"112\" x=\"0\" y=\"0\">\n\t\t\t\t<path class=\"svg-fill-primary\"\n\t\t\t\t\td=\"M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z\"\n\t\t\t\t\tfill-rule=\"evenodd\" fill=\"url(#newGradient)\">\n\t\t\t\t</path>\n\t\t\t</pattern>\n\t\t</defs>\n\t\t<rect fill=\"url(#unit-202312-3121-2522-50c9d82d-f054-4d15-a12d-1c8163d1fe22)\" height=\"920\" width=\"1120\">\n\t\t</rect>\n\t</svg>\n\n\t<!-- Particles bakground effect -->\n\t<script>\n\t\tparticlesJS.load('particles-js', 'assets/particles.json', function () { console.log('callback - particles.js config loaded'); });\n\t</script>\n\n\t<!-- White squiggly random mask \n\t\n\t<div class=\"absolute inset-0 z-0\"> \n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\n\t\t\t<path fill=\"#ffffff\" fill-opacity=\"1\"\n\t\t\t\td=\"M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\">\n\t\t\t</path>\n\t\t</svg>\n\t</div>  \n\t-->\n\n</body>\n\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1hk8tx1"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_prerendering, set_private_env, set_public_env, set_safe_public_env };
