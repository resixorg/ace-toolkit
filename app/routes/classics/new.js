import Ember from 'ember';

export default Ember.Route.extend({
	// Define the model which will be saved
	model: function() {
		return this.store.createRecord('classic', {
			// Add the current date
			date: new Date()
		});
	},

	actions: {
		// Upon creation
		create: function() {
			var self = this;

			// Save the model (including additions)
			this.modelFor(this.routeName).save().then(
				function() {
					self.transitionTo('classics.index');
			});
		}
	}
});
