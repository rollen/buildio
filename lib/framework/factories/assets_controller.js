AssetsControllerFactory = function(){}

AssetsControllerFactory.build = function(request, response, filesystem){
  var assetsFolderView = [Nervebuilder.config['paths']['viewsFolder'], 'assets' ].join('/');
  var filename = request.url.split('/').pop();

  var httpFileResponseWriter = new HttpFileResponseWriter(response, filesystem, assetsFolderView,filename); 
  return new AssetsController(httpFileResponseWriter);  
}
