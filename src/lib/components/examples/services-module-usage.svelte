<script lang="ts">
	import { session } from './services-module.svelte';
</script>

{#if session.currentUser}
	<span>Welcome, {session.currentUser.name}</span>
	<button onclick={() => session.logout()}>Log out</button>
{:else}
	<button onclick={() => session.login({ name: 'Alice' })}>Log in</button>
{/if}
