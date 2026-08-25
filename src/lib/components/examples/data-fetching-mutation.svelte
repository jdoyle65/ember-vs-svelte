<script lang="ts">
	import { createMutation, useQueryClient } from '@tanstack/svelte-query';

	const client = useQueryClient();

	// createMutation sends data-changing requests.
	// On success, we invalidate the 'posts' cache key so the list refetches.
	const createPost = createMutation({
		mutationFn: async (data: { title: string; body: string }) => {
			const res = await fetch('/api/posts', {
				method: 'POST',
				body: JSON.stringify(data)
			});
			return res.json();
		},
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['posts'] });
		}
	});

	const deletePost = createMutation({
		mutationFn: async (id: string) => {
			await fetch(`/api/posts/${id}`, { method: 'DELETE' });
		},
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['posts'] });
		}
	});
</script>

<button
	onclick={() => createPost.mutate({ title: 'New Post', body: 'Hello world' })}
	disabled={createPost.isPending}
>
	Create Post
</button>
