<script lang="ts">
	// Any regular function can be imported and called directly in the template.
	import { uppercase } from './utils.js';

	let firstFruit = $state('apple');
</script>

<p>Upper: {uppercase(firstFruit)}</p>
