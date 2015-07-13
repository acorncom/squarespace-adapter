import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    datePublished: DS.attr("date"),
    heroImage: DS.attr(),
    excerpt: DS.attr(),
    content: DS.attr()
});
