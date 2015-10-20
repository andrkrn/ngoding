import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', {path: '/posts'}, function() {
    this.route('show', {path: '/:post_id'});
  });

  this.route('editor', function() {
    this.route('new', {path: ''});
    this.route('edit', {path: ':post_id'});
  });

  this.route('error404', {path: '/*path'});
});

export default Router;
