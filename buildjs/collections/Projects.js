define(["backbone","underscore","models/Project"],function(a,b,c){var d=a.Collection.extend({model:c,url:"fixtures/projects.json",nextUrl:null,prevUrl:null,parse:function(a){return this.nextUrl=a.rel.next,this.prevUrl=a.rel.prev,a.projects}});return new d})