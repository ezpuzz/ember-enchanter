import Ember from 'ember';
import layout from '../templates/components/enchant-next';

const { computed } = Ember;
const { not } = computed;

export default Ember.Component.extend({
  layout: layout,

  // displayed inside the button
  buttonText: 'Next',

  // holds the validation of the current Page
  pageValid: false,

  // used to disable button until validation complete
  disabled: not('pageValid'),

  click() {
    this.attrs.submit(this.get('currentPage'));
  },
});
