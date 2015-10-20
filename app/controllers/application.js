import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    invalidateSession: function invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
