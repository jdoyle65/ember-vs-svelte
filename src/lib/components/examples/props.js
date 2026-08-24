import Component from '@glimmer/component';

export default class GreetingComponent extends Component {
	get greeting() {
		return this.args.greeting ?? 'Hello';
	}

	get count() {
		return this.args.count ?? 0;
	}
}
