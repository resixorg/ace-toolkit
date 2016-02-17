import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('index', { path: '/' });

  // Render the path /screenings as an alias for /classics
  // as we would later like to specialize it
	this.route('classics', {path: '/screenings'}, function() {
		this.route('index', {path: '/'}),
		this.route('new', {path: '/new'}),
		this.route('view', {path: '/:classic_id'}),
		this.route('edit', {path: '/:classic_id/edit'})
	});

	this.route('guide');
	this.route('contact');
});

export default Router;
