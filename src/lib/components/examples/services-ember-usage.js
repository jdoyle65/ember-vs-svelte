import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
	@service session;

	@action
	login() {
		this.session.login({ name: 'Alice' });
	}
}
