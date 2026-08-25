<script lang="ts">
	let name = $state('');
	let isAgreed = $state(false);
	let role = $state('viewer');

	function submit(e: SubmitEvent) {
		e.preventDefault();
		console.log({ name, isAgreed, role });
	}
</script>

<form onsubmit={submit}>
	<input type="text" bind:value={name} placeholder="Your name" />

	<input type="checkbox" bind:checked={isAgreed} />

	<select bind:value={role}>
		<option value="viewer">Viewer</option>
		<option value="editor">Editor</option>
		<option value="admin">Admin</option>
	</select>

	<button type="submit">Submit</button>
</form>
