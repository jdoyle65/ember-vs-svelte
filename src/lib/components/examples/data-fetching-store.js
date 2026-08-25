// app/routes/posts.js
// The store is a service injected into every route automatically.
// It manages a client-side cache of all loaded records.
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostsRoute extends Route {
	@service store;

	async model() {
		// Fetches all posts — hits the cache if already loaded,
		// otherwise makes a GET request to /posts via the adapter.
		return this.store.findAll('post');
	}
}
