import Ember from 'ember';
import layout from '../templates/components/enchant-spell';

export default Ember.Component.extend({
  layout: layout,

  tagName: 'div',

  // holds the child page components
  pages: [],

  actions: {
    goToPage(page) {
      this.set('currentPage', page);
    },
  },
});
