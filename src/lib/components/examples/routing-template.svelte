<!-- src/routes/posts/[id]/+page.svelte -->
<!-- PageData is auto-generated from the return type of the load function.
     data.post is fully typed — no manual interface needed. -->
<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1>{data.post.title}</h1>
<p>{data.post.body}</p>
