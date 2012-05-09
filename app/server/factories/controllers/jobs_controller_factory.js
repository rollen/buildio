JobsControllerFactory = function(){}

JobsControllerFactory.build = function(request, response, filesystem, route_template){
  var client = JobsDbClientFactory();
  var urlparams = HttpUrlParamsExtractor(route_template).extract(request.url);

  return JobsController(response, client, urlparams);
}
