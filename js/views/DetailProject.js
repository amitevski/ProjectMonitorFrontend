/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 12:23
 * aco.mitevski@mayflower.de
 */
define(['backbone',
        'underscore',
        'jquery',
        'views/PHPUnitPlugin',
        'views/PHPCodeSnifferPlugin',
        'collections/Plugins'],

function(Backbone, _, $, phpunit, phpcodesniffer, plugins) {
    var PluginListView = Backbone.View.extend({
        el: $('#plugins'),
        pluginViews: {'phpunit'       : phpunit,
                      'phpcodesniffer': phpcodesniffer},

        collection: null,

        initialize: function() {
            _.bindAll(this, 'unrender', 'render', 'appendPlugin');
            plugins.bind('refresh', this.render);
            plugins.bind('add', this.render);
            plugins.bind('reset', this.render);
            //plugins.bind('change', this.render);
        },

        /**
         * unrender all content
         */
        unrender: function() {
            this.el.html("");
        },

        /**
         * append one plugin
         * @param object plugin
         */
        appendPlugin: function(plugin) {
            var pluginView = plugin.getToolName();
            var view = new this.pluginViews[pluginView]({model: plugin});
            var el = view.render().el;
            this.el.append(el);
        },

        render: function () {
            this.unrender();
            this.el.show();
            plugins.each(this.appendPlugin);
        }
    });

    return new PluginListView;
});