import Ember from 'ember';

export function formatScoreField(params/*, hash*/) {
  console.log(params)
  if (params[0] == "true") {
    return Ember.String.htmlSafe('<span class="label label-danger">Yes</span>');
  } else {
    return Ember.String.htmlSafe('<span class="label label-success">No</span>');
  }
}

export default Ember.Helper.helper(formatScoreField);
