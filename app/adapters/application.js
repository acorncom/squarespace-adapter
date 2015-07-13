import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';
import apiTokens from './tokens';

export default DS.RESTAdapter.extend({
    proxy: config.APP.CORS_PROXY,
    token: apiTokens().readabilityToken,
    blog: config.APP.BLOG,
    host: config.APP.PARSER
});
