<script>
	let { greeting = 'Hello', name, count = 0 } = $props();
</script>

<p>{greeting}, {name}! You have {count} messages.</p>
