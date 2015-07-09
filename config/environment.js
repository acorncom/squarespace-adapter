/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'sqaurespace-adapter',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },
        contentSecurityPolicy: {
        }
    };

    ENV.APP.CORS_PROXY = 'https://cors-anywhere.herokuapp.com';
    ENV.APP.SQUARESPACE_HOST = 'http://www.squarespace.com';
    ENV.APP.READIBILITY_PARSER_CORS_PROXY = 'https://cors-anywhere.herokuapp.com';
    ENV.APP.READIBILITY_PARSER_HOST = 'https://readability.com/api/content/v1/parser';

    ENV.contentSecurityPolicy['connect-src'] = "'self' https://cors-anywhere.herokuapp.com https://readability.com";

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};
