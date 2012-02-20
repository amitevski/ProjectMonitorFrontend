/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 12:23
 * aco.mitevski@mayflower.de
 */

define(['backbone', 'underscore', 'jquery', 'views/Project', 'collections/Projects'],
function(Backbone, _, $, projectView, projects) {
    var ProjectListView = Backbone.View.extend({
        el: $('#projectList'),

        collection: null,

        initialize: function() {
            _.bindAll(this, 'unrender', 'render', 'appendProject');
            projects.bind('refresh', this.render);
            projects.bind('add', this.render);
            projects.bind('reset', this.render);
        },

        /**
         * unrender all content
         */
        unrender: function() {
            this.el.html("");
        },

        /**
         * append one project
         * @param object project
         */
        appendProject: function(project) {
            var view = new projectView({model: project});
            var el = view.render().el;
            this.el.append(el);
        },

        render: function () {
            this.unrender();
            projects.each(this.appendProject);
        }
    });

    return new ProjectListView;
});