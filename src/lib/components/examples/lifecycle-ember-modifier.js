import { modifier } from 'ember-modifier';

const autofocus = modifier((element) => {
	element.focus();

	return () => {
		// cleanup runs when the element is removed from the DOM
	};
});

export default autofocus;
