import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
    proxy: config.APP.CORS_PROXY,
    token: config.APP.READABILITY_TOKEN,
    blog: config.APP.BLOG,
    host: config.APP.PARSER
});
