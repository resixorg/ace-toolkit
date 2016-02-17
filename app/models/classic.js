import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),

  prettyDate: Ember.computed('date', function(){
    return moment(this.get('date')).format("YYYY-MM-DD HH:MM");
  }),

  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  age: DS.attr(),

  renderName: Ember.computed(function() {
      const firstName = this.get('firstName');
      if (firstName != null) {
        return firstName;
      } else {
        return "Anonymous";
      }
  }),

  fullName: Ember.computed('firstName','lastName', function(){
  	return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  // TODO: Should be defined as boolean values
  // NOTE: This will require type conversion on the model
  q1Score: DS.attr(),
  q2Score: DS.attr(),
  q3Score: DS.attr(),
  q4Score: DS.attr(),
  q5Score: DS.attr(),
  q6Score: DS.attr(),
  q7Score: DS.attr(),
  q8Score: DS.attr(),
  q9Score: DS.attr(),
  q10Score: DS.attr(),
  q11Score: DS.attr(),
  q12Score: DS.attr(),

  // TODO: This should be refactored into a helper method and refactored to use an iteration instead
  aceScore: Ember.computed('firstName','lastName', function(){
    return  Number(JSON.parse(this.get('q1Score') || false)) +
            Number(JSON.parse(this.get('q2Score') || false)) +
            Number(JSON.parse(this.get('q3Score') || false)) +
            Number(JSON.parse(this.get('q4Score') || false)) +
            Number(JSON.parse(this.get('q5Score') || false)) +
            Number(JSON.parse(this.get('q6Score') || false)) +
            Number(JSON.parse(this.get('q7Score') || false)) +
            Number(JSON.parse(this.get('q8Score') || false)) +
            Number(JSON.parse(this.get('q9Score') || false)) +
            Number(JSON.parse(this.get('q10Score') || false)) +
            Number(JSON.parse(this.get('q11Score') || false)) +
            Number(JSON.parse(this.get('q12Score') || false));
  }),

  aceScoreSum: Ember.computed.sum('aceScore')

});
