require('./../spec_helper');

describe('HttpRoute', function(){
  beforeEach(function(){
    this.action = "index";
    this.httpVerb = 'GET';
    this.template = '/home'
  });

  describe('hasAMatchFor', function(){
    describe('performs an equality match', function() {
      it('should return success for exact match', function(){
        this.route = HttpRouteFactory.createGet(this.template, null, this.action);
        expect(this.route.hasAMatchFor('/home')).toBeTruthy();
      });

      it('should return failure for a no mactch found case', function(){
        this.route = HttpRouteFactory.createGet(this.template, null, this.action);
        expect(this.route.hasAMatchFor('/homee')).toBeFalsy();
      });

      it('should perform a template match', function(){
        this.route = new HttpRoute(this.httpVerb, '/home/:id', null, this.action);
        expect(this.route.hasAMatchFor('/home/12')).toBeTruthy();
      });

      it('should return failure for a path having more components than a template', function(){
        this.route = new HttpRoute(this.httpVerb, '/tests', null, this.action);
        expect(this.route.hasAMatchFor('/lib/angular/angular-scenario.js')).toBeTruthy();
      });
    })
  });

  describe('runAction', function() {
    describe('perform the "action" with "controller" as this', function(){
      it('should expect func to be executed if it is specified in controller', function(){
        this.controller = new Controller();
        this.route = new HttpRoute(this.httpVerb, this.template, this.controller, this.action);
        spyOn(this.controller, "index").andCallThrough();
        this.route.runAction();
        expect(this.controller.index).toHaveBeenCalled();
      });
    });
  });
});
