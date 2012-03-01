/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 12:23
 * aco.mitevski@mayflower.de
 */
define(['require',
        'backbone',
        'underscore',
        'jquery',
        'collections/Plugins'],

function(require, Backbone, _, $, plugins) {
    var PluginListView = Backbone.View.extend({
        el: $('#plugins'),

        collection: null,

        initialize: function() {
            _.bindAll(this, 'unrender', 'render', 'appendPlugin');
            plugins.bind('refresh', this.render);
            plugins.bind('add', this.render);
            plugins.bind('reset', this.render);
        },

        /**
         * unrender all content
         */
        unrender: function() {
            this.el.html("");
        },

        /**
         * append one plugin
         * @param plugin object
         */
        appendPlugin: function(plugin) {
            require(['views/' + plugin.getToolFileName()],
                _.bind(function(pluginView){
                    var view = new pluginView({model: plugin});
                    var el = view.render().el;
                    this.el.append(el);
            }, this));
        },

        render: function () {
            this.unrender();
            this.el.show();
            plugins.each(this.appendPlugin);
        }
    });

    return new PluginListView;
});