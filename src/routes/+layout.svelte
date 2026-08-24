<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidenav from '$lib/components/Sidenav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="flex flex-row">
	<Sidenav />
	<div class="max-h-screen flex-1 overflow-y-auto p-4">
		{@render children()}
	</div>
</main>
