import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    urlForFind: function(id, modelName, snapshot) {
        id = "?url=" + encodeURIComponent(this.get("blog")) + "/2015/09/" + encodeURIComponent(id);
        id += "&token=" + this.get("token");
        modelName = "";
        return this._super(id, modelName, snapshot);
    },
    _buildURL: function(modelName, id){
        return this.get("proxy") + "/" + this.get("host") + id; 
    }
});
