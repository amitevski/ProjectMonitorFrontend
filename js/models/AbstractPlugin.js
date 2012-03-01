/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 11:55
 * aco.mitevski@mayflower.de
 */


define(['backbone', 'underscore'], function(Backbone, _) {
    var AbstractPluginModel = Backbone.Model.extend({
        getToolName: function() {
            return this.get('tool').replace(/ /g,"").toLowerCase();
        }
    });

    return AbstractPluginModel;
});