import Ember from 'ember';

export default Ember.Route.extend({
	// Define a pre-populated model
    model() {
        let qnaires = [
            {
                title: "Learn Ember",
                complete: false,
            },
            {
                title: "Solve World Hunger",
                complete: false,
            },
            {
                title: "Solve World Hunger",
                complete: false,
            },
            {
                title: "Solve World Hunger",
                complete: false,
            },
            {
                title: "Solve World Hunger",
                complete: false,
            },
            {
                title: "Solve World Hunger",
                complete: false,
            },
            {
                title: "Solve World Hunger",
                complete: false,
            }
        ];
        return qnaires;
    }
});
