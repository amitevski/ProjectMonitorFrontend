/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 14:03
 * aco.mitevski@mayflower.de
 */

define(['backbone',
        'underscore',
        'jquery',
        'collections/Projects',
        'collections/Plugins',
        'views/ProjectList',
        'views/DetailProject'],
function(Backbone, _, $, projects, plugins, projectListView, detailProjectview) {
    var AppRouter = Backbone.Router.extend({

        routes: {
                                   '': 'home',
         'projects/:id/revisions/:id': 'loadProjectDetail',
                'projects/page/:page': 'loadProjectListPage',
                           'projects': 'loadProjectList',
                       'projects/:id': 'loadProject'
        },

        /**
         * hook executed before every route is executed
         */
        preHook: function() {
            projectListView.unrender();
            detailProjectview.unrender();
        },

        /**
         * route for default URL
         */
        home: function() {
            this.preHook();
            //redirect to first page of projectList as default
            window.location.hash = 'projects/page/1';
        },

        loadProjectList: function() {
            this.preHook();
            //we only need to fetch the projects
            //in projectListView the bind event on reset
            //will trigger a render
            projects.fetch();
        },

        /**
         * load the project list by page
         */
        loadProjectListPage: function(page) {
            this.preHook();
            //we only need to fetch the projects
            //in projectListView the bind event on reset
            //will trigger a render
            projects.fetch({data: {page: page }});
        },

        /**
         * load a specified project
         * @param int projectId
         */
        loadProject: function(projectId) {
            this.preHook();
        },

        /**
         * load project details for specified project and revision
         *
         * @param int projectId
         * @param int revisionid
         */
        loadProjectDetail: function(projectId, revisionid) {
            this.preHook();
            plugins.fetch({data: {id: projectId, revision: revisionid}});
        }
    });
    return AppRouter;
});