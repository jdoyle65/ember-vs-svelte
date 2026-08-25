<script lang="ts">
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
</script>

<p>Seconds elapsed: {seconds}</p>
