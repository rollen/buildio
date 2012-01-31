require("./spec_helper");

describe('Router', function(){
  beforeEach(function(){
    controller = new Controller();
    spyOn(controller, "index" );
  });

  describe('route', function(){
    it('should execute a controller action based on exact match', function(){
      var router = new Router({'/home': controller.index});
      router.route('/home');
      expect(controller.index).toHaveBeenCalled();
    });
  });
});
