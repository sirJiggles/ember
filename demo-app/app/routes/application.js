import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.get('bears.json');
  },
  actions: {
    sendTheBears: function(bears) {
      // could for example send the data to the API
      // DATA GOES DOWN ACTIONS GO UP!!
      $.post('/api/bears', bears);
    }
  }
});
