require('./../spec_helper');

describe('HttpRoute', function(){
  beforeEach(function(){
    controller = new Controller();
    message = "index";
    httpVerb = 'GET';
    pattern = '/home'
  });

  describe('hasAMatchFor', function(){
    beforeEach(function(){
      route = new HttpRoute(httpVerb, pattern, controller, message);
    });

    describe('performs an equality match', function() {
      it('should return success for exact match', function(){
        expect(route.hasAMatchFor('/home')).toBeTruthy();
      });

      it('should return failure for a no mactch found case', function(){
        expect(route.hasAMatchFor('/homee')).toBeFalsy();
      });
    })
  });

  describe('runAction', function() {
    describe('perform the "message" with "controller" as this', function(){
      it('should expect func to be executed if it is specified in controller', function(){
        route = new HttpRoute(httpVerb, pattern, controller, message);
        spyOn(controller, "index").andCallThrough();
        route.runAction();
        expect(controller.index).toHaveBeenCalled();
      });
    });
  });
});
