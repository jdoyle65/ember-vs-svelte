import{M as e,N as t,P as n,S as r,U as i,W as a,b as o}from"../chunks/BBgs22xH.js";import"../chunks/xihTtKlq.js";import{n as s,r as c,t as l}from"../chunks/Bm3-0dFn.js";var u=`<script lang="ts">
	let fruits = $state(['apple', 'banana', 'cherry']);
	let isLoggedIn = $state(true);
	let score = $state(72);
<\/script>

<!-- Conditional rendering -->
{#if isLoggedIn}
	<p>Welcome back!</p>
{:else}
	<p>Please log in.</p>
{/if}

<!-- Iterating a list -->
<ul>
	{#each fruits as fruit, i}
		<li>{i + 1}. {fruit}</li>
	{/each}
</ul>

<!-- Arbitrary JS inline — no helper needed -->
<p>Fruits: {fruits.join(', ')}</p>
<p>Upper: {fruits[0].toUpperCase()}</p>
<p>Grade: {score >= 90 ? 'A' : score >= 70 ? 'B' : 'C'}</p>
`,d=`import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
	@tracked fruits = ['apple', 'banana', 'cherry'];
	@tracked isLoggedIn = true;
	@tracked score = 72;

	// Arbitrary expressions aren't supported in templates, so derived
	// values must be computed in the class as getters.
	get fruitList() {
		return this.fruits.join(', ');
	}

	get firstFruitUpper() {
		return this.fruits[0].toUpperCase();
	}

	get grade() {
		if (this.score >= 90) return 'A';
		if (this.score >= 70) return 'B';
		return 'C';
	}
}
`,f=`{{! Conditional rendering }}
{{#if this.isLoggedIn}}
  <p>Welcome back!</p>
{{else}}
  <p>Please log in.</p>
{{/if}}

{{! Iterating a list }}
<ul>
  {{#each this.fruits as |fruit i|}}
    <li>{{add i 1}}. {{fruit}}</li>
  {{/each}}
</ul>

{{! Derived values must come from the class — no arbitrary JS in templates }}
<p>Fruits: {{this.fruitList}}</p>
<p>Upper: {{this.firstFruitUpper}}</p>
<p>Grade: {{this.grade}}</p>
`,p=`<script lang="ts">
	// Any regular function can be imported and called directly in the template.
	import { uppercase } from './utils.js';

	let firstFruit = $state('apple');
<\/script>

<p>Upper: {uppercase(firstFruit)}</p>
`,m=`// helpers/uppercase.js
import { helper } from '@ember/component/helper';

export default helper(function uppercase([str]) {
	return str.toUpperCase();
});
`,h=`{{! Using the custom helper in a template }}
<p>Upper: {{uppercase this.firstFruit}}</p>
`,g=r(`<h1 class="mt-4 mb-16 text-6xl font-bold">Template Helpers</h1> <div class="prose mb-12"><p>Both frameworks provide built-in constructs for common template tasks like conditionally rendering
		content and iterating over lists. Svelte uses <code></code> and <code></code> blocks. Ember uses <code></code> and <code></code> block helpers — syntax that comes from the Handlebars templating
		language Ember is built on.</p> <p>The biggest difference emerges when you need to do something beyond these built-ins. In Svelte,
		you can write <strong>any JavaScript expression</strong> directly inside <code></code> interpolations — method calls, ternaries, array operations, string
		manipulation, whatever you need. The template is just JavaScript.</p> <p>Ember templates are more constrained. Handlebars intentionally limits what can go in a template
		to keep logic out of the view layer. Simple property access and built-in helpers are supported,
		but arbitrary expressions are not. To do anything beyond that you have two options: move the
		logic into a getter on the component class, or write a <strong>custom helper</strong> — a
		dedicated function registered with Ember that can then be called from templates.</p></div> <h2 class="mb-6 text-3xl font-semibold">Conditionals, loops, and inline expressions</h2> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!> <!></div></div> <h2 class="mb-6 text-3xl font-semibold">Custom helpers in Ember</h2> <div class="prose mb-12"><p>When a getter on the class isn't the right fit — for instance, a reusable formatting function
		you want to share across many templates — Ember lets you write a custom helper. A helper is a
		plain function wrapped with <code>helper()</code> from <code>@ember/component/helper</code>.
		Once registered, it can be called by name in any template. Svelte has no equivalent concept
		because you can just import and call a regular function directly in the template.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!> <!></div></div>`,1);function _(r){var _=g(),v=n(t(_),2),y=e(v),b=n(e(y));b.textContent=`{#if}`;var x=n(b,2);x.textContent=`{#each}`;var S=n(x,2);S.textContent=`{{#if}}`;var C=n(S,2);C.textContent=`{{#each}}`,i(),a(y);var w=n(y,2),T=n(e(w),3);T.textContent=`{ }`,i(),a(w),i(2),a(v);var E=n(v,4),D=e(E),O=e(D);s(O,{});var k=n(O,2);c(k,{get code(){return u},language:`svelte`,filename:`example.svelte`}),a(D);var A=n(D,2),j=e(A);l(j,{});var M=n(j,2);c(M,{get code(){return d},language:`javascript`,filename:`example.js`});var N=n(M,2);c(N,{get code(){return f},language:`hbs`,filename:`example.hbs`}),a(A),a(E);var P=n(E,6),F=e(P),I=e(F);s(I,{});var L=n(I,2);c(L,{get code(){return p},language:`svelte`,filename:`example.svelte`}),a(F);var R=n(F,2),z=e(R);l(z,{});var B=n(z,2);c(B,{get code(){return m},language:`javascript`,filename:`helpers/uppercase.js`});var V=n(B,2);c(V,{get code(){return h},language:`hbs`,filename:`example.hbs`}),a(R),a(P),o(r,_)}export{_ as component};