import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submitClassicQnaire(newTitle) {
            if (newTitle) {
                this.sendAction('action', newTitle);
            }
            // Clear the input
            this.set('newTitle', '');
        }
    }
});
