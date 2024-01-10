<script>
    // @ts-nocheck

    // @ts-ignore
    import { tweened } from "svelte/motion";
    import { quartInOut } from "svelte/easing";

    export let step;
    export let additionalPicture;

    const dimensions = tweened(
        { width: "100%", height: "100%" },
        { duration: 400, easing: quartInOut },
    );
    let isHovered = false;
</script>

<a
    href={step.href}
    target="_blank"
    class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid
    border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"
    style="width: {$dimensions.width}; height: {$dimensions.height};"
    on:mouseenter={() => {
        dimensions.set({ width: "100vw", height: "100vh" });
        isHovered = true;
    }}
    on:mouseleave={() => {
        dimensions.set({ width: "100%", height: "100%" });
        isHovered = false;
    }}
>
    <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl
    -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={step.icon} />
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {step.name}
    </h3>
    <div class="text-2xl">
        <slot/>
    </div>
    <div class="flex-1 flex justify-between gap-4 items-center">
        <div
            class="ml-auto cursor-pointer hover-text-slate-950 duration-200
    relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white
    after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"
        >
            <p class="relative z-4">Go to &rarr;</p>
        </div>
    </div>
    {#if isHovered}
        <img
            src={additionalPicture}
            alt="Additional Picture"
            aria-hidden="true"
        />
    {/if}
</a>
