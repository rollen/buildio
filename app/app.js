console.log("Starting application");

require("./controllers/tests_controller");
require("./controllers/errors_controller");
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
  controller_map['/null'] = errors_controller.index;
  router = new Router(controller_map);
  router.route(request.url); 
}
