import{C as e,F as t,G as n,N as r,P as i,W as a,x as o}from"../chunks/DIwIDFPt.js";import"../chunks/xihTtKlq.js";import{n as s,r as c,t as l}from"../chunks/Du5nJqbu.js";var u=`<script lang="ts">
	let count = $state(1);
	let doubledCount = $derived(count * 2);

	function increment() {
		count += 1;
	}
<\/script>

<span>Count: {count}</span>
<span>Doubled Count: {doubledCount}</span>

<button onclick={() => increment()}>Increment</button>
`,d=`import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
	@tracked count = 1;

	get doubledCount() {
		return this.count * 2;
	}

	@action
	increment() {
		this.count += 1;
	}
}
`,f=`<span>Count: {{this.count}}</span>
<span>Doubled Count: {{this.doubledCount}}</span>

<button {{on 'click' this.increment}}>Increment</button>
`,p=`<script lang="ts">
	let user = $state({ name: 'Alice', age: 30 });
	let fruits = $state(['apple', 'banana']);

	function birthday() {
		user.age += 1;
	}

	function addFruit() {
		fruits.push('cherry');
	}

	function renameFruit() {
		fruits[0] = 'avocado';
	}
<\/script>

<p>Name: {user.name}, Age: {user.age}</p>
<p>Fruits: {fruits.join(', ')}</p>

<button onclick={birthday}>Birthday</button>
<button onclick={addFruit}>Add Fruit</button>
<button onclick={renameFruit}>Rename First Fruit</button>
`,m=`import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
	// Objects must be replaced entirely — mutating a property won't trigger reactivity
	@tracked user = { name: 'Alice', age: 30 };

	// Arrays must be replaced entirely — push/index assignment won't trigger reactivity
	@tracked fruits = ['apple', 'banana'];

	@action
	birthday() {
		this.user = { ...this.user, age: this.user.age + 1 };
	}

	@action
	addFruit() {
		this.fruits = [...this.fruits, 'cherry'];
	}

	@action
	renameFruit() {
		this.fruits = this.fruits.map((f, i) => (i === 0 ? 'avocado' : f));
	}
}
`,h=`<p>Name: {{this.user.name}}, Age: {{this.user.age}}</p>
<p>Fruits: {{this.fruits}}</p>

<button {{on 'click' this.birthday}}>Birthday</button>
<button {{on 'click' this.addFruit}}>Add Fruit</button>
<button {{on 'click' this.renameFruit}}>Rename First Fruit</button>
`,g=e(`<h1 class="mt-4 mb-16 text-6xl font-bold">Reactivity</h1> <div class="prose mb-12"><p>Ember relies on the <code>@tracked</code> decorator for reactivity. Anytime the value of the
		tracked <code>count</code> value gets updated in the code below, Ember will ensure the template
		is re-rendered. For derived values, Ember uses <code>get</code> functions. Whenever a getter contains
		a tracked value, it will be re-evaluated when the tracked value changes.</p> <p>Svelte approaches reactivity using something called "runes". In the example below we declare the <code>$state</code> rune to create a reactive variable. For derived values, we use the <code>$derived</code> rune. Whenever
		a reactive variable is updated, Svelte will ensure the template is re-rendered and any derived values
		are re-evaluated.</p> <p>You'll also notice the difference in how event handlers are declared. In Ember, we use the <code></code> modifier to attach an event handler to an element, and the <code>@action</code> decorator to ensure the correct <code>this</code> context is used. In Svelte, we simply use the <code>on*</code> directive to attach an event handler to an element.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!> <!></div></div> <h2 class="mt-16 mb-6 text-4xl font-bold">Deep Reactivity</h2> <div class="prose mb-12"><p>In Svelte, <code>$state</code> creates <strong>deeply reactive</strong> objects and arrays. You can
		mutate nested properties or call array mutation methods like <code>push</code> and index assignment
		directly — Svelte tracks changes at every level and re-renders automatically.</p> <p>Ember's <code>@tracked</code> decorator only watches the <strong>reference</strong> of the decorated
		property, not its contents. Mutating a nested property or calling <code>push</code> on a tracked
		array won't trigger a re-render because the reference hasn't changed. To update the UI you must
		replace the object or array entirely — a common pattern is using the spread operator
		(<code></code>) or <code>Array.prototype.map</code> to produce a new value.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!> <!></div></div>`,1);function _(e){var _=g(),v=t(i(_),2),y=t(r(v),4),b=t(r(y));b.textContent=`{{ on }}`,a(7),n(y),n(v);var x=t(v,2),S=r(x),C=r(S);s(C,{});var w=t(C,2);c(w,{get code(){return u},language:`svelte`,filename:`reactivity.svelte`}),n(S);var T=t(S,2),E=r(T);l(E,{});var D=t(E,2);c(D,{get code(){return d},language:`javascript`,filename:`reactivity.js`});var O=t(D,2);c(O,{get code(){return f},language:`hbs`,filename:`reactivity.hbs`}),n(T),n(x);var k=t(x,4),A=t(r(k),2),j=t(r(A),7);j.textContent=`{ ...obj }`,a(3),n(A),n(k);var M=t(k,2),N=r(M),P=r(N);s(P,{});var F=t(P,2);c(F,{get code(){return p},language:`svelte`,filename:`deep-reactivity.svelte`}),n(N);var I=t(N,2),L=r(I);l(L,{});var R=t(L,2);c(R,{get code(){return m},language:`javascript`,filename:`deep-reactivity.js`});var z=t(R,2);c(z,{get code(){return h},language:`hbs`,filename:`deep-reactivity.hbs`}),n(I),n(M),o(e,_)}export{_ as component};