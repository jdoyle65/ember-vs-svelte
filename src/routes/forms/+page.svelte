<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
	import svelteExample from '$lib/components/examples/forms-svelte.svelte?raw';
	import emberJsExample from '$lib/components/examples/forms-ember.js?raw';
	import emberHbsExample from '$lib/components/examples/forms-ember.hbs?raw';
	import bindComponentExample from '$lib/components/examples/forms-bind-component.svelte?raw';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">Two-way Binding &amp; Forms</h1>

<div class="prose mb-12">
	<p>
		Ember provides <code>{'<Input />'}</code> and <code>{'<Textarea />'}</code> components that wrap
		native elements and handle two-way binding internally. For other elements like
		<code>&lt;select&gt;</code>, you wire up a change handler manually using the
		<code>{'{{on}}'}</code> modifier and an <code>@action</code> that writes the new value back to a tracked
		property.
	</p>
	<p>
		Svelte's <code>bind:</code> directive is more general — it works directly on any native form
		element and eliminates the need for change handlers for simple cases. A single
		<code>bind:value</code> or <code>bind:checked</code> replaces both the controlled attribute and
		the event listener. Critically, <code>bind:</code> also works on component props, allowing a parent
		and child to share a value without callback plumbing.
	</p>
</div>

<h2 class="mb-6 text-3xl font-semibold">Form inputs</h2>
<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteExample} language="svelte" filename="forms.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberJsExample} language="javascript" filename="forms.js" />
		<CodeBlock code={emberHbsExample} language="hbs" filename="forms.hbs" />
	</div>
</div>

<h2 class="mt-16 mb-6 text-3xl font-semibold">Binding to component props</h2>
<div class="prose mb-12">
	<p>
		In Svelte, <code>bind:</code> is not limited to native HTML elements. A child component can
		expose a prop with <code>$bindable()</code>, and the parent can pass
		<code>bind:value</code> to create a two-way link. Changes made inside the child flow back to the parent
		automatically — no event emitting or callback props required.
	</p>
	<p>
		Ember has no equivalent mechanism. Arguments passed to a component are strictly one-directional
		— a child cannot write back to a parent argument. The idiomatic Ember solution is to pass a
		callback <code>@action</code> down as an argument and invoke it from the child whenever the value
		changes.
	</p>
</div>
<div class="flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock
			code={bindComponentExample}
			language="svelte"
			filename="forms-bind-component.svelte"
		/>
	</div>
</div>
