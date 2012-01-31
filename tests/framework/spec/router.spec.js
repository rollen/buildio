describe('Router', function(){
  beforeEach(function(){
    Controller = function(){}
    Controller.prototype.index = function(){
      console.log("Hello World");
    }
    controller = new Controller();
  });

  describe('route', function(){
    it('should execute a controller action based on exact match', function(){
      spyOn(controller, "index" );
      var router = new Router({'/home': controller.index});
      router.route('/home');
      expect(controller.index).toHaveBeenCalled();
    });

    it('should only execute functions with given interface function(request, response)', function(){

    });

    it('should execute a controller action based on a regex', function(){

    });

    it('should execute a controller action based on first regex match', function(){

    });
  });
});
