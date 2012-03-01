/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 12:24
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore'], function(Backbone, _) {
    var AbstractPluginView = Backbone.View.extend({
        tagName     : 'div',
        className   : 'span3',
        templateHTML: '<span>Abstract Plugin</span>',

        initialize: function() {
            _.bindAll(this, 'render', 'unrender');
            this.model.bind('change', this.render);
            this.model.view = this;
            this.template = _.template(this.templateHTML);
        },

        /**
         * unrender a single plugin
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
            return this;
        }
    });

    return AbstractPluginView;
});