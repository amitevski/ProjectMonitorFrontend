/**
 * Created by JetBrains PhpStorm.
 * User: amitevski
 * Date: 02.03.12
 * Time: 14:19
 * aco.mitevski@mayflower.de
 */
define(['backbone', 'underscore', 'jquery', 'views/Revision', 'collections/Revisions'],
function(Backbone, _, $, revisionView, revisions) {
    var RevisionListView = Backbone.View.extend({

        el: $('#revisions-menu'),
        collection: revisions,

        initialize: function() {
            _.bindAll(this, 'unrender', 'render', 'appendRevision');
            this.items_element = $('#revisions');
            revisions.bind('refresh', this.render);
            revisions.bind('add', this.render);
            revisions.bind('reset', this.render);
        },

        /**
         * unrender all content
         */
        unrender: function() {
            this.items_element.html("");
            this.el.addClass('hidden');
        },

        /**
         * append one revision
         * @param object revision
         */
        appendRevision: function(revision) {
            var view = new revisionView({model: revision});
            var el = view.render().el;
            this.items_element.append(el);
        },

        render: function () {
            this.unrender();
            this.el.removeClass('hidden');
            revisions.each(this.appendRevision);
        }

    });

    return new RevisionListView;
});