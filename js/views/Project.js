/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 12:22
 * aco.mitevski@mayflower.de
 */

define(['backbone', 'underscore', 'jquery', 'text!templates/Project.html'],
function(Backbone, _, $, projectTemplate) {
    var ProjectView = Backbone.View.extend({
        tagName: 'li',
        className: 'project',


        initialize: function() {
            _.bindAll(this, 'render', 'unrender', 'loadProjectDetail');
            this.model.bind('change', this.render);
            this.model.view = this;
            this.template = _.template(projectTemplate);
        },


        /**
         * load details for a selected project
         */
        loadProjectDetail: function() {
            window.location.hash = 'projects/'   + this.model.getId() +
                                   '/revisions/' + this.model.getLastRevisionId();
        },

        /**
         * unrender a single project <li>
         */
        unrender: function() {
            $(this.model.el).remove();
            return this;
        },

        /**
         * render a single project <li>
         */
        render: function() {
            this.unrender();
            var model = this.model.toJSON();
            var el = $(this.el);
            el.html(this.template(model));
            el.on('click', _.bind(this.loadProjectDetail))
            this.model.el = el;
            return this;
        }
    });

    return ProjectView;
});