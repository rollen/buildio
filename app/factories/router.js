AppBuilder.createRouter = function(request, response, filesystem){
  AppBuilder.config = 
  {
    'paths':
    {
      'viewsFolder': [AppBuilder.root,  'views'].join('/')
    }
  }
  AppTestsControllerFactory = function(){}
  AppTestsControllerFactory.build = function(request, response, filesystem){
    var folderpath = [AppBuilder.config['paths']['viewsFolder'],'tests'].join('/');
    var filename = request.url.split('/').pop()
    var hr = new HttpFileResponseWriter(response, filesystem, folderpath, filename);
    return new AssetsController(hr);
  }
  var route = HttpRouteFactory.createGet('/tests/:filename', AppTestsControllerFactory, 'show');
  return new Router([route], request, response, filesystem);
}
