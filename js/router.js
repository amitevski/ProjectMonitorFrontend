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
        'collections/Revisions',
        'models/DetailPlugin',
        'views/ProjectList',
        'views/DetailProject',
        'views/Revisions',
        'views/DetailPlugin'],
function(Backbone,
         _,
         $,
         projects,
         plugins,
         revisions,
         detailPlugin,
         projectListView,
         detailProjectview,
         revisionListView,
         detailPluginView)
{
    var AppRouter = Backbone.Router.extend({

        routes: {
           ''                          : 'home',
           'projects/:id/revisions/:id': 'loadProjectDetail',
           'qualityReports/:id'        : 'loadReportDetail',
           'projects/page/:page'       : 'loadProjectListPage',
           'projects'                  : 'loadProjectList',
           'projects/:id'              : 'loadProject'
        },

        /**
         * hook executed before every route is executed
         */
        preHook: function() {
            projectListView.unrender();
            detailProjectview.unrender();
            detailPluginView.unrender();
            revisionListView.unrender();
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
            revisions.fetch({data: {id: projectId, revision: revisionid}});
        },

        /**
         * load the html details of a quality Report
         *
         * @param int qualityReportId
         */
        loadReportDetail: function(qualityReportId) {
            this.preHook();
            //Backbone.model only fires a change event
            //clear needs to be called if we open the same plugin twice
            detailPlugin.clear({silent: true});
            detailPlugin.fetch({data: {id: qualityReportId}});
        }

    });
    return AppRouter;
});