import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
