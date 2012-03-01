/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 12:27
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore', 'views/AbstractPlugin','text!templates/PHPUnitPlugin.html'],
function(Backbone, _, abstractPluginView, templateHTML) {
    var PHPUnitPluginView = abstractPluginView.extend({
        templateHTML: templateHTML
    });
    return PHPUnitPluginView;
});