/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  date() {return faker.date.future()},
  'first-name'() {return faker.name.firstName()},
  'last-name'() {return faker.name.lastName()},
  age() {return faker.random.arrayElement([18,25,34,45,65])},

  'q1-score'() {return faker.random.arrayElement([true, false])},
  'q2-score'() {return faker.random.arrayElement([true, false])},
  'q3-score'() {return faker.random.arrayElement([true, false])},
  'q4-score'() {return faker.random.arrayElement([true, false])},
  'q5-score'() {return faker.random.arrayElement([true, false])},
  'q6-score'() {return faker.random.arrayElement([true, false])},
  'q7-score'() {return faker.random.arrayElement([true, false])},
  'q8-score'() {return faker.random.arrayElement([true, false])},
  'q9-score'() {return faker.random.arrayElement([true, false])},
  'q10-score'() {return faker.random.arrayElement([true, false])},
  'q11-score'() {return faker.random.arrayElement([true, false])},
  'q12-score'() {return faker.random.arrayElement([true, false])},

  'ace-score'() {return faker.random.arrayElement([0,1,2,3,4,5,6,7,8,9,10,11,12])}

  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
});
