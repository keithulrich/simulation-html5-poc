define([
  'jquery',
  'underscore',
  'backbone'
], function ( $, _, Backbone ) {
	
	  var AppRouter = Backbone.Router.extend({
	    initialize: function(options) {
	      this.appView = options.appView;
	    },

	    register: function ( route, name, path ) {
	      var self = this;

	      this.route(route, name, function () {
	        var args = arguments;

	        require([path], function (module) {
	          var options = null;
	          var parameters = route.match(/[:\*]\w+/g);

	          // Map the route parameters to options for the View.
	          if (parameters) {
	            options = {};
	            _.each(parameters, function(name, index) {
	              options[name.substring(1)] = args[index];
	            });
	          }

	          var page = Vm.create(self.appView, name, module, options);
	          page.render();
	        });
	      });
	    }
	  });

	  var initialize = function(options){
	    var router = new AppRouter(options);

	    // Default route goes first
	    router.register('*actions', 'DashboardPage', 'views/dashboard/page');
	    router.register('optimize', 'OptimizePage', 'views/optimize/page');
	    router.register('modules', 'ModulesPage', 'views/modules/page');
	    router.register('backbone', 'BackbonePage', 'views/backbone/page');
	    router.register('backbone/:section', 'BackbonePage', 'views/backbone/page');
	    router.register('manager', 'ManagerPage', 'views/manager/page');

	    Backbone.history.start();
	  };

	  return {
	    initialize: initialize
	  };
	});