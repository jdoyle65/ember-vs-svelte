<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import emberModel from '$lib/components/examples/data-fetching-model.js?raw';
	import emberStore from '$lib/components/examples/data-fetching-store.js?raw';
	import emberMutation from '$lib/components/examples/data-fetching-mutation.js?raw';
	import svelteQuery from '$lib/components/examples/data-fetching-query.svelte?raw';
	import svelteMutation from '$lib/components/examples/data-fetching-mutation.svelte?raw';
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">Data Fetching & Caching</h1>

<div class="prose mb-12">
	<p>
		Ember ships with <strong>Ember Data</strong>, a first-party data layer that provides a
		client-side store, model definitions, adapters (which handle how requests are made), and
		serializers (which handle how responses are parsed). It is deeply integrated into the framework
		— the store is available as a service in every route and controller, and records fetched for one
		route are automatically available from the cache if another route requests the same resource.
	</p>
	<p>
		Svelte and SvelteKit have no built-in equivalent. The framework deliberately stays out of the
		data layer — <code>load</code> functions give you a typed <code>fetch</code> and leave the rest
		up to you. For applications that need client-side caching, deduplication, background
		revalidation, and mutation handling, <strong>TanStack Query</strong> (formerly React Query) is the
		most common solution. Its Svelte adapter provides a familiar API using Svelte stores.
	</p>
</div>

<h2 class="mb-6 text-3xl font-semibold">Defining data shapes</h2>
<div class="prose mb-12">
	<p>
		Ember Data requires every resource type to be declared as a <strong>model</strong> — a class that
		describes the record's attributes and relationships. The store uses these definitions to know how
		to instantiate records, handle relationships, and track dirty state.
	</p>
	<p>
		In a Svelte application with TanStack Query there are no model classes. Data shapes are
		expressed as TypeScript types or interfaces and live wherever makes sense — typically alongside
		the query or in a shared types file. There is no framework-level registry of resource types.
	</p>
</div>
<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberModel} language="javascript" filename="app/models/post.js" />
	</div>
</div>

<h2 class="mb-6 text-3xl font-semibold">Fetching data</h2>
<div class="prose mb-12">
	<p>
		Ember Data's store is injected into routes, where you call methods like
		<code>store.findAll()</code> or <code>store.findRecord()</code>. The store maintains a
		normalized cache keyed by type and ID — if a record was already loaded, the store returns it
		immediately from memory and optionally refreshes it in the background.
	</p>
	<p>
		TanStack Query's <code>createQuery</code> works similarly: you provide a
		<code>queryKey</code> (the cache key) and a <code>queryFn</code> (any async function that returns
		data). Queries with the same key share a single request and a single cache entry. Stale data is automatically
		revalidated when a component mounts or the window regains focus. The query result is a Svelte store,
		so is treated like reactive state in the component.
	</p>
</div>
<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteQuery} language="svelte" filename="posts.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberStore} language="javascript" filename="app/routes/posts.js" />
	</div>
</div>

<h2 class="mb-6 text-3xl font-semibold">Mutations</h2>
<div class="prose mb-12">
	<p>
		In Ember Data, creating or deleting a record goes through the store.
		<code>store.createRecord()</code> instantiates a new record locally, and <code>save()</code>
		persists it via a POST request. <code>destroyRecord()</code> sends the DELETE and removes the record
		from the cache atomically. The store keeps local and server state in sync automatically.
	</p>
	<p>
		TanStack Query handles mutations with <code>createMutation</code>. The
		<code>mutationFn</code> is a plain <code>fetch</code> call — there is no abstraction over the
		HTTP layer. After a successful mutation you manually tell the cache what to do next, most
		commonly by calling <code>client.invalidateQueries()</code> with the relevant key. This triggers a
		background refetch of any components currently subscribed to that query, keeping the UI consistent
		without any additional wiring.
	</p>
</div>
<div class="flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteMutation} language="svelte" filename="posts.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberMutation} language="javascript" filename="app/controllers/posts.js" />
	</div>
</div>
