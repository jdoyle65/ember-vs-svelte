import{C as e,F as t,G as n,N as r,P as i,x as a}from"../chunks/DIwIDFPt.js";import"../chunks/xihTtKlq.js";import{n as o,r as s,t as c}from"../chunks/Du5nJqbu.js";var l=`<script lang="ts">
	// Components must be explicitly imported before they can be used.
	// The local name is entirely up to you.
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
<\/script>

<Card>
	<Button>Click me</Button>
</Card>
`,u=`{{! No imports needed. Ember resolves components by name using
    a global registry built from the directory structure.
    app/components/button.hbs  →  <Button />
    app/components/card.hbs    →  <Card /> }}

<Card>
  <Button>Click me</Button>
</Card>
`,d=`<script lang="ts">
	// If an npm package exports a Button, you import it under a different name.
	// There is no global registry — every component is just a module.
	import Button from '$lib/components/Button.svelte';
	import { Button as AddonButton } from 'some-addon';
<\/script>

<!-- No ambiguity — each name is explicit and local to this file -->
<Button>My button</Button>
<AddonButton>Addon button</AddonButton>
`,f=`{{! Your app defines:  app/components/button.hbs
    An addon also defines its own Button component.
    Ember silently picks one based on resolution order —
    there is no warning, and it may not be the one you intended. }}

{{! Which Button is this? Yours, or the addon's? }}
<Button>Click me</Button>
`,p=e(`<h1 class="mt-4 mb-16 text-6xl font-bold">Using Components</h1> <div class="prose mb-12"><p>Ember uses a <strong>global component registry</strong> built automatically from your
		application's directory structure. Any file placed under <code>app/components/</code> is
		registered by name and can be used in any template without any import. A file at <code>app/components/button.hbs</code> becomes <code>&lt;Button /&gt;</code> everywhere in the app.</p> <p>Svelte takes the opposite approach: components are plain ES modules. To use a component you must <strong>explicitly import it</strong> in the <code>&lt;script&gt;</code> block of the file that needs
		it. The name you give the import is the name used in the template, and it is entirely local to that
		file.</p></div> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!></div></div> <h2 class="mb-6 text-3xl font-semibold">Naming collisions</h2> <div class="prose mb-12"><p>The global registry in Ember creates a real risk when you install addons. If an addon registers
		a component under the same name as one of yours — say, both define a <code>Button</code> — Ember must
		pick one. Resolution order determines the winner, silently, with no warning at build time or runtime.</p> <p>In Svelte this problem cannot occur. There is no registry. Every component reference is a local
		import binding — if two packages export a <code>Button</code>, you simply import them under
		different names. The compiler sees local identifiers, not global strings.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!></div></div>`,1);function m(e){var m=p(),h=t(i(m),4),g=r(h),_=r(g);o(_,{});var v=t(_,2);s(v,{get code(){return l},language:`svelte`,filename:`page.svelte`}),n(g);var y=t(g,2),b=r(y);c(b,{});var x=t(b,2);s(x,{get code(){return u},language:`hbs`,filename:`page.hbs`}),n(y),n(h);var S=t(h,6),C=r(S),w=r(C);o(w,{});var T=t(w,2);s(T,{get code(){return d},language:`svelte`,filename:`page.svelte`}),n(C);var E=t(C,2),D=r(E);c(D,{});var O=t(D,2);s(O,{get code(){return f},language:`hbs`,filename:`page.hbs`}),n(E),n(S),a(e,m)}export{m as component};