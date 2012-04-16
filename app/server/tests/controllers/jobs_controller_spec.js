describe('JobsController', function(){
  describe('.create', function(){
    it('creates a new job with given params', function(){
      params = {title:"Software Engineer",description:"Do lots of things"}
      var controller = JobsController(params);
      controller.create();
    });
  });
});
