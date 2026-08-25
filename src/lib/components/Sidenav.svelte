<script lang="ts">
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

<nav class="flex h-screen w-60 shrink-0 flex-col bg-indigo-950 px-3 py-6">
	<div class="mb-8 px-3">
		<p class="text-xs font-semibold tracking-widest text-indigo-400 uppercase">Framework Guide</p>
		<a
			href={base + '/'}
			class="mt-1 block text-lg font-bold text-white transition-colors hover:text-indigo-200"
		>
			Ember vs Svelte
		</a>
	</div>
	<ul class="flex flex-col gap-0.5">
		{#each links as link (link.path)}
			{@const isActive = page.url.pathname === base + link.path}
			<li>
				<a
					href={base + link.path}
					class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors {isActive
						? 'bg-indigo-800/70 font-medium text-white'
						: 'text-indigo-200 hover:bg-indigo-900/60 hover:text-white'}"
				>
					<ChevronRight
						class="size-3.5 shrink-0 text-indigo-300 transition-opacity {isActive
							? 'opacity-100'
							: 'opacity-0'}"
					/>
					{link.text}
				</a>
			</li>
		{/each}
	</ul>
</nav>
