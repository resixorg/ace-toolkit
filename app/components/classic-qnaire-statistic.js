// Providing any computations for the component template (view)
import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',

  aceScoreStatistic: Ember.computed(function() {
		const records = this.get('model');
    const sum = records.reduce(function(acc, record){
			return acc + record.get('aceScore');
		}, 0);
		const count = records.get("length");

		if (count == undefined || count == 0) {
			var average = 0;
		} else {
			var average = sum / count;
		}

		return {sum: sum, count: count, average: average};
  }),

});
