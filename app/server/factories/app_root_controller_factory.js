AppRootControllerFactory = function(){}

AppRootControllerFactory.build = function(request, response, filesystem){
  var folderpath = [AppBuilder.config['paths']['viewsFolder'],'root'].join('/');
  var filename = 'index.html'
  var hr = new HttpFileResponseWriter(response, filesystem, folderpath, filename);
  return AssetsController(hr);
}
