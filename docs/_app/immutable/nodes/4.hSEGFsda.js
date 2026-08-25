import{C as e,F as t,G as n,N as r,P as i,x as a}from"../chunks/DIwIDFPt.js";import"../chunks/xihTtKlq.js";import{n as o,r as s,t as c}from"../chunks/Du5nJqbu.js";var l=`<script lang="ts">
	let { greeting = 'Hello', name, count = 0 } = $props();
<\/script>

<p>{greeting}, {name}! You have {count} messages.</p>
`,u=`<script lang="ts">
	interface Props {
		greeting?: string;
		name: string;
		count?: number;
	}

	let { greeting = 'Hello', name, count = 0 }: Props = $props();
<\/script>

<p>{greeting}, {name}! You have {count} messages.</p>
`,d=`<script lang="ts">
	import Greeting from './Greeting.svelte';
<\/script>

<Greeting name="Alice" count={5} />
<Greeting name="Bob" greeting="Hey" count={1} />
<Greeting name="Carol" />
`,f=`import Component from '@glimmer/component';

export default class GreetingComponent extends Component {
	get greeting() {
		return this.args.greeting ?? 'Hello';
	}

	get count() {
		return this.args.count ?? 0;
	}
}
`,p=`<p>{{this.greeting}}, {{@name}}! You have {{this.count}} messages.</p>
`,m=`<Greeting @name="Alice" @count={{5}} />
<Greeting @name="Bob" @greeting="Hey" @count={{1}} />
<Greeting @name="Carol" />
`,h=e(`<h1 class="mt-4 mb-16 text-6xl font-bold">Component Props</h1> <div class="prose mb-12"><p>In Svelte, props are declared by destructuring the return value of the <code>$props()</code> rune in the component's <code>&lt;script&gt;</code> block. Whatever you name in the destructure becomes
		a prop. Default values are set using standard JavaScript default parameter syntax right in the destructure.</p> <p>In Ember Glimmer components, props are passed via named arguments and are always accessible
		through the <code>this.args</code> object in the class and prefixed with <code>@</code> in
		templates. Arguments are read-only — you cannot assign to them. Default values are typically
		handled in a getter using the nullish coalescing operator (<code>??</code>).</p> <p>One key difference: in Svelte, props that aren't passed simply use their default value (or <code>undefined</code>). In Ember, unset arguments are also <code>undefined</code>, but the
		convention is to guard against that in a getter rather than at the point of use.</p></div> <h2 class="mb-6 text-3xl font-semibold">Component definition</h2> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!> <!></div> <div class="flex flex-col gap-4"><!> <!> <!> <!></div></div> <div class="my-12 prose"><p>In Svelte the props become "self-documenting", because they are explicitly destructured in the
		components script block, making it much easier for someone using a component to see what props
		the component expects. In Ember, the props are not as obvious and would need to be explicitly
		documented through comments or external documentation.</p> <p>Svelte also supports TypeScript out of the box, making it easy to add types to your props as
		well.</p></div> <div class="flex"><div class="flex flex-col gap-4"><!> <!></div></div>`,1);function g(e){var g=h(),_=t(i(g),6),v=r(_),y=r(v);o(y,{});var b=t(y,2);s(b,{get code(){return l},language:`svelte`,filename:`Greeting.svelte`});var x=t(b,2);s(x,{get code(){return d},language:`svelte`,filename:`UsesGreeting.svelte`}),n(v);var S=t(v,2),C=r(S);c(C,{});var w=t(C,2);s(w,{get code(){return f},language:`javascript`,filename:`greeting.js`});var T=t(w,2);s(T,{get code(){return p},language:`hbs`,filename:`greeting.hbs`});var E=t(T,2);s(E,{get code(){return m},language:`hbs`,filename:`uses-greeting.hbs`}),n(S),n(_);var D=t(_,4),O=r(D),k=r(O);o(k,{});var A=t(k,2);s(A,{get code(){return u},language:`svelte`,filename:`Greeting.svelte`}),n(O),n(D),a(e,g)}export{g as component};