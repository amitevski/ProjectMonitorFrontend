
require.config({
  paths: {
    jquery: 'lib/jquery/jquery-min',
    underscore: 'lib/underscore/underscore-min',
    backbone: 'lib/backbone/backbone-optamd3-min',
    text: 'lib/require/text'
  }

});

require(['backbone', 'router'], function(Backbone, router){
    var AppRouter = new router;
    Backbone.history.start({pushStack:true});
});
