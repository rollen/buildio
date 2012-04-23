PartialControllerFactory = function(){}

PartialControllerFactory.build = function(request, response, filesystem){
  var partials_folder = AppBuilder.config['paths']['partialsFolder'];
  var helper = PartialsControllerHelper(partials_folder, request.url);
  var httpResponseWriter = new HttpFileResponseWriter(response, filesystem, helper.parse_folderpath(), helper.parse_filename());
  return PartialsController(httpResponseWriter);
}

