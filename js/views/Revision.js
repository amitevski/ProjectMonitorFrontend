/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 02.03.12
 * Time: 14:13
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore', 'jquery', 'text!templates/Revision.html'],
function(Backbone, _, $, templateHTML) {
    var RevisionView = Backbone.View.extend({
        tagName: 'li',

        initialize: function() {
            _.bindAll(this, 'render', 'unrender');
            this.model.bind('change', this.render);
            this.model.view = this;
            this.template = _.template(templateHTML);
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
    return RevisionView;
});