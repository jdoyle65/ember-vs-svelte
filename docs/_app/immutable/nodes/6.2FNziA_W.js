import{M as e,N as t,P as n,S as r,U as i,W as a,b as o}from"../chunks/BBgs22xH.js";import"../chunks/xihTtKlq.js";import{n as s,r as c,t as l}from"../chunks/Bm3-0dFn.js";var u=`<script lang="ts">
	let name = $state('');
	let isAgreed = $state(false);
	let role = $state('viewer');

	function submit(e: SubmitEvent) {
		e.preventDefault();
		console.log({ name, isAgreed, role });
	}
<\/script>

<form onsubmit={submit}>
	<input type="text" bind:value={name} placeholder="Your name" />

	<input type="checkbox" bind:checked={isAgreed} />

	<select bind:value={role}>
		<option value="viewer">Viewer</option>
		<option value="editor">Editor</option>
		<option value="admin">Admin</option>
	</select>

	<button type="submit">Submit</button>
</form>
`,d=`import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
	@tracked name = '';
	@tracked isAgreed = false;
	@tracked role = 'viewer';

	@action
	setIsAgreed(e) {
		this.isAgreed = e.target.checked;
	}

	@action
	setRole(e) {
		this.role = e.target.value;
	}

	@action
	submit(e) {
		e.preventDefault();
		console.log({ name: this.name, isAgreed: this.isAgreed, role: this.role });
	}
}
`,f=`<form {{on 'submit' this.submit}}>
	<Input @value={{this.name}} placeholder='Your name' />

	<Input @type='checkbox' @checked={{this.isAgreed}} {{on 'change' this.setIsAgreed}} />

	<select {{on 'change' this.setRole}}>
		<option value='viewer'>Viewer</option>
		<option value='editor'>Editor</option>
		<option value='admin'>Admin</option>
	</select>

	<button type='submit'>Submit</button>
</form>
`,p=`<script lang="ts">
	// Child component: TextInput.svelte
	// In Svelte, bind: works on component props too.
	// The child declares the prop with $bindable() so the parent can write back to it.

	// --- TextInput.svelte ---
	// <script lang="ts">
	//   let { value = $bindable() }: { value: string } = $props();
	// <\/script>
	// <input type="text" bind:value />

	// --- Parent component ---
	import TextInput from './TextInput.svelte';

	let name = $state('');
<\/script>

<!-- The parent passes bind:value, so changes inside TextInput flow back up automatically. -->
<!-- In Ember there is no equivalent — a child cannot write back to a parent prop.        -->
<!-- Instead, Ember uses a callback action: @action setName(val) { this.name = val; }    -->
<!-- and passes it down as an argument: <TextInput @value={{this.name}} @onChange={{this.setName}} /> -->

<TextInput bind:value={name} />
<p>Hello, {name}!</p>
`,m=r(`<h1 class="mt-4 mb-16 text-6xl font-bold">Two-way Binding &amp; Forms</h1> <div class="prose mb-12"><p>Ember provides <code></code> and <code></code> components that wrap
		native elements and handle two-way binding internally. For other elements like <code>&lt;select&gt;</code>, you wire up a change handler manually using the <code></code> modifier and an <code>@action</code> that writes the new value back to a tracked
		property.</p> <p>Svelte's <code>bind:</code> directive is more general — it works directly on any native form
		element and eliminates the need for change handlers for simple cases. A single <code>bind:value</code> or <code>bind:checked</code> replaces both the controlled attribute and
		the event listener. Critically, <code>bind:</code> also works on component props, allowing a parent
		and child to share a value without callback plumbing.</p></div> <h2 class="mb-6 text-3xl font-semibold">Form inputs</h2> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!> <!></div></div> <h2 class="mt-16 mb-6 text-3xl font-semibold">Binding to component props</h2> <div class="prose mb-12"><p>In Svelte, <code>bind:</code> is not limited to native HTML elements. A child component can
		expose a prop with <code>$bindable()</code>, and the parent can pass <code>bind:value</code> to create a two-way link. Changes made inside the child flow back to the parent
		automatically — no event emitting or callback props required.</p> <p>Ember has no equivalent mechanism. Arguments passed to a component are strictly one-directional
		— a child cannot write back to a parent argument. The idiomatic Ember solution is to pass a
		callback <code>@action</code> down as an argument and invoke it from the child whenever the value
		changes.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div></div>`,1);function h(r){var h=m(),g=n(t(h),2),_=e(g),v=n(e(_));v.textContent=`<Input />`;var y=n(v,2);y.textContent=`<Textarea />`;var b=n(y,4);b.textContent=`{{on}}`,i(3),a(_),i(2),a(g);var x=n(g,4),S=e(x),C=e(S);s(C,{});var w=n(C,2);c(w,{get code(){return u},language:`svelte`,filename:`forms.svelte`}),a(S);var T=n(S,2),E=e(T);l(E,{});var D=n(E,2);c(D,{get code(){return d},language:`javascript`,filename:`forms.js`});var O=n(D,2);c(O,{get code(){return f},language:`hbs`,filename:`forms.hbs`}),a(T),a(x);var k=n(x,6),A=e(k),j=e(A);s(j,{});var M=n(j,2);c(M,{get code(){return p},language:`svelte`,filename:`forms-bind-component.svelte`}),a(A),a(k),o(r,h)}export{h as component};