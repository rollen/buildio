console.log("Starting application");

require("./../lib/build.js");

Application = function(request, response){
  this.request = request;
  this.response = response;
}

Application.prototype.create = function(){
  tests_controller = new TestsController(this.request, this.response);
  errors_controller = new ErrorsController(this.request, this.response);

  controller_map = {};
  controller_map['/tests'] = tests_controller.index;
  router = new Router(controller_map, errors_controller);
  router.route(request.url); 
}
