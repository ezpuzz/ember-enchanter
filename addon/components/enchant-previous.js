import Ember from 'ember';
import layout from '../templates/components/enchant-previous';

export default Ember.Component.extend({
  layout: layout,

  // displayed inside the button
  buttonText: 'Previous',

  // used to disable button until validation complete
  disabled: false,

  click() {
    this.attrs.submit(this.get('currentPage'));
  },

});
