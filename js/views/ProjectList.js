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
        'views/Project',
        'text!templates/ProjectPager.html',
        'collections/Projects'],
function(Backbone, _, $, projectView, pagerTemplate, projects) {
    var ProjectListView = Backbone.View.extend({
        el: $('#projectListTable'),

        collection: null,

        initialize: function() {
            _.bindAll(this, 'unrender', 'render', 'appendProject');
            this.items_element = $('#projectList');
            projects.bind('refresh', this.render);
            projects.bind('add', this.render);
            projects.bind('reset', this.render);
        },

        /**
         * unrender all content
         */
        unrender: function() {
            this.items_element.html("");
            $('#pager').html("");
            this.el.hide();
        },

        /**
         * append one project
         * @param object project
         */
        appendProject: function(project) {
            var view = new projectView({model: project});
            var el = view.render().el;
            this.items_element.append(el);
        },

        render: function () {
            this.unrender();
            this.el.show();
            projects.each(this.appendProject);
            this.renderPager();
        },

        /**
         * render the next/prev links
         */
        renderPager: function() {
            var html  = _.template(pagerTemplate);
            $('#pager').html(html(projects));
        }
    });

    return new ProjectListView;
});