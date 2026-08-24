<script lang="ts">
	interface Props {
		greeting?: string;
		name: string;
		count?: number;
	}

	let { greeting = 'Hello', name, count = 0 }: Props = $props();
</script>

<p>{greeting}, {name}! You have {count} messages.</p>
