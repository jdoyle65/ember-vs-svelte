<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';

	// createQuery fetches data and caches it under the given key.
	// On re-mount or re-focus, stale data is automatically revalidated.
	const query = createQuery({
		queryKey: ['posts'],
		queryFn: async () => {
			const res = await fetch('/api/posts');
			return res.json() as Promise<{ id: string; title: string; body: string }[]>;
		}
	});
</script>

{#if query.isPending}
	<p>Loading...</p>
{:else if query.isError}
	<p>Error: {query.error.message}</p>
{:else}
	<ul>
		{#each query.data as post (post.id)}
			<li>{post.title}</li>
		{/each}
	</ul>
{/if}
