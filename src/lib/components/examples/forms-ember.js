import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
	@tracked name = '';
	@tracked isAgreed = false;
	@tracked role = 'viewer';

	@action
	setIsAgreed(e) {
		this.isAgreed = e.target.checked;
	}

	@action
	setRole(e) {
		this.role = e.target.value;
	}

	@action
	submit(e) {
		e.preventDefault();
		console.log({ name: this.name, isAgreed: this.isAgreed, role: this.role });
	}
}
