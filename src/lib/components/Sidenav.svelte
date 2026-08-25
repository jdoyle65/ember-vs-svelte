<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { ChevronRight } from '@lucide/svelte';

	const links = [
		{ text: 'Reactivity', path: '/reactivity' },
		{ text: 'Component Props', path: '/props' },
		{ text: 'Template Helpers', path: '/template-helpers' },
		{ text: 'Using Components', path: '/component-imports' },
		{ text: 'Routing', path: '/routing' },
		{ text: 'Data Fetching', path: '/data-fetching' },
		{ text: 'Services & Shared State', path: '/services' },
		{ text: 'Lifecycle Hooks', path: '/lifecycle' },
		{ text: 'CSS Scoping', path: '/css-scoping' },
		{ text: 'Two-way Binding & Forms', path: '/forms' }
	];
</script>

<nav class="min-h-screen bg-indigo-950 p-4">
	<ul>
		{#each links as link (link.path)}
			<li class="flex items-center">
				{#if page.url.pathname === base + link.path}
					<ChevronRight class="size-4 shrink-0 text-indigo-300" />
				{:else}
					<span class="size-4 shrink-0"></span>
				{/if}
				<Button href={base + link.path} variant="link" class="text-slate-100">{link.text}</Button>
			</li>
		{/each}
	</ul>
</nav>
