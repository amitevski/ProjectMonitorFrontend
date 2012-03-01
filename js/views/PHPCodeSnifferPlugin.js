/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 01.03.12
 * Time: 13:33
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore', 'views/AbstractPlugin','text!templates/PHPCodeSnifferPlugin.html'],
function(Backbone, _, abstractPluginView, templateHTML) {
    var PHPCodeSnifferView = abstractPluginView.extend({
        templateHTML: templateHTML
    });
    return PHPCodeSnifferView;
});