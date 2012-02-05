require('./../../spec_helper');

describe('AssetsController', function(){
  describe('show', function(){
    it('should write a static file to the response', function(){
      var request = null;
      var response = new Response();
      var filesystem = new SyncFS(require('fs'));
      var folderpath = frameworkViewsPath;
      var filename = 'runner.html';
      this.assetsController = new AssetsController(request, response, filesystem, folderpath, filename);
      this.assetsController.show(filename);
      expect(response._body).toBe(Fixtures.htmlfile(filename));
    });
  });
});
