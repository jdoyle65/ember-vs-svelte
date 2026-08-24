<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	// optional: if you are using 'lang="ts"'
	import typescript from 'highlight.js/lib/languages/typescript';
	import css from 'highlight.js/lib/languages/css';
	import xml from 'highlight.js/lib/languages/xml';
	import svelte from 'highlight.svelte';
	import { setup } from 'highlightjs-glimmer';
	import 'highlight.js/styles/github-dark.css';

	interface Props {
		language: 'svelte' | 'glimmer' | 'hbs' | 'javascript' | 'typescript' | 'css' | 'xml';
		code: string;
		filename?: string;
	}

	let { language, code = '', filename }: Props = $props();

	if (!hljs.getLanguage('javascript')) {
		hljs.registerLanguage('javascript', javascript);
	}

	if (!hljs.getLanguage('typescript')) {
		hljs.registerLanguage('typescript', typescript);
	}
	if (!hljs.getLanguage('css')) {
		hljs.registerLanguage('css', css);
	}
	if (!hljs.getLanguage('xml')) {
		hljs.registerLanguage('xml', xml);
	}
	if (!hljs.getLanguage('svelte')) {
		hljs.registerLanguage('svelte', svelte);
	}

	if (!hljs.getLanguage('glimmer')) {
		setup(hljs);
	}

	let highlightedCode = $derived.by(() => {
		return hljs.highlight(code.trim(), {
			language
		}).value;
	});
</script>

<div>
	{#if filename}
		<div class="py-1 text-sm italic">{filename}</div>
	{/if}
	<pre><code class="language-{language} hljs">{@html highlightedCode}</code></pre>
</div>

<style>
	:global(pre code) {
		-moz-tab-size: 2; /* Older Firefox support */
		tab-size: 2; /* Standard syntax */
	}
</style>
