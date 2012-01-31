require("./../spec_helper");

describe('Router', function(){
  beforeEach(function(){
    controller = new Controller();
    spyOn(controller, "index" );
  });

  describe('route', function(){
    it('should execute a controller action based on exact match', function(){
      var router = new Router({'/home': controller.index}, null);
      router.route('/home');
      expect(controller.index).toHaveBeenCalled();
    });

    it('should default to the errors controller when no appropriate resource is found', function(){
      errorsController = new Controller();
      spyOn(errorsController, "index");
      var router = new Router({}, errorsController);
      router.route('/fakeroute');
      expect(errorsController.index).toHaveBeenCalled();
    });
  });
});

