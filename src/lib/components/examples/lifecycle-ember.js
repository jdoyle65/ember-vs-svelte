import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TimerComponent extends Component {
	@tracked seconds = 0;

	#interval;

	constructor(owner, args) {
		super(owner, args);

		this.#interval = setInterval(() => {
			this.seconds += 1;
		}, 1000);
	}

	willDestroy() {
		super.willDestroy();
		clearInterval(this.#interval);
	}
}
