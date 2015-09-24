import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

    normalizeSingleResponse: function (store, typeClass, payload, id){
        payload.heroImage = payload.lead_image_url;
        payload.datePublished = payload.date_published;
        payload = {
            data: {
                id: id,
                type: typeClass.modelName,
                attributes: payload
            }
        };
        return this._super(store, typeClass, payload, id);
    }
});
