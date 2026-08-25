import{M as e,N as t,P as n,S as r,W as i,b as a}from"../chunks/BBgs22xH.js";import"../chunks/xihTtKlq.js";import{n as o,r as s,t as c}from"../chunks/Bm3-0dFn.js";var l=`<!-- No router config needed. The file system is the router.

  src/routes/
  ├── +page.svelte              →  /
  ├── about/
  │   └── +page.svelte          →  /about
  └── posts/
      ├── +page.svelte          →  /posts
      └── [id]/
          └── +page.svelte      →  /posts/:id

  Square brackets denote dynamic segments.
  Each folder maps directly to a URL segment. -->
`,u=`// app/router.js
// Routes are declared explicitly in a central router file.
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route('posts', function () {
		this.route('post', { path: '/:post_id' });
	});
	this.route('about');
});
`,d=`// src/routes/posts/[id]/+page.ts
// Importing PageLoad gives the load function fully typed params, fetch, and locals.
// SvelteKit generates this type automatically from the route's file structure.
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch, locals }) => {
	// Guard — equivalent to beforeModel
	if (!locals.user) {
		redirect(302, '/login');
	}

	// Fetch data — equivalent to model()
	const res = await fetch(\`/api/posts/\${params.id}\`);
	const post: { title: string; body: string; isArchived: boolean } = await res.json();

	// Conditional redirect — equivalent to afterModel()
	if (post.isArchived) {
		redirect(302, '/posts');
	}

	// Whatever is returned becomes the typed \`data\` prop in +page.svelte
	return { post };
};
`,f=`// app/routes/posts/post.js
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostRoute extends Route {
	@service session;
	@service store;

	// Runs first. Redirect before the model is even fetched.
	async beforeModel() {
		if (!this.session.isAuthenticated) {
			this.transitionTo('login');
		}
	}

	// Fetches and returns the data for this route.
	// The return value is passed to the controller and template as \`this.model\`.
	async model({ post_id }) {
		return this.store.findRecord('post', post_id);
	}

	// Runs after model resolves. Receives the resolved model.
	// Useful for secondary redirects based on what was loaded.
	async afterModel(post) {
		if (post.isArchived) {
			this.transitionTo('posts');
		}
	}
}
`,p=`<!-- src/routes/posts/[id]/+page.svelte -->
<!-- PageData is auto-generated from the return type of the load function.
     data.post is fully typed — no manual interface needed. -->
<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
<\/script>

<h1>{data.post.title}</h1>
<p>{data.post.body}</p>
`,m=`{{! app/templates/posts/post.hbs }}
{{! Model data is available via @model. The controller mediates
    between the route and the template for additional state/actions. }}

<h1>{{@model.title}}</h1>
<p>{{@model.body}}</p>
`,h=`// app/controllers/posts/post.js
// Controllers sit between the route and the template.
// They hold UI state and actions that don't belong in the route itself.
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostController extends Controller {
	@tracked isExpanded = false;

	@action
	toggleExpanded() {
		this.isExpanded = !this.isExpanded;
	}
}
`,g=r(`<h1 class="mt-4 mb-16 text-6xl font-bold">Routing</h1> <div class="prose mb-12"><p>Ember uses a <strong>central router file</strong> (<code>app/router.js</code>) where all routes
		are declared explicitly using a nested <code>this.route()</code> DSL. The file structure under <code>app/routes/</code> and <code>app/templates/</code> must mirror those declarations — Ember
		uses the names to wire everything together through its resolver.</p> <p>SvelteKit uses <strong>file-based routing</strong>. The directory structure under <code>src/routes/</code> is the router — no configuration required. Folders become URL segments,
		and dynamic segments are denoted by square brackets (e.g. <code>[id]</code>). Adding a route
		means adding a folder and a <code>+page.svelte</code> file.</p></div> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!></div></div> <h2 class="mb-6 text-3xl font-semibold">Loading data</h2> <div class="prose mb-12"><p>Ember routes load data through a set of lifecycle hooks. <code>beforeModel()</code> runs first
		and is typically used for auth guards and redirects before any data is fetched. <code>model()</code> performs the actual data fetching and its return value is passed to the
		template as <code>@model</code>. <code>afterModel()</code> receives the resolved model and can
		trigger further redirects based on what was loaded — for example, redirecting away from a
		resource that no longer exists.</p> <p>SvelteKit collapses all three hooks into a single <code>load</code> function exported from a <code>+page.ts</code> (or <code>+page.server.ts</code> for server-only code). It receives route
		params, a <code>fetch</code> instance, and server-side context like the authenticated user.
		Guards, data fetching, and post-load redirects all live in the same function in the natural
		order they occur. Whatever the function returns becomes the <code>data</code> prop in the
		corresponding <code>+page.svelte</code>.</p> <p>SvelteKit also has deep TypeScript integration through automatically generated types. The <code>PageLoad</code> type — imported from the generated <code>./$types</code> module — gives
		the <code>load</code> function fully typed <code>params</code>, <code>fetch</code>, and <code>locals</code> based on the route's actual file structure. More importantly, SvelteKit
		infers the return type of your <code>load</code> function and uses it to generate a <code>PageData</code> type, which you can use to type the <code>data</code> prop in <code>+page.svelte</code>. This means <code>data.post</code> is fully typed end-to-end with
		no manual interface duplication — change the shape of what <code>load</code> returns and the
		type error surfaces immediately in the component.</p></div> <div class="mb-16 flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!> <!></div> <div class="flex flex-col gap-4"><!> <!> <!></div></div> <h2 class="mb-6 text-3xl font-semibold">Controllers</h2> <div class="prose mb-12"><p>Ember has a third concept that SvelteKit has no equivalent for: the <strong>controller</strong>.
		Controllers sit between the route and the template and are the conventional place for UI state
		and actions that don't belong in the route itself — things like whether a panel is expanded, or
		what tab is active. Each route can have a corresponding controller file in <code>app/controllers/</code> that Ember wires up automatically.</p> <p>In SvelteKit this distinction doesn't exist. The <code>+page.svelte</code> component is the
		template <em>and</em> the controller — local <code>$state</code> variables and functions declared
		in the <code>&lt;script&gt;</code> block handle UI state directly. There is no separate layer.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div></div>`,1);function _(r){var _=g(),v=n(t(_),4),y=e(v),b=e(y);o(b,{});var x=n(b,2);s(x,{get code(){return l},language:`svelte`,filename:`file structure`}),i(y);var S=n(y,2),C=e(S);c(C,{});var w=n(C,2);s(w,{get code(){return u},language:`javascript`,filename:`app/router.js`}),i(S),i(v);var T=n(v,6),E=e(T),D=e(E);o(D,{});var O=n(D,2);s(O,{get code(){return d},language:`typescript`,filename:`src/routes/posts/[id]/+page.ts`});var k=n(O,2);s(k,{get code(){return p},language:`svelte`,filename:`src/routes/posts/[id]/+page.svelte`}),i(E);var A=n(E,2),j=e(A);c(j,{});var M=n(j,2);s(M,{get code(){return f},language:`javascript`,filename:`app/routes/posts/post.js`});var N=n(M,2);s(N,{get code(){return m},language:`hbs`,filename:`app/templates/posts/post.hbs`}),i(A),i(T);var P=n(T,6),F=e(P),I=e(F);c(I,{});var L=n(I,2);s(L,{get code(){return h},language:`javascript`,filename:`app/controllers/posts/post.js`}),i(F),i(P),a(r,_)}export{_ as component};