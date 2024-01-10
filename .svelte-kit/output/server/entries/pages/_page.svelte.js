import { n as noop, f as assign, i as identity, c as create_ssr_component, d as subscribe, a as add_attribute, b as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function quartInOut(t) {
  return t < 0.5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dimensions, $$unsubscribe_dimensions;
  let { step } = $$props;
  let { additionalPicture } = $$props;
  const dimensions = tweened({ width: "100%", height: "100%" }, { duration: 400, easing: quartInOut });
  $$unsubscribe_dimensions = subscribe(dimensions, (value) => $dimensions = value);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.additionalPicture === void 0 && $$bindings.additionalPicture && additionalPicture !== void 0)
    $$bindings.additionalPicture(additionalPicture);
  $$unsubscribe_dimensions();
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200" style="${"width: " + escape($dimensions.width, true) + "; height: " + escape($dimensions.height, true) + ";"}"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">${escape(step.name)}</h3> <div class="text-2xl">${slots.default ? slots.default({}) : ``}</div> <div class="flex-1 flex justify-between gap-4 items-center" data-svelte-h="svelte-1ndlaiq"><div class="ml-auto cursor-pointer hover-text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4">Go to →</p></div></div> ${``}</a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Develop Your Own Car - MbSE at Fortiss",
      icon: "fa-solid fa-car",
      images: ["assets/Logo_fortiss.png", "assets/Car3.png"],
      href: "https://www.fortiss.org/forschung/fortiss-labs/detail/mobility-lab"
    },
    {
      name: "hackaTUM 2023 - Check24 Challenge",
      icon: "fa-solid fa-magnifying-glass-location",
      images: ["assets/Craft24.png"],
      href: "https://github.com/FjodorGit/hackatum-2023"
    },
    {
      name: "Bachelor's Thesis",
      icon: "fa-solid fa-robot",
      images: [],
      href: "https://www.ce.cit.tum.de/air/research/modular-robots/"
    }
  ];
  let infos = [
    {
      name: "My studies",
      description: "I have obtained my computer science degree at the Technical University of Munich (TUM) in 2023, with a minor in mechanical engineering. Studying at TUM, I have gained an in-depth knowledge of the mathematical and theoretical basics of computer science, as well as practical (& theoretical) experience in a wide range of other super interesting topics such as software engineering, robotics, ML & DL, MbSE, mMechanical engineering, and much more."
    },
    {
      name: "Skills",
      description: "I am proficient in Python, Java, C++, Shell and with Git. Additionally, trough my studies and projects I have experience with SQL(PostgreSQL), x86 Assembly, Haskell, C, Docker, Matlab, several Python and Java frameworks (Maven, Spring, numpy, unittest, pandas, matplotlib, scikit-learn, tensorflow, pytorch, timor) OpenModelica, AutoFOCUS3, and Solidworks3D-CAD. But most importantly, I am a fast learner and I am always eager to learn new languages and frameworks."
    },
    {
      name: "Other interests",
      description: "I am currently living in Munich, and I have recently started to dive into the world of ML and DL via university courses. I am also a big fan of sports, especially soccer, volleyball and skateboarding."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"> <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-1j3l8qa"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 lg:pl-20"><h3 class="font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">Hi <span class="wave">👋</span> I&#39;m
				<span class="poppins text-violet-400">Dominik</span>
				Garstenauer, B.Sc.
				<span class="poppins text-violet-400">Computer Science</span></h3> <p class="z-index-class text-base sm:text-xl md:text-2xl lg:text-3xl">I am a <span class="poppins text-violet-400">passionate
				</span>computer science student with a Bachelor of Science from
				the
				<span class="poppins text-violet-400"><a href="https://www.tum.de" target="_blank">Technical University of Munich (TUM)</a>.</span></p> <a href="https://www.linkedin.com/in/dominik-garstenauer/" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"><div class="absolute top-0 right-full w-full h-full bg-gradient-to-r from-violet-400 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "assets/profile.png", 0)} alt="profile pic" class="object-cover z-[2] max-h-[85wh]"></div></section>  <section id="currentInfo" class="py-15 lg:py-15 flex flex-col gap-14" data-svelte-h="svelte-jz27hg"><div class="border-box flex items-center space-x-4 max-w-4xl mx-auto"><span class="wave"><i class="fa-solid fa-circle-info sm:text-6xl md:text-6xl lg:text-7xl"></i></span> <h3 class="font-semibold text-1xl sm:text-2xl md:text-3xl">I am currently looking for an <strong class="text-violet-400">internship</strong> in Munich or Regensburg
				to gain further <span class="poppins text-violet-400">work experience</span> before persuing a <span class="poppins text-violet-400">M.Sc.</span> in CS. 
				If you are interested in my profile, please feel free to <span class="poppins text-violet-400">reach out</span> to me.</h3></div></section>   <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center z-[2]" data-svelte-h="svelte-11g9eyl"><h6 class="text-large sm:text-xl md:text-2xl">Here are some <span class="poppins text-violet-400">projects</span> I have worked on.</h6> <h3 class="font-semibold text-2xl sm:text-4xl md:text-4xl lg:text-5xl"><span class="poppins text-violet-400">Curious</span> to see my
				work?</h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render(
    $$result,
    {
      step: steps[0],
      additionalPicture: "assets/car3.png"
    },
    {},
    {
      default: () => {
        return `<p data-svelte-h="svelte-tbbtpf">Working in a team of four, we used <strong class="text-violet-400">Model-based systems engineering (MbSE)</strong> 
					to develop software for a small, <strong class="text-violet-400">self-driving car model </strong>. We implemented steering, braking, gears (and ofc a sport mode),
					but mainly <strong class="text-violet-400">advanced driver-assistance systems</strong> like adaptive cruise control, emergency breaking, and <strong class="text-violet-400">lane-keeping</strong>.
					I learned a lot about <strong class="text-violet-400">agile software development</strong> by completing a full development process of modeling, simulating and deploying/testing on hardware from a set of <strong class="text-violet-400">requirements</strong>.
					<br> <strong class="text-violet-400">Tools used:</strong> AutoFOCUS3, OpenModelica, Matlab, Gazebo (simulation), Python (Matplotlib, Numpy), Git</p>`;
      }
    }
  )} ${validate_component(Step, "Step").$$render(
    $$result,
    {
      step: steps[1],
      additionalPicture: "assets/craft24-website.png"
    },
    {},
    {
      default: () => {
        return `<p data-svelte-h="svelte-fhn59y">During the <strong class="text-violet-400"><a href="https://hack.tum.de/" target="_blank">hackaTUM 2023</a></strong> I developed an MVP for CHECK24&#39;s craftsmen
					 comparison <strong class="text-violet-400">software engineering challenge</strong> in a team of four. We implemented a frontend and backend for a geo-distance, 
					 weighted ranking algorithm that ranks craftsmen based on their distance to the customer, their rating, and their price. Additionally, we <strong class="text-violet-400">optimized our MVP for speed</strong> 
					 with pre-calculations on the database. Working with new technologies and a very limited amount of time was a <strong class="text-violet-400">fun and challenging experience</strong> which I would love to repeat.
					 <br> <strong class="text-violet-400">Tools used:</strong> SvelteKit, TailwindCSS, Rust, Diesel, PostgreSQL, Docker, Git</p>`;
      }
    }
  )} ${validate_component(Step, "Step").$$render(
    $$result,
    {
      step: steps[2],
      additionalPicture: "assets/robot.png"
    },
    {},
    {
      default: () => {
        return `<p data-svelte-h="svelte-1cz5768">For my bachelor&#39;s thesis, I designed, implemented, and executed a <strong class="text-violet-400">simulation-based benchmark suite</strong> for modular reconfigurable robots
					based on <strong class="text-violet-400"><a href="https://www.nist.gov/el/intelligent-systems-division-73500/robotic-grasping-and-manipulation-assembly/assembly" target="_blank">NIST&#39;s specifications</a></strong>. 
					Additionally, I implemented robotic pick-and-place features for <strong class="text-violet-400"><a href="https://arxiv.org/abs/2209.06758" target="_blank">Timor Python: A Toolbox for Industrial Modular Robotics</a></strong>.
					Contributing to Timor and <strong class="text-violet-400"><a href="https://cobra.cps.cit.tum.de/" target="_blank">CoBRA</a></strong>, I learned a lot about writing high quality <strong class="text-violet-400">python code</strong> 
					including strong <strong class="text-violet-400">unittests</strong>, a <strong class="text-violet-400">structured and self-motivated</strong> work approach, and <strong class="text-violet-400">robotics</strong>.
					<br> <strong class="text-violet-400">Tools used:</strong> Python (Timor, Numpy, unittest), Solidworks 3D-CAD, Git</p>`;
      }
    }
  )}</div></section>  <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 z-[2]" data-svelte-h="svelte-ir8n5o"><h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(infos, (info, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppins font-semibold text-4xl sm:text-5xl md:text-6xl text-slate-500">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(info.name)}</h3> <p>${escape(info.description)} </p></div> </div>`;
  })}</div></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
