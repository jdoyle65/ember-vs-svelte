// app/controllers/posts.js
import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class PostsController extends Controller {
	@service store;

	@action
	async createPost() {
		// Creates a new record in the store and persists it via a POST request.
		const post = this.store.createRecord('post', {
			title: 'New Post',
			body: 'Hello world'
		});

		await post.save();
	}

	@action
	async deletePost(post) {
		// Deletes locally and sends a DELETE request.
		await post.destroyRecord();
	}
}
