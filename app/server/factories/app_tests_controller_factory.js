AppTestsControllerFactory = function(){}

AppTestsControllerFactory.build = function(request, response, filesystem){
  var folderpath = [AppBuilder.config['paths']['viewsFolder'],'tests'].join('/');
  var filename = request.url.split('/').pop()
  var hr = new HttpFileResponseWriter(response, filesystem, folderpath, filename);
  return AssetsController(hr);
}
