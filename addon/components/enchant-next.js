import Ember from 'ember';
import layout from '../templates/components/enchant-next';

const { computed } = Ember;
const { not, alias } = computed;

export default Ember.Component.extend({
  layout: layout,

  // displayed inside the button
  buttonText: 'Next',

  click() {
    this.attrs.submit(this.get('currentPage'));
  },
});
