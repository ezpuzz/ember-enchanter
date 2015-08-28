import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    nextPage() {
      // TODO go to next page of wizard
    },

    previousPage() {
      // TODO go to previous page of wizard
    },

    // page could be a number of the step or a page route name
    goToPage(page) {
      return page;
      // TODO go to designated page of spell
    },

    complete() {
      // TODO finish and complete wizard (transition to completion route)
    },
  },
});
