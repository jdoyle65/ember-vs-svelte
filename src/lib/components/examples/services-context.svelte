<!-- Parent.svelte -->
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
</script>

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
</script>

{#if session.currentUser}
	<span>Welcome, {session.currentUser.name}</span>
	<button onclick={() => session.logout()}>Log out</button>
{:else}
	<button onclick={() => session.login({ name: 'Alice' })}>Log in</button>
{/if}
