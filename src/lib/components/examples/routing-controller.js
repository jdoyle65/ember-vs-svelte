// app/controllers/posts/post.js
// Controllers sit between the route and the template.
// They hold UI state and actions that don't belong in the route itself.
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostController extends Controller {
	@tracked isExpanded = false;

	@action
	toggleExpanded() {
		this.isExpanded = !this.isExpanded;
	}
}
