<script lang="ts">
  import ThirdPartyWidget from './ThirdPartyWidget.svelte';
</script>

<!-- The ThirdPartyWidget adds an `.active` class to elements
     via its own internal logic. Because `.active` is added by
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
