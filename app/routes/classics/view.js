import Ember from 'ember';

export default Ember.Route.extend({
	// The route details for a single ACE questionnaire
    model(params) {
		return this.store.findRecord('classic', params.classic_id);
  },
  actions: {
    cancel: function() {
			this.transitionTo('classics');
		}
  }
});
