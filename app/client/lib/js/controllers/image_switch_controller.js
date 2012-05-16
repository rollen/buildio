function ImageSwitchController($scope){
  $scope.resetcss = function(){
    $scope.css={
      "background": "transparent " + 
        "url(/lib/assets/icons/"+ $scope.image_type +"/32/circle/twitter.png) " +
        "-16px " +
        "no-repeat",
      "height":"32px",
      "width":"32px"
    };
  }
  $scope.onmouseover = function(){
    $scope.image_type='colored';
    $scope.resetcss();
  }

  $scope.onmouseleave = function(){
    $scope.image_type='monochrome';
    $scope.resetcss();
  }

  $scope.image_type = 'monochrome';
  $scope.resetcss();
}
