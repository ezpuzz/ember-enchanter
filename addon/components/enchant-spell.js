import Ember from 'ember';
import layout from '../templates/components/enchant-spell';

const { computed } = Ember;
const { equal } = computed;

export default Ember.Component.extend({
  layout: layout,

  tagName: 'div',

  // holds the child page components
  pages: Ember.A(),

  currentPage: 0,

  isFirstPage: equal('currentPage', 0),

  isLastPage: computed('currentPage', 'pages', {
    get() {
      return this.get('currentPage') === this.get('pages.length') - 1;
    },
    set() {
    },
  }),

  actions: {
    nextPage() {
      if (this.get('isLastPage')) {
        Ember.Logger.debug('Spell is already on last page.');
      } else {
        this.incrementProperty('currentPage');
      }
    },

    previousPage() {
      if (this.get('isFirstPage')) {
        Ember.Logger.debug('Spell is already on first page.');
      } else {
        this.decrementProperty('currentPage');
      }
    },

    // page could be a number of the step or a page route name
    goToPage(page) {
      Ember.Logger.debug('Spell page set to: ', page);
      return page;
      // TODO go to designated page of spell
    },

    complete() {
      // TODO finish and complete wizard (transition to completion route)
    },
  },
});
