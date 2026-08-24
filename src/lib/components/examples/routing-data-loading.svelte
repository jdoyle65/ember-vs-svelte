// src/routes/posts/[id]/+page.ts
// Importing PageLoad gives the load function fully typed params, fetch, and locals.
// SvelteKit generates this type automatically from the route's file structure.
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch, locals }) => {
	// Guard — equivalent to beforeModel
	if (!locals.user) {
		redirect(302, '/login');
	}

	// Fetch data — equivalent to model()
	const res = await fetch(`/api/posts/${params.id}`);
	const post: { title: string; body: string; isArchived: boolean } = await res.json();

	// Conditional redirect — equivalent to afterModel()
	if (post.isArchived) {
		redirect(302, '/posts');
	}

	// Whatever is returned becomes the typed `data` prop in +page.svelte
	return { post };
};
