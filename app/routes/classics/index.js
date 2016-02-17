import Ember from 'ember';

export default Ember.Route.extend({
	// The route details for all ACE questionnaires
    model() {
    	return this.store.findAll('classic');
    },
  	// Clears all items in the data store
    // TODO: Prompt the user
  	actions: {
      clear(){
        this.store.findAll('classic').then(function(record){
          record.content.forEach(function(rec) {
            Ember.run.once(this, function() {
               rec.deleteRecord();
               rec.save();
            });
          }, this);
        });
      }
    }
});
