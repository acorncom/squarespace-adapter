import Ember from 'ember';

export default Ember.Route.extend({
    model: function(parameters){
        return this.store.find("post", parameters.slug);
    },
    setupController: function(controller, model){
        controller.set("post", model);
    }
});
