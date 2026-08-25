<script lang="ts">
	// Child component: TextInput.svelte
	// In Svelte, bind: works on component props too.
	// The child declares the prop with $bindable() so the parent can write back to it.

	// --- TextInput.svelte ---
	// <script lang="ts">
	//   let { value = $bindable() }: { value: string } = $props();
	// </script>
	// <input type="text" bind:value />

	// --- Parent component ---
	import TextInput from './TextInput.svelte';

	let name = $state('');
</script>

<!-- The parent passes bind:value, so changes inside TextInput flow back up automatically. -->
<!-- In Ember there is no equivalent — a child cannot write back to a parent prop.        -->
<!-- Instead, Ember uses a callback action: @action setName(val) { this.name = val; }    -->
<!-- and passes it down as an argument: <TextInput @value={{this.name}} @onChange={{this.setName}} /> -->

<TextInput bind:value={name} />
<p>Hello, {name}!</p>
