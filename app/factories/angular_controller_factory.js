AngularControllerFactory = function(){}

AngularControllerFactory.build = function(request, response, filesystem){
  var folderpath = AppBuilder.config['paths']['angularFolder'];
  var filename = request.url.split('/').pop()
  var hr = new HttpFileResponseWriter(response, filesystem, folderpath, filename);
  return new AssetsController(hr);
}