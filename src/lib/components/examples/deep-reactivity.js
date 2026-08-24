import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
	// Objects must be replaced entirely — mutating a property won't trigger reactivity
	@tracked user = { name: 'Alice', age: 30 };

	// Arrays must be replaced entirely — push/index assignment won't trigger reactivity
	@tracked fruits = ['apple', 'banana'];

	@action
	birthday() {
		this.user = { ...this.user, age: this.user.age + 1 };
	}

	@action
	addFruit() {
		this.fruits = [...this.fruits, 'cherry'];
	}

	@action
	renameFruit() {
		this.fruits = this.fruits.map((f, i) => (i === 0 ? 'avocado' : f));
	}
}
