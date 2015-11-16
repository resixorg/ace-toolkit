import Ember from 'ember';

export default Ember.Route.extend({
	// Define a pre-populated model
    model() {
    	return this.store.findAll('classic');
    }
});
