function ImageSwitchController($scope, $attrs){
  console.log($attrs);
  $scope.resetcss = function(offsetx, offsety){
    $scope.css={
      "background": "transparent " + 
        "url(/lib/assets/sprites/social_buttons.png) " + 
        offsety + " " +offsetx + " " +
        "no-repeat",
      "height":"32px",
      "width":"32px"
    };
  }

  $scope.onmouseover = function(){
    $scope.image_type='colored';
    $scope.resetcss("0px", "-192px");
  }

  $scope.onmouseleave = function(){
    $scope.image_type='monochrome';
    $scope.resetcss("-32px", "-192px");
  }

  $scope.image_type = 'monochrome';
  $scope.resetcss("-32px", "-192px");
}
