import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('first-spell', { path: '/first-spell/:page' });
  this.route('second-spell', { path: '/second-spell/:page' });
});

export default Router;
