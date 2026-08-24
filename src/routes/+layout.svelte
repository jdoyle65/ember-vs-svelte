<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidenav from '$lib/components/Sidenav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>


<main class="flex flex-row">
	<Sidenav />
	<div class="p-4">
		{@render children()}
	</div>
</main>
