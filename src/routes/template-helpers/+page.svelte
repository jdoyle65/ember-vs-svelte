<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import svelteExample from '$lib/components/examples/template-helpers.svelte?raw';
	import emberJsExample from '$lib/components/examples/template-helpers.js?raw';
	import emberHbsExample from '$lib/components/examples/template-helpers.hbs?raw';
	import svelteCustomExample from '$lib/components/examples/template-helpers-custom.svelte?raw';
	import emberCustomJsExample from '$lib/components/examples/template-helpers-custom.js?raw';
	import emberCustomHbsExample from '$lib/components/examples/template-helpers-custom.hbs?raw';
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">Template Helpers</h1>

<div class="prose mb-12">
	<p>
		Both frameworks provide built-in constructs for common template tasks like conditionally rendering
		content and iterating over lists. Svelte uses <code>{'{#if}'}</code> and
		<code>{'{#each}'}</code> blocks. Ember uses <code>{'{{#if}}'}</code> and
		<code>{'{{#each}}'}</code> block helpers — syntax that comes from the Handlebars templating
		language Ember is built on.
	</p>
	<p>
		The biggest difference emerges when you need to do something beyond these built-ins. In Svelte,
		you can write <strong>any JavaScript expression</strong> directly inside
		<code>{'{ }'}</code> interpolations — method calls, ternaries, array operations, string
		manipulation, whatever you need. The template is just JavaScript.
	</p>
	<p>
		Ember templates are more constrained. Handlebars intentionally limits what can go in a template
		to keep logic out of the view layer. Simple property access and built-in helpers are supported,
		but arbitrary expressions are not. To do anything beyond that you have two options: move the
		logic into a getter on the component class, or write a <strong>custom helper</strong> — a
		dedicated function registered with Ember that can then be called from templates.
	</p>
</div>

<h2 class="mb-6 text-3xl font-semibold">Conditionals, loops, and inline expressions</h2>
<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteExample} language="svelte" filename="example.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberJsExample} language="javascript" filename="example.js" />
		<CodeBlock code={emberHbsExample} language="hbs" filename="example.hbs" />
	</div>
</div>

<h2 class="mb-6 text-3xl font-semibold">Custom helpers in Ember</h2>
<div class="prose mb-12">
	<p>
		When a getter on the class isn't the right fit — for instance, a reusable formatting function
		you want to share across many templates — Ember lets you write a custom helper. A helper is a
		plain function wrapped with <code>helper()</code> from <code>@ember/component/helper</code>.
		Once registered, it can be called by name in any template. Svelte has no equivalent concept
		because you can just import and call a regular function directly in the template.
	</p>
</div>
<div class="flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteCustomExample} language="svelte" filename="example.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberCustomJsExample} language="javascript" filename="helpers/uppercase.js" />
		<CodeBlock code={emberCustomHbsExample} language="hbs" filename="example.hbs" />
	</div>
</div>
