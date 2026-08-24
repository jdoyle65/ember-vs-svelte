<script>
	let count = $state(1);
	let doubledCount = $derived(count * 2);

	function increment() {
		count += 1;
	}
</script>

<span>Count: {count}</span>
<span>Doubled Count: {doubledCount}</span>

<button onclick={() => increment()}>Increment</button>
