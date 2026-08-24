<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import svelteExample from '$lib/components/examples/props.svelte?raw';
	import svelteTsExample from '$lib/components/examples/props-ts.svelte?raw';
	import svelteUsageExample from '$lib/components/examples/props-usage.svelte?raw';
	import emberJsExample from '$lib/components/examples/props.js?raw';
	import emberHbsExample from '$lib/components/examples/props.hbs?raw';
	import emberUsageExample from '$lib/components/examples/props-usage.hbs?raw';
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">Component Props</h1>

<div class="prose mb-12">
	<p>
		In Svelte, props are declared by destructuring the return value of the <code>$props()</code>
		rune in the component's <code>&lt;script&gt;</code> block. Whatever you name in the destructure becomes
		a prop. Default values are set using standard JavaScript default parameter syntax right in the destructure.
	</p>
	<p>
		In Ember Glimmer components, props are passed via named arguments and are always accessible
		through the <code>this.args</code> object in the class and prefixed with <code>@</code> in
		templates. Arguments are read-only — you cannot assign to them. Default values are typically
		handled in a getter using the nullish coalescing operator (<code>??</code>).
	</p>
	<p>
		One key difference: in Svelte, props that aren't passed simply use their default value (or
		<code>undefined</code>). In Ember, unset arguments are also <code>undefined</code>, but the
		convention is to guard against that in a getter rather than at the point of use.
	</p>
</div>

<h2 class="mb-6 text-3xl font-semibold">Component definition</h2>
<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteExample} language="svelte" filename="Greeting.svelte" />
		<CodeBlock code={svelteUsageExample} language="svelte" filename="UsesGreeting.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberJsExample} language="javascript" filename="greeting.js" />
		<CodeBlock code={emberHbsExample} language="hbs" filename="greeting.hbs" />
		<CodeBlock code={emberUsageExample} language="hbs" filename="uses-greeting.hbs" />
	</div>
</div>

<div class="my-12 prose">
	<p>
		In Svelte the props become "self-documenting", because they are explicitly destructured in the
		components script block, making it much easier for someone using a component to see what props
		the component expects. In Ember, the props are not as obvious and would need to be explicitly
		documented through comments or external documentation.
	</p>
	<p>
		Svelte also supports TypeScript out of the box, making it easy to add types to your props as
		well.
	</p>
</div>

<div class="flex">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteTsExample} language="svelte" filename="Greeting.svelte" />
	</div>
</div>
