<script lang="ts">
  let { title, body } = $props<{ title: string; body: string }>();
</script>

<div class="card">
  <h2>{title}</h2>
  <p>{body}</p>
</div>

<style>
  /* Svelte automatically scopes these styles to this component.
     The `p` and `.card` selectors look global, but Svelte rewrites
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
