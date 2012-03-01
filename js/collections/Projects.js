/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 20.02.12
 * Time: 12:07
 * aco.mitevski@mayflower.de
 */

define(['backbone', 'underscore', 'models/Project'],
function(Backbone, _, projectModel) {
    var projects = Backbone.Collection.extend({
        model: projectModel,
        url: 'fixtures/projects.json', //@todo: needs to be replaced with real url
        parse: function(response) {
            return response.projects;
        }
    });

    return new projects;
});