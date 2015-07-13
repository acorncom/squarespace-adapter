import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return this.store.find("post", "girls-of-summer-jessica-morrow");
    },
    setupController: function(controller, model){
        controller.set("post", model);
    }
});
