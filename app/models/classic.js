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

  aceScore: Ember.computed('firstName','lastName', function(){
    return  parseInt(this.get('q1Score') ? 1 : 0) +
            parseInt(this.get('q2Score') ? 1 : 0) +
            parseInt(this.get('q3Score') ? 1 : 0) +
            parseInt(this.get('q4Score') ? 1 : 0) +
            parseInt(this.get('q5Score') ? 1 : 0) +
            parseInt(this.get('q6Score') ? 1 : 0) +
            parseInt(this.get('q7Score') ? 1 : 0) +
            parseInt(this.get('q8Score') ? 1 : 0) +
            parseInt(this.get('q9Score') ? 1 : 0) +
            parseInt(this.get('q10Score') ? 1 : 0) +
            parseInt(this.get('q11Score') ? 1 : 0) +
            parseInt(this.get('q12Score') ? 1 : 0);
  }),

  aceScoreSum: Ember.computed.sum('aceScore')

});
