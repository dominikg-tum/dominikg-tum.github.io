import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n\n<head>\n	<meta charset="utf-8" />\n	<script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"\n		integrity="sha512-Kef5sc7gfTacR7TZKelcrRs15ipf7+t+n7Zh6mKNJbmW+/RRdCW9nwfLn4YX0s2nO6Kv5Y2ChqgIakaC6PW09A=="\n		crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\n	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"\n		integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="\n		crossorigin="anonymous" referrerpolicy="no-referrer" />\n	<link rel="preconnect" href="https://fonts.googleapis.com">\n	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n	<link\n		href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Libre+Barcode+128+Text&family=Poppins:wght@100;300;400;500;600;700;800&family=Questrial&family=Roboto+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Serif:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700&display=swap"\n		rel="stylesheet">\n	<link\n		href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Libre+Barcode+128+Text&family=Poppins:wght@100;300;400;500;600;700;800&family=Questrial&display=swap"\n		rel="stylesheet">\n	<link\n		href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Libre+Barcode+128+Text&family=Poppins:wght@100;300;400;500;600;700;800&family=Questrial&display=swap"\n		rel="stylesheet">\n	<link\n		href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Poppins:wght@100;300;400;500;600;700;800&family=Questrial&display=swap"\n		rel="stylesheet">\n	<link\n		href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&family=Questrial&display=swap"\n		rel="stylesheet">\n	<link rel="icon" href="' + assets2 + '/android-chrome-512x512.png" />\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\n	' + head + '\n</head>\n\n<body data-sveltekit-preload-data="hover" class="bg-slate-950 text-white relative">\n	<div style="display: contents" class="relative z-[1]">' + body + `</div>
	<div class="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-75">
		<div class="absolute inset-0" id="particles-js"></div>
	</div>

	<!-- heropattern abstract background 
	<svg id="hero-abstract-pattern" class="svg-snoweb svg-theme-light" preserveaspectratio="xMidYMid slice"
		viewbox="0 0 1120 920" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="newGradient" x1="0" x2="0" y1="0" y2="1">
				<stop offset="0%" stop-color="#800080" />
				<stop offset="100%" stop-color="#600080" />
			</linearGradient>
			<pattern height="22" id="unit-202312-3121-2522-50c9d82d-f054-4d15-a12d-1c8163d1fe22"
				patternunits="userSpaceOnUse" width="112" x="0" y="0">
				<path class="svg-fill-primary"
					d="M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z"
					fill-rule="evenodd" fill="url(#newGradient)">
				</path>
			</pattern>
		</defs>
		<rect fill="url(#unit-202312-3121-2522-50c9d82d-f054-4d15-a12d-1c8163d1fe22)" height="920" width="1120">
		</rect>
	</svg>
	-->

	<!-- Particles bakground effect -->
	<script>
		particlesJS.load('particles-js', 'assets/particles.json', function () { console.log('callback - particles.js config loaded'); });
	<\/script>

	<!-- White squiggly random mask 
	
	<div class="absolute inset-0 z-0"> 
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#ffffff" fill-opacity="1"
				d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,122.7C672,128,768,160,864,176C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
			</path>
		</svg>
	</div>  
	-->

</body>

</html>`,
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "uf700m"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_prerendering as k,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
