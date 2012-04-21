describe('PartialsController', function(){
  describe('.show', function(){
    it('reads a file based on the specified directory', function(){
      hrw = new HttpFileResponseWriter();
      spyOn(hrw, 'writeToResponse');
      partial_controller = PartialsController(hrw);

      partial_controller.show();

      expect(hrw.writeToResponse).toHaveBeenCalled();
    });
  });
});
