<script>
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import svelteExample from '$lib/components/examples/component-imports.svelte?raw';
	import emberHbsExample from '$lib/components/examples/component-imports.hbs?raw';
	import svelteCollisionExample from '$lib/components/examples/component-imports-collision.svelte?raw';
	import emberCollisionExample from '$lib/components/examples/component-imports-collision.hbs?raw';
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import EmberLogo from '$lib/components/EmberLogo.svelte';
</script>

<h1 class="mt-4 mb-16 text-6xl font-bold">Using Components</h1>

<div class="prose mb-12">
	<p>
		Ember uses a <strong>global component registry</strong> built automatically from your
		application's directory structure. Any file placed under <code>app/components/</code> is
		registered by name and can be used in any template without any import. A file at
		<code>app/components/button.hbs</code> becomes <code>&lt;Button /&gt;</code> everywhere in the app.
	</p>
	<p>
		Svelte takes the opposite approach: components are plain ES modules. To use a component you must
		<strong>explicitly import it</strong> in the <code>&lt;script&gt;</code> block of the file that needs
		it. The name you give the import is the name used in the template, and it is entirely local to that
		file.
	</p>
</div>

<div class="mb-16 flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteExample} language="svelte" filename="page.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberHbsExample} language="hbs" filename="page.hbs" />
	</div>
</div>

<h2 class="mb-6 text-3xl font-semibold">Naming collisions</h2>
<div class="prose mb-12">
	<p>
		The global registry in Ember creates a real risk when you install addons. If an addon registers
		a component under the same name as one of yours — say, both define a <code>Button</code> — Ember must
		pick one. Resolution order determines the winner, silently, with no warning at build time or runtime.
	</p>
	<p>
		In Svelte this problem cannot occur. There is no registry. Every component reference is a local
		import binding — if two packages export a <code>Button</code>, you simply import them under
		different names. The compiler sees local identifiers, not global strings.
	</p>
</div>
<div class="flex flex-row gap-12">
	<div class="flex flex-col gap-4">
		<SvelteLogo />
		<CodeBlock code={svelteCollisionExample} language="svelte" filename="page.svelte" />
	</div>
	<div class="flex flex-col gap-4">
		<EmberLogo />
		<CodeBlock code={emberCollisionExample} language="hbs" filename="page.hbs" />
	</div>
</div>
