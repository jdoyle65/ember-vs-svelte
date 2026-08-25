import{M as e,N as t,P as n,S as r,W as i,b as a}from"../chunks/BBgs22xH.js";import"../chunks/xihTtKlq.js";import{n as o,r as s,t as c}from"../chunks/Bm3-0dFn.js";var l=`import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SessionService extends Service {
	@tracked currentUser = null;

	@action
	login(user) {
		this.currentUser = user;
	}

	@action
	logout() {
		this.currentUser = null;
	}
}
`,u=`import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
	@service session;

	@action
	login() {
		this.session.login({ name: 'Alice' });
	}
}
`,d=`<nav>
  {{#if this.session.currentUser}}
    <span>Welcome, {{this.session.currentUser.name}}</span>
    <button {{on "click" this.session.logout}}>Log out</button>
  {{else}}
    <button {{on "click" this.login}}>Log in</button>
  {{/if}}
</nav>
`,f=`<!-- Parent.svelte -->
<script lang="ts">
	import { setContext } from 'svelte';

	const session = $state({ currentUser: null as { name: string } | null });

	setContext('session', {
		get currentUser() {
			return session.currentUser;
		},
		login(user: { name: string }) {
			session.currentUser = user;
		},
		logout() {
			session.currentUser = null;
		}
	});
<\/script>

<!-- render children here -->

<!-- ─────────────────────────────────────────── -->

<!-- Child.svelte -->
<script lang="ts">
	import { getContext } from 'svelte';

	const session = getContext<{
		currentUser: { name: string } | null;
		login(user: { name: string }): void;
		logout(): void;
	}>('session');
<\/script>

{#if session.currentUser}
	<span>Welcome, {session.currentUser.name}</span>
	<button onclick={() => session.logout()}>Log out</button>
{:else}
	<button onclick={() => session.login({ name: 'Alice' })}>Log in</button>
{/if}
`,p=`export const session = $state({
	currentUser: null as { name: string } | null,

	login(user: { name: string }) {
		this.currentUser = user;
	},

	logout() {
		this.currentUser = null;
	}
});
`,m=`<script lang="ts">
	import { session } from './services-module.svelte';
<\/script>

{#if session.currentUser}
	<span>Welcome, {session.currentUser.name}</span>
	<button onclick={() => session.logout()}>Log out</button>
{:else}
	<button onclick={() => session.login({ name: 'Alice' })}>Log in</button>
{/if}
`,h=r(`<h1 class="mt-4 mb-16 text-6xl font-bold">Services & Shared State</h1> <div class="prose mb-12"><p>Ember services are DI-managed singletons registered in the framework's container and injected
		into routes, controllers, and components using the <code>@service</code> decorator. Because the
		container owns every instance, all consumers share the exact same object — making services the
		standard place for cross-cutting concerns like authentication, feature flags, and analytics.</p> <p>Svelte has no dependency-injection container. Two patterns fill the gap depending on scope. <strong>setContext / getContext</strong> shares a value with every component in a subtree
		without prop-drilling — the value is scoped to the component tree and is ideal for library
		authors or reusable widget trees that shouldn't bleed state into the rest of the app.</p> <p><strong>Module-level <code>$state</code></strong> exported from a <code>.svelte.ts</code> file
		is a true app-wide singleton — the JavaScript module system guarantees a single instance for the
		lifetime of the page. This is the most direct replacement for an Ember service: import it
		anywhere, mutate it, and every component that reads it reacts automatically.</p></div> <h2 class="mb-6 text-3xl font-semibold">Ember Services</h2> <div class="prose mb-12"><p>An Ember service is a class that extends <code>Service</code>. Tracked properties declared with <code>@tracked</code> are reactive — any template or getter that reads them will re-render when
		they change. Actions mutate the tracked properties and can be called from templates or other
		classes. The service is injected into a component by declaring a property with the <code>@service</code> decorator; Ember resolves the singleton from its container automatically.</p></div> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!> <!></div></div> <h2 class="mt-16 mb-6 text-3xl font-semibold">Context API</h2> <div class="prose mb-12"><p>Svelte's <code>setContext</code> and <code>getContext</code> allow a parent component to share a
		value with any descendant without threading it through props. The object passed to <code>setContext</code> can hold reactive <code>$state</code> — because the context value is
		passed by reference, getters on the object keep their reactivity through the tree.</p> <p>Context is scoped to a component subtree and is invisible to components rendered outside it.
		This makes it the right choice for library components and self-contained widget trees, but not
		for truly global state like a session or feature-flag store — for that, reach for a module
		singleton instead.</p></div> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div></div> <h2 class="mt-16 mb-6 text-3xl font-semibold">Module Singletons</h2> <div class="prose mb-12"><p>Exporting a <code>$state</code> object from a <code>.svelte.ts</code> file creates an app-wide
		reactive singleton. The <code>.svelte.ts</code> extension tells Vite to compile Svelte runes in
		the file, so <code>$state</code> works outside of a component. Any component that imports the
		export reads the same object, and mutations trigger reactivity everywhere the state is
		referenced — no store subscriptions, no context wiring, no service container.</p> <p>This is the most direct replacement for an Ember service. Swap the service class and <code>@service</code> injection for a plain import, and the mental model stays the same: one
		shared object, mutate it, UI updates.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!> <!></div></div>`,1);function g(r){var g=h(),_=n(t(g),8),v=e(_),y=e(v);c(y,{});var b=n(y,2);s(b,{get code(){return l},language:`javascript`,filename:`app/services/session.js`}),i(v);var x=n(v,2),S=e(x);c(S,{});var C=n(S,2);s(C,{get code(){return u},language:`javascript`,filename:`app/components/nav-bar.js`});var w=n(C,2);s(w,{get code(){return d},language:`hbs`,filename:`app/components/nav-bar.hbs`}),i(x),i(_);var T=n(_,6),E=e(T),D=e(E);o(D,{});var O=n(D,2);s(O,{get code(){return f},language:`svelte`,filename:`Parent.svelte / Child.svelte`}),i(E),i(T);var k=n(T,6),A=e(k),j=e(A);o(j,{});var M=n(j,2);s(M,{get code(){return p},language:`typescript`,filename:`session.svelte.ts`});var N=n(M,2);s(N,{get code(){return m},language:`svelte`,filename:`NavBar.svelte`}),i(A),i(k),a(r,g)}export{g as component};