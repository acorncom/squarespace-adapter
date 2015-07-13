import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    extractSingle: function (store, typeClass, payload, id){
        payload.id = id;
        payload.heroImage = payload.lead_image_url;
        payload.datePublished = payload.date_published;
        payload = {
            post: payload
        };
        return this._super(store, typeClass, payload, id);
    }
});
