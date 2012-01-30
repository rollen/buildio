require('./../../../lib/framework/router.js')
describe('Router', function(){
  describe('route', function(){
    it('should execute a mapped controller action', function(){
      router = new Router();
      router.route('/home');
    });
  });
});
