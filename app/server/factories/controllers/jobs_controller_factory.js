JobsControllerFactory = function(){}

JobsControllerFactory.build = function(request, response, filesystem){
  var client = JobsDbClientFactory();
  return JobsController(response, client);
}
