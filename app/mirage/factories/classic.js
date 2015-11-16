/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  date() {return faker.date.future()},
  firstName() {return faker.name.firstName()},
  lastName() {return faker.name.lastName()},
  age() {return faker.random.arrayElement([18,25,34,45,65])},

  q1Score() {return faker.random.arrayElement([true, false])},
  q2Score() {return faker.random.arrayElement([true, false])},
  q3Score() {return faker.random.arrayElement([true, false])},
  q4Score() {return faker.random.arrayElement([true, false])},
  q5Score() {return faker.random.arrayElement([true, false])},
  q6Score() {return faker.random.arrayElement([true, false])},
  q7Score() {return faker.random.arrayElement([true, false])},
  q8Score() {return faker.random.arrayElement([true, false])},
  q9Score() {return faker.random.arrayElement([true, false])},
  q10Score() {return faker.random.arrayElement([true, false])},
  q11Score() {return faker.random.arrayElement([true, false])},
  q12Score() {return faker.random.arrayElement([true, false])},

  aceScore() {return faker.random.arrayElement([0,1,2,3,4,5,6,7,8,9,10,11,12])}

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
