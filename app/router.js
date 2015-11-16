import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('classics', function(){
		this.route('index', {path: '/'}),
		this.route('new', {path: '/new'})
	});
	this.route('guide');
});

export default Router;
