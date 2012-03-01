/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 11:55
 * aco.mitevski@mayflower.de
 */


define(['backbone', 'underscore'], function(Backbone, _) {
    var AbstractPluginModel = Backbone.Model.extend({

        /**
         * return the name of the plugin file for the current module
         */
        getToolFileName: function() {
            return this.get('tool').replace(/ /g,"") + 'Plugin';
        }
    });

    return AbstractPluginModel;
});