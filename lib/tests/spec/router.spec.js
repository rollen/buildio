require('./../spec_helper');

describe( Router, function(){
  beforeEach(function(){
    controller = new Controller();
    httpVerb = 'GET';
    pathPattern = '/home';
    message = "index";
    route = new HttpRoute(httpVerb, pathPattern, controller, message);
    router = new Router([route]);
  });

  describe('hasRouteFor', function(){
    it('should return true if the router can respond to the route', function(){
      expect(router.hasRouteFor('/home')).toBeTruthy();
    });

    it('should return false if the router cannot respond to the route', function(){
      expect(router.hasRouteFor('/fakepath')).not.toBeTruthy();
    });
  });

  describe('route', function(){
    beforeEach(function(){
      spyOn(controller, "index" );
    });

    it('should execute a controller action based on exact match', function(){
      router.route('/home');
      expect(controller.index).toHaveBeenCalled();
    });
  });

  describe('findRoutefor', function(){
    it('should return the found route', function(){
      expect(router.findRouteFor('/home')).toBeTruthy();
    });
  });
});

