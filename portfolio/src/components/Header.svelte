<script>
// @ts-nocheck

	export let y;

    let tabs = [
        {
            name: "Projects",
            link: "#projects"
        },
        {
            name: "About me",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]
    
</script>

<header class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid " + (
    y > 0 ? ' py-4 bg-slate-950 border-violet-950' : ' py-6 bg-transparent border-transparent' )}>
	<h1>
		<b>Dominik</b> Garstenauer's Portfolio
	</h1>
    <div class="">
        {#each tabs as tab, index}
            <a href="{tab.link}">
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
</header>
