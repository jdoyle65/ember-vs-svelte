/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		paths: {
			base: process.env.GITHUB_PAGES === 'true' ? '/ember-vs-svelte' : ''
		}
	}
};

export default config;
