<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import svelteDeclaration from '$lib/components/examples/routing-declaration.svelte?raw';
	import emberDeclaration from '$lib/components/examples/routing-declaration.js?raw';
	import svelteDataLoading from '$lib/components/examples/routing-data-loading.svelte?raw';
	import emberDataLoading from '$lib/components/examples/routing-data-loading.js?raw';
	import svelteTemplate from '$lib/components/examples/routing-template.svelte?raw';
	import emberTemplate from '$lib/components/examples/routing-template.hbs?raw';
	import emberController from '$lib/components/examples/routing-controller.js?raw';
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">Routing</h1>

<div class="prose mb-12">
	<p>
		Ember uses a <strong>central router file</strong> (<code>app/router.js</code>) where all routes
		are declared explicitly using a nested <code>this.route()</code> DSL. The file structure under
		<code>app/routes/</code> and <code>app/templates/</code> must mirror those declarations — Ember
		uses the names to wire everything together through its resolver.
	</p>
	<p>
		SvelteKit uses <strong>file-based routing</strong>. The directory structure under
		<code>src/routes/</code> is the router — no configuration required. Folders become URL segments,
		and dynamic segments are denoted by square brackets (e.g. <code>[id]</code>). Adding a route
		means adding a folder and a <code>+page.svelte</code> file.
	</p>
</div>

<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteDeclaration} language="svelte" filename="file structure" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberDeclaration} language="javascript" filename="app/router.js" />
	</div>
</div>

<h2 class="mb-6 text-3xl font-semibold">Loading data</h2>
<div class="prose mb-12">
	<p>
		Ember routes load data through a set of lifecycle hooks. <code>beforeModel()</code> runs first
		and is typically used for auth guards and redirects before any data is fetched.
		<code>model()</code> performs the actual data fetching and its return value is passed to the
		template as <code>@model</code>. <code>afterModel()</code> receives the resolved model and can
		trigger further redirects based on what was loaded — for example, redirecting away from a
		resource that no longer exists.
	</p>
	<p>
		SvelteKit collapses all three hooks into a single <code>load</code> function exported from a
		<code>+page.ts</code> (or <code>+page.server.ts</code> for server-only code). It receives route
		params, a <code>fetch</code> instance, and server-side context like the authenticated user.
		Guards, data fetching, and post-load redirects all live in the same function in the natural
		order they occur. Whatever the function returns becomes the <code>data</code> prop in the
		corresponding <code>+page.svelte</code>.
	</p>
	<p>
		SvelteKit also has deep TypeScript integration through automatically generated types. The
		<code>PageLoad</code> type — imported from the generated <code>./$types</code> module — gives
		the <code>load</code> function fully typed <code>params</code>, <code>fetch</code>, and
		<code>locals</code> based on the route's actual file structure. More importantly, SvelteKit
		infers the return type of your <code>load</code> function and uses it to generate a
		<code>PageData</code> type, which you can use to type the <code>data</code> prop in
		<code>+page.svelte</code>. This means <code>data.post</code> is fully typed end-to-end with
		no manual interface duplication — change the shape of what <code>load</code> returns and the
		type error surfaces immediately in the component.
	</p>
</div>

<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteDataLoading} language="typescript" filename="src/routes/posts/[id]/+page.ts" />
		<CodeBlock code={svelteTemplate} language="svelte" filename="src/routes/posts/[id]/+page.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberDataLoading} language="javascript" filename="app/routes/posts/post.js" />
		<CodeBlock code={emberTemplate} language="hbs" filename="app/templates/posts/post.hbs" />
	</div>
</div>

<h2 class="mb-6 text-3xl font-semibold">Controllers</h2>
<div class="prose mb-12">
	<p>
		Ember has a third concept that SvelteKit has no equivalent for: the <strong>controller</strong>.
		Controllers sit between the route and the template and are the conventional place for UI state
		and actions that don't belong in the route itself — things like whether a panel is expanded, or
		what tab is active. Each route can have a corresponding controller file in
		<code>app/controllers/</code> that Ember wires up automatically.
	</p>
	<p>
		In SvelteKit this distinction doesn't exist. The <code>+page.svelte</code> component is the
		template <em>and</em> the controller — local <code>$state</code> variables and functions declared
		in the <code>&lt;script&gt;</code> block handle UI state directly. There is no separate layer.
	</p>
</div>
<div class="flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberController} language="javascript" filename="app/controllers/posts/post.js" />
	</div>
</div>
