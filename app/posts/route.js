import Ember from 'ember';
import config from "../config/environment";

export default Ember.Route.extend({
    model: function(){
        let url = config.APP.CORS_PROXY + "/http://www.forloveandlemons.com/blog";
        return Ember.$.get(url).then(function(post){
            return post;
        });
    },
    setupController: function(controller, model){
        controller.set("post", model);
    }
});
