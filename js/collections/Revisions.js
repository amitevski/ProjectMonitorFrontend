/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 02.03.12
 * Time: 14:09
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore', 'models/Revision'],
function(Backbone, _, revisionModel) {
    var Revisions = Backbone.Collection.extend({
        model: revisionModel,
        //@todo: replace with real url
        url  : 'fixtures/projects/1/revisions.json'
    });

    return new Revisions;
});