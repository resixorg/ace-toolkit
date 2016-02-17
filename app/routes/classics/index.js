import Ember from 'ember';

export default Ember.Route.extend({
	// The route details for all ACE questionnaires
    model() {
    	return this.store.findAll('classic');
    }
});
