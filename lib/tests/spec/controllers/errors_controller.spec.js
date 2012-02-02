require('./../../spec_helper');

describe('ErrorsController', function(){
  describe('index', function(){
    it("should write 404 to the response's head", function(){
      request = null;
      response = new Response();
      spyOn(response, "end");
      errorsController = new ErrorsController(request, response);
      errorsController.index();
      expect(response._head).toMatch('404');
      expect(response.end).toHaveBeenCalled();
    });
  });
});
