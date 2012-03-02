/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 02.03.12
 * Time: 09:11
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore'], function(Backbone, _) {
    var DetailPluginModel = Backbone.Model.extend({
        //@todo replace with real urlRoot
        urlRoot: 'fixtures/qualityReports/1.json'
    });
    return new DetailPluginModel;
});