<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import svelteExample from '$lib/components/examples/reactivity.svelte?raw';
	import emberJsExample from '$lib/components/examples/reactivity.js?raw';
	import emberHbsExample from '$lib/components/examples/reactivity.hbs?raw';
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">Reactivity</h1>
<div class="prose mb-12">
	<p>
		Ember relies on the <code>@tracked</code> decorator for reactivity. Anytime the value of the
		tracked <code>count</code> value gets updated in the code below, Ember will ensure the template
		is re-rendered. For derived values, Ember uses <code>get</code> functions. Whenever a getter contains
		a tracked value, it will be re-evaluated when the tracked value changes.
	</p>
	<p>
		Svelte approaches reactivity using something called "runes". In the example below we declare the <code
			>$state</code
		>
		rune to create a reactive variable. For derived values, we use the <code>$derived</code> rune. Whenever
		a reactive variable is updated, Svelte will ensure the template is re-rendered and any derived values
		are re-evaluated.
	</p>
	<p>
		You'll also notice the difference in how event handlers are declared. In Ember, we use the <code
			>{'{{ on }}'}</code
		>
		modifier to attach an event handler to an element, and the <code>@action</code>
		decorator to ensure the correct <code>this</code> context is used. In Svelte, we simply use the
		<code>on*</code> directive to attach an event handler to an element.
	</p>
</div>
<div class="flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteExample} language="svelte" filename="reactivity.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberJsExample} language="javascript" filename="reactivity.js" />
		<CodeBlock code={emberHbsExample} language="hbs" filename="reactivity.hbs" />
	</div>
</div>
