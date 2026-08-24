<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { page } from '$app/state';
	import { ChevronRight } from '@lucide/svelte';

	const links = [{ text: 'Reactivity', href: '/reactivity' }];
</script>

<nav class="min-h-screen bg-indigo-950 p-4">
	<ul>
		{#each links as link (link.href)}
			<li class="flex items-center">
				{#if page.url.pathname === link.href}
					<ChevronRight class="size-4 shrink-0 text-indigo-300" />
				{:else}
					<span class="size-4 shrink-0"></span>
				{/if}
				<Button href={link.href} variant="link" class="text-slate-100">{link.text}</Button>
			</li>
		{/each}
	</ul>
</nav>
