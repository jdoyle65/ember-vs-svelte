<script lang="ts">
	let user = $state({ name: 'Alice', age: 30 });
	let fruits = $state(['apple', 'banana']);

	function birthday() {
		user.age += 1;
	}

	function addFruit() {
		fruits.push('cherry');
	}

	function renameFruit() {
		fruits[0] = 'avocado';
	}
</script>

<p>Name: {user.name}, Age: {user.age}</p>
<p>Fruits: {fruits.join(', ')}</p>

<button onclick={birthday}>Birthday</button>
<button onclick={addFruit}>Add Fruit</button>
<button onclick={renameFruit}>Rename First Fruit</button>
