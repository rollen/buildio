describe('ImageSwitchController', function(){
  var scope,
  controller;

  beforeEach(function(){
    inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      scope.default_image = 'facebook.png';
      $controller(ImageSwitchController, {$scope:scope});
    });
  });

  it('should be initialized with a default and alternate image url', function(){

  });

  it('should set its current image to default', function(){
  });

  context('ImageSwitchController image has not been clicked, defaultstate', function(){
    it('should change to the alternate image on mouseover', function(){});
    it('should transition to clickedstate on mouseclick', function() {});
  });

  context('ImageSwitchController widget has been clicked once, clickedstate', function(){
    it('should not change image on mouseover', function(){});
    it('should transition to the defaultstate on mouseclick', function(){});
  });
});
