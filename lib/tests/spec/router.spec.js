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
      expect(this.router.hasRouteFor('/awesomepage')).not.toBeTruthy();
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

    it('should redirect redirect request if not possible to route', function(){
      self = this;
      this.path = '/awesomepage';
      this.lambda = function(){ self.router.route(self.path) }
      expect(this.lambda).toThrow('No valid route to ' + this.path);
    });
  });
});

