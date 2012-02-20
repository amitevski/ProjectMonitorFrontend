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
        url: 'fixtures/revisions.json'
    });

    return new plugins;
});