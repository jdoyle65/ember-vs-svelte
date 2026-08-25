<script lang="ts">
	let count = $state(0);

	$effect(() => {
		console.log('count changed:', count);
	});
</script>

<button onclick={() => count++}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
