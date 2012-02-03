require('./../spec_helper');

describe('HttpRoute', function(){
  beforeEach(function(){
    action = "index";
    httpVerb = 'GET';
    pattern = '/home'
  });

  describe('hasAMatchFor', function(){
    describe('performs an equality match', function() {
      it('should return success for exact match', function(){
        route = HttpRouteFactory.createGet(pattern, null, action);
        expect(route.hasAMatchFor('/home')).toBeTruthy();
      });

      it('should return failure for a no mactch found case', function(){
        route = HttpRouteFactory.createGet(pattern, null, action);
        expect(route.hasAMatchFor('/homee')).toBeFalsy();
      });

      it('should perform a template match', function(){
        route = new HttpRoute(httpVerb, '/home/:id', null, action);
        expect(route.hasAMatchFor('/home/12')).toBeTruthy();
      });
    })
  });

  describe('runAction', function() {
    describe('perform the "action" with "controller" as this', function(){
      it('should expect func to be executed if it is specified in controller', function(){
        controller = new Controller();
        route = new HttpRoute(httpVerb, pattern, controller, action);
        spyOn(controller, "index").andCallThrough();
        route.runAction();
        expect(controller.index).toHaveBeenCalled();
      });
    });
  });
});
