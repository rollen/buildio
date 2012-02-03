require('./../spec_helper');

describe( Router, function(){
  beforeEach(function(){
    this.controller = new Controller();
    this.httpVerb = 'GET';
    this.pathPattern = '/home';
    this.message = "index";
    this.route = new HttpRoute(this.httpVerb, this.pathPattern, this.controller, this.message);
    this.router = new Router([this.route]);
  });

  describe('hasRouteFor', function(){
    it('should return true if the router can respond to the route', function(){
      expect(this.router.hasRouteFor('/home')).toBeTruthy();
    });

    it('should return false if the router cannot respond to the route', function(){
      expect(this.router.hasRouteFor('/fakepath')).not.toBeTruthy();
    });
  });

  describe('route', function(){
    beforeEach(function(){
      spyOn(this.controller, "index" );
    });

    it('should execute a controller action based on exact match', function(){
      this.router.route('/home');
      expect(this.controller.index).toHaveBeenCalled();
    });
  });

  describe('findRoutefor', function(){
    it('should return the found route', function(){
      expect(this.router.findRouteFor('/home')).toBeTruthy();
    });
  });
});

