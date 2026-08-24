// app/routes/posts/post.js
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PostRoute extends Route {
	@service session;
	@service store;

	// Runs first. Redirect before the model is even fetched.
	async beforeModel() {
		if (!this.session.isAuthenticated) {
			this.transitionTo('login');
		}
	}

	// Fetches and returns the data for this route.
	// The return value is passed to the controller and template as `this.model`.
	async model({ post_id }) {
		return this.store.findRecord('post', post_id);
	}

	// Runs after model resolves. Receives the resolved model.
	// Useful for secondary redirects based on what was loaded.
	async afterModel(post) {
		if (post.isArchived) {
			this.transitionTo('posts');
		}
	}
}
