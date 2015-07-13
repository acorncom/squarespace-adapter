import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    date: DS.attr("date"),
    heroImage: DS.attr(),
    excerpt: DS.attr(),
    readMoreLink: DS.attr()
});
