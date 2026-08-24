<script lang="ts">
	// If an npm package exports a Button, you import it under a different name.
	// There is no global registry — every component is just a module.
	import Button from '$lib/components/Button.svelte';
	import { Button as AddonButton } from 'some-addon';
</script>

<!-- No ambiguity — each name is explicit and local to this file -->
<Button>My button</Button>
<AddonButton>Addon button</AddonButton>
