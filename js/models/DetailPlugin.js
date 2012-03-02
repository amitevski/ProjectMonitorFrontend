/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 02.03.12
 * Time: 09:11
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore'], function(Backbone, _) {
    var DetailPluginModel = Backbone.Model.extend({
        urlRoot: 'fixtures/qualityReports.json'
    });
    return new DetailPluginModel;
});