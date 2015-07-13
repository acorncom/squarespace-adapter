import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
    urlForFind: function(id, modelName, snapshot) {
        id = "?url=" + encodeURIComponent(this.get("blog")) + "/" + encodeURIComponent(id);
        id += "&token=" + this.get("token");
        modelName = "";
        return this._super(id, modelName, snapshot);
    },
    _buildURL: function(modelName, id){
        return this.get("proxy") + "/" + this.get("host") + id; 
    }
});
