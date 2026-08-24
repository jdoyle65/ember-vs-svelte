import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
	@tracked fruits = ['apple', 'banana', 'cherry'];
	@tracked isLoggedIn = true;
	@tracked score = 72;

	// Arbitrary expressions aren't supported in templates, so derived
	// values must be computed in the class as getters.
	get fruitList() {
		return this.fruits.join(', ');
	}

	get firstFruitUpper() {
		return this.fruits[0].toUpperCase();
	}

	get grade() {
		if (this.score >= 90) return 'A';
		if (this.score >= 70) return 'B';
		return 'C';
	}
}
