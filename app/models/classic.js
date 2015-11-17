import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),

  prettyDate: Ember.computed('date', function(){
    return moment(this.get('date')).format("YYYY-MM-DD HH:MM");
  }),

  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  age: DS.attr(),

  fullName: Ember.computed('firstName','lastName', function(){
  	return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

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
  aceScore: DS.attr()
});
