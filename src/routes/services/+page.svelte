<script>
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import emberService from '$lib/components/examples/services-ember.js?raw';
	import emberUsageJs from '$lib/components/examples/services-ember-usage.js?raw';
	import emberUsageHbs from '$lib/components/examples/services-ember-usage.hbs?raw';
	import svelteContext from '$lib/components/examples/services-context.svelte?raw';
	import svelteModule from '$lib/components/examples/services-module.svelte.ts?raw';
	import svelteModuleUsage from '$lib/components/examples/services-module-usage.svelte?raw';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">Services & Shared State</h1>

<div class="prose mb-12">
	<p>
		Ember services are DI-managed singletons registered in the framework's container and injected
		into routes, controllers, and components using the <code>@service</code> decorator. Because the
		container owns every instance, all consumers share the exact same object — making services the
		standard place for cross-cutting concerns like authentication, feature flags, and analytics.
	</p>
	<p>
		Svelte has no dependency-injection container. Two patterns fill the gap depending on scope.
		<strong>setContext / getContext</strong> shares a value with every component in a subtree
		without prop-drilling — the value is scoped to the component tree and is ideal for library
		authors or reusable widget trees that shouldn't bleed state into the rest of the app.
	</p>
	<p>
		<strong>Module-level <code>$state</code></strong> exported from a <code>.svelte.ts</code> file
		is a true app-wide singleton — the JavaScript module system guarantees a single instance for the
		lifetime of the page. This is the most direct replacement for an Ember service: import it
		anywhere, mutate it, and every component that reads it reacts automatically.
	</p>
</div>

<h2 class="mb-6 text-3xl font-semibold">Ember Services</h2>
<div class="prose mb-12">
	<p>
		An Ember service is a class that extends <code>Service</code>. Tracked properties declared with
		<code>@tracked</code> are reactive — any template or getter that reads them will re-render when
		they change. Actions mutate the tracked properties and can be called from templates or other
		classes. The service is injected into a component by declaring a property with the
		<code>@service</code> decorator; Ember resolves the singleton from its container automatically.
	</p>
</div>
<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberService} language="javascript" filename="app/services/session.js" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberUsageJs} language="javascript" filename="app/components/nav-bar.js" />
		<CodeBlock code={emberUsageHbs} language="hbs" filename="app/components/nav-bar.hbs" />
	</div>
</div>

<h2 class="mt-16 mb-6 text-3xl font-semibold">Context API</h2>
<div class="prose mb-12">
	<p>
		Svelte's <code>setContext</code> and <code>getContext</code> allow a parent component to share a
		value with any descendant without threading it through props. The object passed to
		<code>setContext</code> can hold reactive <code>$state</code> — because the context value is
		passed by reference, getters on the object keep their reactivity through the tree.
	</p>
	<p>
		Context is scoped to a component subtree and is invisible to components rendered outside it.
		This makes it the right choice for library components and self-contained widget trees, but not
		for truly global state like a session or feature-flag store — for that, reach for a module
		singleton instead.
	</p>
</div>
<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock
			code={svelteContext}
			language="svelte"
			filename="Parent.svelte / Child.svelte"
		/>
	</div>
</div>

<h2 class="mt-16 mb-6 text-3xl font-semibold">Module Singletons</h2>
<div class="prose mb-12">
	<p>
		Exporting a <code>$state</code> object from a <code>.svelte.ts</code> file creates an app-wide
		reactive singleton. The <code>.svelte.ts</code> extension tells Vite to compile Svelte runes in
		the file, so <code>$state</code> works outside of a component. Any component that imports the
		export reads the same object, and mutations trigger reactivity everywhere the state is
		referenced — no store subscriptions, no context wiring, no service container.
	</p>
	<p>
		This is the most direct replacement for an Ember service. Swap the service class and
		<code>@service</code> injection for a plain import, and the mental model stays the same: one
		shared object, mutate it, UI updates.
	</p>
</div>
<div class="flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock
			code={svelteModule}
			language="typescript"
			filename="session.svelte.ts"
		/>
		<CodeBlock
			code={svelteModuleUsage}
			language="svelte"
			filename="NavBar.svelte"
		/>
	</div>
</div>
