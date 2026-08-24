// helpers/uppercase.js
import { helper } from '@ember/component/helper';

export default helper(function uppercase([str]) {
	return str.toUpperCase();
});
