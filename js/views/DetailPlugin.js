/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 02.03.12
 * Time: 09:27
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore', 'jquery', 'models/DetailPlugin', 'text!templates/DetailPlugin.html'],
function(Backbone, _, $, detailPluginModel, templateHTML)
{
    var DetailPluginView = Backbone.View.extend({
        tagName  : 'div',
        className: 'span8',
        model    : detailPluginModel,

        initialize: function() {
            _.bindAll(this, 'render', 'unrender');
            this.model.bind('change', this.render);
            this.model.view = this;
            this.template = _.template(templateHTML);
        },

        /**
         * unrender
         */
        unrender: function() {
            $(this.model.el).remove();
            return this;
        },

        /**
         * render a single plugin
         */
        render: function() {
            this.unrender();
            var model = this.model.toJSON();
            var el = $(this.el);
            el.html(this.template(model));
            this.model.el = el;
            $('#htmlDetails').append(this.model.el);
            return this;
        }
    });
    return new DetailPluginView;
});