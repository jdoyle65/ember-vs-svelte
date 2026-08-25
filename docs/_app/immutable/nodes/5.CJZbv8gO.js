import{M as e,N as t,P as n,S as r,W as i,b as a}from"../chunks/BBgs22xH.js";import"../chunks/xihTtKlq.js";import{n as o,r as s,t as c}from"../chunks/Bm3-0dFn.js";var l=`// app/models/post.js
// Ember Data requires every resource to be declared as a model.
// The model describes the shape of the data and its relationships.
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
	@attr('string') title;
	@attr('string') body;
	@attr('date') publishedAt;

	@belongsTo('user', { async: false }) author;
	@hasMany('comment', { async: true }) comments;
}
`,u=`// app/routes/posts.js
// The store is a service injected into every route automatically.
// It manages a client-side cache of all loaded records.
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostsRoute extends Route {
	@service store;

	async model() {
		// Fetches all posts — hits the cache if already loaded,
		// otherwise makes a GET request to /posts via the adapter.
		return this.store.findAll('post');
	}
}
`,d=`// app/controllers/posts.js
import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class PostsController extends Controller {
	@service store;

	@action
	async createPost() {
		// Creates a new record in the store and persists it via a POST request.
		const post = this.store.createRecord('post', {
			title: 'New Post',
			body: 'Hello world'
		});

		await post.save();
	}

	@action
	async deletePost(post) {
		// Deletes locally and sends a DELETE request.
		await post.destroyRecord();
	}
}
`,f=`<script lang="ts">
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
<\/script>

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
`,p=`<script lang="ts">
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
			await fetch(\`/api/posts/\${id}\`, { method: 'DELETE' });
		},
		onSuccess: () => {
			client.invalidateQueries({ queryKey: ['posts'] });
		}
	});
<\/script>

<button
	onclick={() => createPost.mutate({ title: 'New Post', body: 'Hello world' })}
	disabled={createPost.isPending}
>
	Create Post
</button>
`,m=r(`<h1 class="mt-4 mb-16 text-6xl font-bold">Data Fetching & Caching</h1> <div class="prose mb-12"><p>Ember ships with <strong>Ember Data</strong>, a first-party data layer that provides a
		client-side store, model definitions, adapters (which handle how requests are made), and
		serializers (which handle how responses are parsed). It is deeply integrated into the framework
		— the store is available as a service in every route and controller, and records fetched for one
		route are automatically available from the cache if another route requests the same resource.</p> <p>Svelte and SvelteKit have no built-in equivalent. The framework deliberately stays out of the
		data layer — <code>load</code> functions give you a typed <code>fetch</code> and leave the rest
		up to you. For applications that need client-side caching, deduplication, background
		revalidation, and mutation handling, <strong>TanStack Query</strong> (formerly React Query) is the
		most common solution. Its Svelte adapter provides a familiar API using Svelte stores.</p></div> <h2 class="mb-6 text-3xl font-semibold">Defining data shapes</h2> <div class="prose mb-12"><p>Ember Data requires every resource type to be declared as a <strong>model</strong> — a class that
		describes the record's attributes and relationships. The store uses these definitions to know how
		to instantiate records, handle relationships, and track dirty state.</p> <p>In a Svelte application with TanStack Query there are no model classes. Data shapes are
		expressed as TypeScript types or interfaces and live wherever makes sense — typically alongside
		the query or in a shared types file. There is no framework-level registry of resource types.</p></div> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div></div> <h2 class="mb-6 text-3xl font-semibold">Fetching data</h2> <div class="prose mb-12"><p>Ember Data's store is injected into routes, where you call methods like <code>store.findAll()</code> or <code>store.findRecord()</code>. The store maintains a
		normalized cache keyed by type and ID — if a record was already loaded, the store returns it
		immediately from memory and optionally refreshes it in the background.</p> <p>TanStack Query's <code>createQuery</code> works similarly: you provide a <code>queryKey</code> (the cache key) and a <code>queryFn</code> (any async function that returns
		data). Queries with the same key share a single request and a single cache entry. Stale data is automatically
		revalidated when a component mounts or the window regains focus. The query result is a Svelte store,
		so is treated like reactive state in the component.</p></div> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!></div></div> <h2 class="mb-6 text-3xl font-semibold">Mutations</h2> <div class="prose mb-12"><p>In Ember Data, creating or deleting a record goes through the store. <code>store.createRecord()</code> instantiates a new record locally, and <code>save()</code> persists it via a POST request. <code>destroyRecord()</code> sends the DELETE and removes the record
		from the cache atomically. The store keeps local and server state in sync automatically.</p> <p>TanStack Query handles mutations with <code>createMutation</code>. The <code>mutationFn</code> is a plain <code>fetch</code> call — there is no abstraction over the
		HTTP layer. After a successful mutation you manually tell the cache what to do next, most
		commonly by calling <code>client.invalidateQueries()</code> with the relevant key. This triggers a
		background refetch of any components currently subscribed to that query, keeping the UI consistent
		without any additional wiring.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!></div></div>`,1);function h(r){var h=m(),g=n(t(h),8),_=e(g),v=e(_);c(v,{});var y=n(v,2);s(y,{get code(){return l},language:`javascript`,filename:`app/models/post.js`}),i(_),i(g);var b=n(g,6),x=e(b),S=e(x);o(S,{});var C=n(S,2);s(C,{get code(){return f},language:`svelte`,filename:`posts.svelte`}),i(x);var w=n(x,2),T=e(w);c(T,{});var E=n(T,2);s(E,{get code(){return u},language:`javascript`,filename:`app/routes/posts.js`}),i(w),i(b);var D=n(b,6),O=e(D),k=e(O);o(k,{});var A=n(k,2);s(A,{get code(){return p},language:`svelte`,filename:`posts.svelte`}),i(O);var j=n(O,2),M=e(j);c(M,{});var N=n(M,2);s(N,{get code(){return d},language:`javascript`,filename:`app/controllers/posts.js`}),i(j),i(D),a(r,h)}export{h as component};