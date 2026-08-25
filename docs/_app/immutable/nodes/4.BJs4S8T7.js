import{M as e,N as t,P as n,S as r,U as i,W as a,b as o}from"../chunks/BBgs22xH.js";import"../chunks/xihTtKlq.js";import{n as s,r as c,t as l}from"../chunks/Bm3-0dFn.js";var u=`/* Global CSS in an Ember app — nothing prevents these styles from
   affecting every .card element in the entire application.
   All stylesheets are global by default. */

.card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card p {
  color: #64748b;
}

/* Common workaround: BEM naming convention to avoid collisions.
   Instead of .card, scope it to the component with a prefix. */

.my-component__card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.my-component__card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.my-component__card-body {
  color: #64748b;
}
`,d=`<script lang="ts">
  let { title, body } = $props<{ title: string; body: string }>();
<\/script>

<div class="card">
  <h2>{title}</h2>
  <p>{body}</p>
</div>

<style>
  /* Svelte automatically scopes these styles to this component.
     The \`p\` and \`.card\` selectors look global, but Svelte rewrites
     them at compile time so they only match elements rendered by
     this component. No BEM or naming convention needed. */

  .card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
  }
</style>
`,f=`<script lang="ts">
  import ThirdPartyWidget from './ThirdPartyWidget.svelte';
<\/script>

<!-- The ThirdPartyWidget adds an \`.active\` class to elements
     via its own internal logic. Because \`.active\` is added by
     a child component or external library, Svelte's scoping
     would normally prevent our styles from reaching it.
     :global() lets us intentionally break out of scoping. -->

<div class="widget-wrapper">
  <ThirdPartyWidget />
</div>

<style>
  .widget-wrapper {
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  }

  /* Use :global() to style a class added by a child component,
     a third-party library, or JavaScript at runtime — cases where
     Svelte's compile-time scoping cannot reach the element. */
  .widget-wrapper :global(.active) {
    background-color: #dbeafe;
    color: #1e40af;
    font-weight: 600;
  }
</style>
`,p=r(`<h1 class="mt-4 mb-16 text-6xl font-bold">CSS Scoping</h1> <div class="prose mb-12"><p>In Ember, all CSS is global. Styles written in any stylesheet affect the entire application —
		there is no built-in component-level isolation. Teams work around this with naming conventions
		like BEM, CSS Modules, or utility-first frameworks.</p> <p>Svelte takes the opposite approach: every <code></code> block is automatically scoped
		to the component it belongs to. Svelte adds a unique attribute to the component's elements at compile
		time and rewrites the CSS selectors to match, so a <code>p</code> selector in one component will
		never affect <code></code> elements in another.</p></div> <h2 class="mb-6 text-3xl font-semibold">Global styles in Ember vs Scoped styles in Svelte</h2> <div class="flex flex-row gap-12 mb-16"><div class="flex flex-col gap-4"><!> <!></div> <div class="flex flex-col gap-4"><!> <!></div></div> <h2 class="mt-16 mb-6 text-3xl font-semibold">Opting out of scoping</h2> <div class="prose mb-12"><p>Sometimes you need to style elements that Svelte's compiler cannot see at build time — for
		example, a class added dynamically by a child component, a third-party library, or JavaScript at
		runtime. In those cases you can use <code>:global()</code> to intentionally break out of scoping
		for a specific selector while keeping everything else scoped.</p> <p>The example below wraps a third-party widget and uses <code>:global(.active)</code> to style the <code>.active</code> class that the widget adds to its own elements. The <code>.widget-wrapper</code> selector remains scoped, so the rule only applies within this component's wrapper — it won't
		affect <code>.active</code> elements elsewhere in the app.</p></div> <div class="flex flex-row gap-12"><div class="flex flex-col gap-4"><!> <!></div></div>`,1);function m(r){var m=p(),h=n(t(m),2),g=n(e(h),2),_=n(e(g));_.textContent=`<style>`;var v=n(_,4);v.textContent=`<p>`,i(),a(g),a(h);var y=n(h,4),b=e(y),x=e(b);l(x,{});var S=n(x,2);c(S,{get code(){return u},language:`css`,filename:`my-component.css`}),a(b);var C=n(b,2),w=e(C);s(w,{});var T=n(w,2);c(T,{get code(){return d},language:`svelte`,filename:`MyComponent.svelte`}),a(C),a(y);var E=n(y,6),D=e(E),O=e(D);s(O,{});var k=n(O,2);c(k,{get code(){return f},language:`svelte`,filename:`ParentComponent.svelte`}),a(D),a(E),o(r,m)}export{m as component};