/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 11:51
 * aco.mitevski@mayflower.de
 */

define(['backbone', 'underscore'], function(Backbone, _) {
    var ProjectModel = Backbone.Model.extend({

        getId: function() {
            return this.get('id');
        },

        getLastRevisionId: function() {
            return this.get('lastRevision').id;
        }
    });

    return ProjectModel;
});