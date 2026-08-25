// app/models/post.js
// Ember Data requires every resource to be declared as a model.
// The model describes the shape of the data and its relationships.
import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
	@attr('string') title;
	@attr('string') body;
	@attr('date') publishedAt;

	@belongsTo('user', { async: false }) author;
	@hasMany('comment', { async: true }) comments;
}
