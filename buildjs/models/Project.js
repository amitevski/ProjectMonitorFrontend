define(["backbone","underscore"],function(a,b){var c=a.Model.extend({getId:function(){return this.get("id")},getLastRevisionId:function(){return this.get("lastRevision").id}});return c})