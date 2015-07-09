import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
    host: config.APP.CORS_PROXY + "/http://www.forloveandlemons.com/blog",
    findAll: function(store, type, id, snapshot){
        return Ember.$.get(this.get("host"), function(posts){
            return posts;
        });
    }
});
