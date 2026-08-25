<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
	import emberExample from '$lib/components/examples/css-scoping-ember.css?raw';
	import svelteExample from '$lib/components/examples/css-scoping-svelte.svelte?raw';
	import globalExample from '$lib/components/examples/css-scoping-global.svelte?raw';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">CSS Scoping</h1>
<div class="prose mb-12">
	<p>
		In Ember, all CSS is global. Styles written in any stylesheet affect the entire application —
		there is no built-in component-level isolation. Teams work around this with naming conventions
		like BEM, CSS Modules, or utility-first frameworks.
	</p>
	<p>
		Svelte takes the opposite approach: every <code>{'<style>'}</code> block is automatically scoped
		to the component it belongs to. Svelte adds a unique attribute to the component's elements at compile
		time and rewrites the CSS selectors to match, so a <code>p</code> selector in one component will
		never affect <code>{'<p>'}</code> elements in another.
	</p>
</div>

<h2 class="mb-6 text-3xl font-semibold">Global styles in Ember vs Scoped styles in Svelte</h2>
<div class="flex flex-row gap-12 mb-16">
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberExample} language="css" filename="my-component.css" />
	</div>
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteExample} language="svelte" filename="MyComponent.svelte" />
	</div>
</div>

<h2 class="mt-16 mb-6 text-3xl font-semibold">Opting out of scoping</h2>
<div class="prose mb-12">
	<p>
		Sometimes you need to style elements that Svelte's compiler cannot see at build time — for
		example, a class added dynamically by a child component, a third-party library, or JavaScript at
		runtime. In those cases you can use <code>:global()</code> to intentionally break out of scoping
		for a specific selector while keeping everything else scoped.
	</p>
	<p>
		The example below wraps a third-party widget and uses <code>:global(.active)</code> to style the
		<code>.active</code> class that the widget adds to its own elements. The <code>.widget-wrapper</code>
		selector remains scoped, so the rule only applies within this component's wrapper — it won't
		affect <code>.active</code> elements elsewhere in the app.
	</p>
</div>
<div class="flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={globalExample} language="svelte" filename="ParentComponent.svelte" />
	</div>
</div>
