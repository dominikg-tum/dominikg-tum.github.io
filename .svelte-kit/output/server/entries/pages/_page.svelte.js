import { c as create_ssr_component, b as add_attribute, d as escape, e as each, v as validate_component } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-between gap-4 items-center" data-svelte-h="svelte-1eeftlo"><div class="ml-auto cursor-pointer hover-text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4">Go to →</p></div></div> <div class="flex flex-col items-center justify-center gap-2 sm:gap-4 lg:gap-6">${each(step.images, (image) => {
    return `<img${add_attribute("src", image, 0)} class="w-24 sm:w-32 lg:w-40">`;
  })}</div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "hackaTUM 2023 - Check24 Challenge",
      icon: "fa-solid fa-magnifying-glass-location",
      images: ["static/assets/Craft24.png"]
    },
    {
      name: "Develop Your Own Car - MbSE at Fortiss",
      icon: "fa-solid fa-car",
      images: ["static/assets/Logo_fortiss.png", "static/assets/Car3.png"]
    },
    {
      name: "Placeholder",
      icon: "fa-solid fa-magnifying-bird",
      images: []
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"> <section id="introPage" class="grid grid-cols-1 lg:grid-cols2 gap-5 py-8 sm:py-14" data-svelte-h="svelte-1fltd8w"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-7xl">Hi <span class="wave">👋</span></h2> <h3 class="font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">I&#39;m <span class="poppins text-violet-400">Dominik</span>
				Garstenauer, B.Sc.
				<span class="poppins text-violet-400">Computer Science</span></h3> <p class="z-index-class text-base sm:text-xl md:text-2xl lg:text-3xl">I have obtained my degree at the <span class="poppins text-violet-400"><a href="https://www.tum.de" target="_blank">Technical University of Munich (TUM)</a></span>
				in 2023 and have studied a
				<span class="poppins text-violet-400">wide range</span>
				of super interesting topics ranging from the
				<span class="poppins text-violet-400">theoretical and mathematical basics</span>
				of computer science to
				<span class="poppins text-violet-400">SE, Robotics, ML &amp; DL, MbSE, Mechanical Engineering,</span> and much more ...</p> <a href="https://www.linkedin.com/in/dominik-garstenauer/" target="_blank" class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"><div class="absolute top-0 right-full w-full h-full bg-gradient-to-r from-violet-400 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></a></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "assets/profile.png", 0)} alt="profile pic" class="object-cover z-[2] max-h-[70wh]"></div></section>  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center z-[2]" data-svelte-h="svelte-cwo3cz"><h6 class="text-lg sm:text-xl md:text-2xl">Here are some of my <span class="poppins text-violet-400">projects</span> I have worked on.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl"><span class="poppins text-violet-400">Curious</span> to see my
				work?</h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1a9zwfy">Bla Bla Bla bla bla bla <strong class="text-violet-400">Bla bla Bla!</strong> Cla cla cla cla.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1a9zwfy">Bla Bla Bla bla bla bla <strong class="text-violet-400">Bla bla Bla!</strong> Cla cla cla cla.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1a9zwfy">Bla Bla Bla bla bla bla <strong class="text-violet-400">Bla bla Bla!</strong> Cla cla cla cla.</p>`;
    }
  })}</div></section>  <section id="about" class="py-1 lg:py-2 flex flex-col gap-14" data-svelte-h="svelte-itb868"><div class="relative shadow-2xl grid grid-cols-2 place-items-center"><img${add_attribute("src", "assets/profile.png", 0)} alt="profile pic" class="object-cover z-[2] max-h-[70wh]"> <div class="relative shadow-2xl place-items-center text-center py-5 lg:py-8"><h2 class="font-semibold text-1xl sm:text-2xl md:text-3xl lg:text-4xl"><span class="wave">🌱</span> About me</h2> <h3 class="font-normal text-1xl sm:text-xl md:text-2xl lg:text-3xl mt-12 text-left">I am currently looking for an <span class="poppins text-violet-400">internship</span>
					to gain further work experience before persuing a
					<span class="poppins text-violet-400">Master of Science</span>
					in CS. <br></h3> </div></div></section> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
