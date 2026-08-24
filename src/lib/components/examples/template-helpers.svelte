<script lang="ts">
	let fruits = $state(['apple', 'banana', 'cherry']);
	let isLoggedIn = $state(true);
	let score = $state(72);
</script>

<!-- Conditional rendering -->
{#if isLoggedIn}
	<p>Welcome back!</p>
{:else}
	<p>Please log in.</p>
{/if}

<!-- Iterating a list -->
<ul>
	{#each fruits as fruit, i}
		<li>{i + 1}. {fruit}</li>
	{/each}
</ul>

<!-- Arbitrary JS inline — no helper needed -->
<p>Fruits: {fruits.join(', ')}</p>
<p>Upper: {fruits[0].toUpperCase()}</p>
<p>Grade: {score >= 90 ? 'A' : score >= 70 ? 'B' : 'C'}</p>
