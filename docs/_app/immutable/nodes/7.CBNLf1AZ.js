import{M as e,N as t,P as n,S as r,W as i,b as a}from"../chunks/BBgs22xH.js";import"../chunks/xihTtKlq.js";import{n as o,r as s,t as c}from"../chunks/Bm3-0dFn.js";var l=`<script lang="ts">
	import { onMount } from 'svelte';

	let seconds = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			seconds += 1;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
<\/script>

<p>Seconds elapsed: {seconds}</p>
`,u=`import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TimerComponent extends Component {
	@tracked seconds = 0;

	#interval;

	constructor(owner, args) {
		super(owner, args);

		this.#interval = setInterval(() => {
			this.seconds += 1;
		}, 1000);
	}

	willDestroy() {
		super.willDestroy();
		clearInterval(this.#interval);
	}
}
`,d=`import { modifier } from 'ember-modifier';

const autofocus = modifier((element) => {
	element.focus();

	return () => {
		// cleanup runs when the element is removed from the DOM
	};
});

export default autofocus;
`,f=`<script lang="ts">
	let count = $state(0);

	$effect(() => {
		console.log('count changed:', count);
	});
<\/script>

<button onclick={() => count++}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
`,p=r(`<h1 class="mt-4 mb-16 text-6xl font-bold">Lifecycle Hooks</h1> <div class="prose mb-12"><p>Glimmer components have two lifecycle hooks — <code>constructor</code> for setup and <code>willDestroy</code> for teardown. DOM-ready work (like focusing an input or measuring an
		element) requires a modifier since the constructor runs before the DOM exists. Svelte provides <code>onMount</code> (runs after first render, cleanup returned from the function), <code>onDestroy</code>, and <code>$effect</code> — a reactive side-effect that auto-tracks its
		dependencies.</p></div> <h2 class="mb-6 text-3xl font-semibold">Setup &amp; Teardown</h2> <div class="flex flex-row gap-12 mb-16"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!></div></div> <h2 class="mt-16 mb-6 text-3xl font-semibold">DOM-ready Work</h2> <div class="prose mb-12"><p>In Svelte, <code>onMount</code> runs after the component has been rendered to the DOM, making it
		the right place to interact with DOM elements directly. In Ember, the <code>constructor</code> runs
		before the DOM is available, so any DOM-ready work must be done inside a custom modifier that runs
		once the element is inserted.</p></div> <div class="flex flex-row gap-12 mb-16"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!></div></div> <h2 class="mt-16 mb-6 text-3xl font-semibold">$effect — Reactive Side Effects</h2> <div class="prose mb-12"><p><code>$effect</code> is unique to Svelte — it runs after the component renders and re-runs automatically
		whenever the reactive values it reads change. Ember has no direct equivalent; the closest patterns
		are computed getters or observers (now deprecated). <code>$effect</code> is the right tool when
		you need to sync reactive state with something outside Svelte's rendering — a third-party library,
		a DOM API, or an external subscription.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div></div>`,1);function m(r){var m=p(),h=n(t(m),6),g=e(h),_=e(g);o(_,{});var v=n(_,2);s(v,{get code(){return l},language:`svelte`,filename:`lifecycle-svelte.svelte`}),i(g);var y=n(g,2),b=e(y);c(b,{});var x=n(b,2);s(x,{get code(){return u},language:`javascript`,filename:`lifecycle-ember.js`}),i(y),i(h);var S=n(h,6),C=e(S),w=e(C);o(w,{});var T=n(w,2);s(T,{get code(){return l},language:`svelte`,filename:`lifecycle-svelte.svelte`}),i(C);var E=n(C,2),D=e(E);c(D,{});var O=n(D,2);s(O,{get code(){return d},language:`javascript`,filename:`lifecycle-ember-modifier.js`}),i(E),i(S);var k=n(S,6),A=e(k),j=e(A);o(j,{});var M=n(j,2);s(M,{get code(){return f},language:`svelte`,filename:`lifecycle-effect.svelte`}),i(A),i(k),a(r,m)}export{m as component};