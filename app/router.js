import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('index', { path: '/' });

	this.route('classics', function() {
		this.route('index', {path: '/'}),
		this.route('new', {path: '/new'}),
		this.route('view', {path: '/:classic_id'}),
		this.route('edit', {path: '/:classic_id/edit'})
	});

	this.route('guide');
	this.route('contact');
});

export default Router;
