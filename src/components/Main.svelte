<script>
	// @ts-nocheck

	import Step from "./Step.svelte";

	let steps = [
		{
			name: "Develop Your Own Car - MbSE at Fortiss",
			icon: "fa-solid fa-car",
			images: ["assets/Logo_fortiss.png", "assets/Car3.png"],
			href: "https://www.fortiss.org/forschung/fortiss-labs/detail/mobility-lab",
		},
		{
			name: "hackaTUM 2023 - Check24 Challenge",
			icon: "fa-solid fa-magnifying-glass-location",
			images: ["assets/Craft24.png"],
			href: "https://hack.tum.de/past-events/events-2023/2023-projects/",

		},
		{
			name: "Bachelor's Thesis",
			icon: "fa-solid fa-robot",
			images: [],
			href: "https://www.ce.cit.tum.de/air/research/modular-robots/",
		},
	];

	let infos = [
		{
			name: "My studies",
			description:
				"I have obtained my degree at the Technical University of Munich (TUM) in 2023. During my studies I have learned about a wide range of super interesting topics, ranging from the theoretical and mathematical basics of computer science, to (agile) SE, Robotics, ML & DL, MbSE, Mechanical Engineering, and much more.",
		},
		{
			name: "Commonucation / Other interests",
			description:
				"I am currently living in Munich from MunichBla bla blas bla meh",
		},
		{
			name: "Tech Stack / Skills",
			description: "Bla bla blas bla!",
		},
	];

	let currentInfo = {
		name: "Internship",
		icon: "fa-solid fa-info",
	};

</script>

<main class="flex flex-col flex-1 p-4">
	<!--INtro section-->
	<section
		id="introPage"
		class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
	>
		<div
			class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 lg:pl-20"
		>
			<h3
				class="font-semibold text-4xl sm:text-4xl md:text-5xl lg:text-6xl"
			>
				Hi <span class="wave">👋</span> I'm
				<span class="poppins text-violet-400">Dominik</span>
				Garstenauer, B.Sc.
				<span class="poppins text-violet-400">Computer Science </span>
			</h3>
			<p
				class="z-index-class text-base sm:text-xl md:text-2xl lg:text-3xl"
			>
				I am a <span class="poppins text-violet-400">
					passionate
				</span>computer science student with a Bachelor of Science from
				the
				<span class="poppins text-violet-400">
					<a href="https://www.tum.de" target="_blank">
						Technical University of Munich (TUM)</a
					>
				</span>
			</p>
			<a
				href="https://www.linkedin.com/in/dominik-garstenauer/"
				target="_blank"
				class="blueShadow mx-auto lg:mr-auto lg:ml-0 lg:ml-0 text-base sm:text-lg md:text-xl
				poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
			>
				<div
					class="absolute top-0 right-full w-full h-full bg-gradient-to-r from-violet-400 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
				/>
				<h4 class="relative z-9">Get in touch &rarr;</h4>
			</a>
		</div>
		<div class="relative shadow-2xl grid place-items-center">
			<img
				src={"assets/profile.png"}
				alt="profile pic"
				class="object-cover z-[2] max-h-[85wh]"
			/>
		</div>
	</section>

	<!-- Current Info section-->
	<section id="currentInfo" class="py-15 lg:py-15 flex flex-col gap-14">
		<div class="border-box flex items-center space-x-4 max-w-4xl mx-auto">
			<span class="wave"><i class="fa-solid fa-circle-info sm:text-6xl md:text-6xl lg:text-7xl"></i></span>
			<h3 class="font-semibold text-1xl sm:text-2xl md:text-3xl">
				I am currently looking for an <strong class="text-violet-400"> internship </strong> in Munich or Regensburg
				to gain further <span class="poppins text-violet-400"> work experience </span> before persuing a <span class="poppins text-violet-400"> M.Sc.</span> in CS. 
				If you are interested in my profile, please feel free to <span class="poppins text-violet-400"> reach out </span> to me.
			</h3>
		</div>
	</section>
	<!-- 
			<p class="mx-auto poppins font-semibold text-5xl sm:text-3xl md:text-6xl">
				<span class="wave">🌱</span>
			</p> 
			-->

	<!-- The project section -->
	<section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
		<div class="flex flex-col gap-2 text-center z-[2]">
			<h6 class="text-large sm:text-xl md:text-2xl">
				Here are some <span class="poppins text-violet-400"
					>projects</span
				> I have worked on.
			</h6>
			<h3
				class="font-semibold text-2xl sm:text-4xl md:text-4xl lg:text-5xl"
			>
				<span class="poppins text-violet-400"> Curious </span> to see my
				work?
			</h3>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
			<Step step={steps[0]} additionalPicture="assets/car3.png">
				<p>
					Working in a team of four, we used <strong class="text-violet-400"> Model-based systems engineering (MbSE)</strong> 
					to develop software for a small, <strong class="text-violet-400"> self-driving car model </strong>. We implemented steering, braking, gears (and ofc a sport mode),
					but mainly <strong class="text-violet-400"> advanced driver-assistance systems</strong> like adaptive cruise control, emergency breaking, and <strong class="text-violet-400">lane-keeping</strong>.
					I learned a lot about <strong class="text-violet-400"> agile software development</strong> by completing a full development process of modeling, simulating and deploying/testing on hardware from a set of <strong class="text-violet-400"> requirements</strong>.
					<br> <strong class="text-violet-400">Tools used:</strong> AutoFOCUS3, OpenModelica, Matlab, Gazebo (simulation), Python (Matplotlib, Numpy), Git.
				</p>
			</Step>
			<Step step={steps[1]} additionalPicture="assets/car3.png">
				<p>
					Bla Bla Bla bla bla bla <strong class="text-violet-400"
						>Bla bla Bla!</strong
					> Cla cla cla cla.
				</p>
			</Step>
			<Step step={steps[2]} additionalPicture="assets/car3.png">
				<p>
					Bla Bla Bla bla bla bla <strong class="text-violet-400"
						>Bla bla Bla!</strong
					> Cla cla cla cla.
				</p>
			</Step>
		</div>
    <!-- The images 
    <div
        class="flex flex-col items-center justify-center gap-2 sm:gap-4 lg:gap-6"
    >
        {#each step.images as image}
            <img src={image} class="w-24 sm:w-32 lg:w-40" />
        {/each}
    </div>
    -->
	</section>

	<!-- About Me + current info -->
	<section
		id="about"
		class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div
			class="flex flex-col gap-2 text-center relative
			before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
			after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 z-[2]"
		>
			<h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
			<h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
				A bit <span class="poppins text-violet-400">about</span> me.
			</h3>
		</div>
		<div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
			{#each infos as info, index}
				<div class="flex gap-6 sm:gap-8">
					<p
						class="poppins font-semibold text-4xl sm:text-5xl md:text-6xl text-slate-500"
					>
						0{index + 1}
					</p>
					<div class="flex flex-col gap-6 sm:gap-8">
						<h3 class="text-2xl sm:text-3xl md:text-5xl">
							{info.name}
						</h3>
						<p>
							{info.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

</main>
