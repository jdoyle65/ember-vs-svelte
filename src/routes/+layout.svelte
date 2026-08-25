<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidenav from '$lib/components/Sidenav.svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let scrollContainer = $state<HTMLDivElement>();

	afterNavigate(() => {
		scrollContainer?.scrollTo({ top: 0 });
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="flex flex-row">
	<Sidenav />
	<div bind:this={scrollContainer} class="h-screen flex-1 overflow-y-auto">
		<div class="max-w-5xl px-10 py-10">
			{@render children()}
		</div>
	</div>
</main>
