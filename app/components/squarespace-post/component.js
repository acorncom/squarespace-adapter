import Ember from 'ember';

export default Ember.Component.extend({
    cleanRawPost: Ember.on("didInsertElement", function(){
        console.log(this.get("post"));
        let posts  = /<article\b[^>]*>([\s\S]*?)<\/article>/g.exec(this.get("post"));
        this.set("cleanPost", posts[0]);
    })
});
