HttpFileResponseWriterBuilder = function(){}

HttpFileResponseWriterBuilder.build = function(){ 
  var request = new Request();
  var response = new Response();
  var filesystem = new SyncFS(require('fs'));
  var folderpath = frameworkViewsPath;
  var filename = 'runner.html';
  var httpFileResponseWriter = new HttpFileResponseWriter(response, filesystem, folderpath, filename);
  return httpFileResponseWriter;
}
