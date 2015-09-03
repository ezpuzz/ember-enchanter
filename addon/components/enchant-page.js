import Ember from 'ember';
import layout from '../templates/components/enchant-page';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: layout,

  tagName: 'div',

  // the parent spell that contains this page
  spell: null,

  // holds the order of this particular page
  pageIndex: null,

  currentPage: null,

  isVisible: computed('currentPage', 'pageIndex', function() {
    return this.get('currentPage') === this.get('pageIndex');
  }),

  isValid: true,

  didRender() {
    Ember.Logger.log('Page assigned to Index: ', this.get('pageIndex'));
  },
});
