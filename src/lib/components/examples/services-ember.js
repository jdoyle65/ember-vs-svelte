import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SessionService extends Service {
	@tracked currentUser = null;

	@action
	login(user) {
		this.currentUser = user;
	}

	@action
	logout() {
		this.currentUser = null;
	}
}
