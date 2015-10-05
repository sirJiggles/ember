import Ember from 'ember';

export default Ember.Component.extend({
  bears: [],
  actions: {
    addBear: function() {
      let bearName = this.get('bearName');
      this.get('bears').pushObject(bearName);
    },
    saveBears: function() {
      // send it out as the route is going to manipulate the data
      // this is the 'action' that we are sending out of the component
      // so on the tag that includes it, the action param is for this action
      this.sendAction('action', this.get('bears'));
    }
  }
});
