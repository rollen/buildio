require('./../../spec_helper');

describe('AssetsController', function(){
  describe('show', function(){
    beforeEach(function(){
      this.request = null;
      this.response = new Response();
      this.filesystem = new SyncFS(require('fs'));
      this.folderpath = frameworkViewsPath;
      this.filename = 'runner.html';
      this.httpFileResponseWriter = new HttpFileResponseWriter(this.response, this.filesystem, this.folderpath, this.filename);
      this.assetsController = new AssetsController(this.httpFileResponseWriter);
    });

    it('should write a static file to the response', function(){
      this.assetsController.show();
      expect(this.response._body).toBe(Fixtures.file(this.filename, 'html'));
    });
  });
});
