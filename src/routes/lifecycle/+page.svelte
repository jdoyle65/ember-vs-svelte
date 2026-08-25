<script>
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import svelteLifecycleExample from '$lib/components/examples/lifecycle-svelte.svelte?raw';
	import emberLifecycleExample from '$lib/components/examples/lifecycle-ember.js?raw';
	import emberModifierExample from '$lib/components/examples/lifecycle-ember-modifier.js?raw';
	import svelteEffectExample from '$lib/components/examples/lifecycle-effect.svelte?raw';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">Lifecycle Hooks</h1>
<div class="prose mb-12">
	<p>
		Glimmer components have two lifecycle hooks — <code>constructor</code> for setup and
		<code>willDestroy</code> for teardown. DOM-ready work (like focusing an input or measuring an
		element) requires a modifier since the constructor runs before the DOM exists. Svelte provides
		<code>onMount</code> (runs after first render, cleanup returned from the function),
		<code>onDestroy</code>, and <code>$effect</code> — a reactive side-effect that auto-tracks its
		dependencies.
	</p>
</div>

<h2 class="mb-6 text-3xl font-semibold">Setup &amp; Teardown</h2>
<div class="flex flex-row gap-12 mb-16">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteLifecycleExample} language="svelte" filename="lifecycle-svelte.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberLifecycleExample} language="javascript" filename="lifecycle-ember.js" />
	</div>
</div>

<h2 class="mt-16 mb-6 text-3xl font-semibold">DOM-ready Work</h2>
<div class="prose mb-12">
	<p>
		In Svelte, <code>onMount</code> runs after the component has been rendered to the DOM, making it
		the right place to interact with DOM elements directly. In Ember, the <code>constructor</code> runs
		before the DOM is available, so any DOM-ready work must be done inside a custom modifier that runs
		once the element is inserted.
	</p>
</div>
<div class="flex flex-row gap-12 mb-16">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteLifecycleExample} language="svelte" filename="lifecycle-svelte.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock
			code={emberModifierExample}
			language="javascript"
			filename="lifecycle-ember-modifier.js"
		/>
	</div>
</div>

<h2 class="mt-16 mb-6 text-3xl font-semibold">$effect — Reactive Side Effects</h2>
<div class="prose mb-12">
	<p>
		<code>$effect</code> is unique to Svelte — it runs after the component renders and re-runs automatically
		whenever the reactive values it reads change. Ember has no direct equivalent; the closest patterns
		are computed getters or observers (now deprecated). <code>$effect</code> is the right tool when
		you need to sync reactive state with something outside Svelte's rendering — a third-party library,
		a DOM API, or an external subscription.
	</p>
</div>
<div class="flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteEffectExample} language="svelte" filename="lifecycle-effect.svelte" />
	</div>
</div>
