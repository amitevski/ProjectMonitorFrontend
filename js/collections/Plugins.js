/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 12:18
 * aco.mitevski@mayflower.de
 */

define(['backbone', 'underscore', 'models/AbstractPlugin'],
function(Backbone, _, pluginModel) {
    var plugins = Backbone.Collection.extend({
        model: pluginModel,
        //@todo replace with real url
        url: 'fixtures/projects/1/revisions/17.json',

        parse: function(response) {
            return response.qualityReports;
        }
    });

    return new plugins;
});