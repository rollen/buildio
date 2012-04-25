AngularControllerFactory = function(){}

AngularControllerFactory.build = function(request, response, filesystem){
  var lib_folder = AppBuilder.config['paths']['libFolder'];
  var helper = PartialsControllerHelper(lib_folder, request.url);
  var hr = new HttpFileResponseWriter(response, filesystem, helper.parse_folderpath(), helper.parse_filename());
  return AssetsController(hr);
}
