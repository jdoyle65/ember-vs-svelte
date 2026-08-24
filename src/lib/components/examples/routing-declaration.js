// app/router.js
// Routes are declared explicitly in a central router file.
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function () {
	this.route('posts', function () {
		this.route('post', { path: '/:post_id' });
	});
	this.route('about');
});
