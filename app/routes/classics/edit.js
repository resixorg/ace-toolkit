import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findRecord('classic', params.classic_id);
	},
	actions: {
		// Upon creation
		save: function() {
			// Declare the self variable so that is available in the below callback
			var self = this;

			// Save the model (including additions)
			this.modelFor(this.routeName).save().then(
				function() {
					self.transitionTo('classics.index');
				}
			);
		}
	}
});
