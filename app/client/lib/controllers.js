function JobsController($scope ){
  $scope.jobs = [];
  $scope.create_job = function(job){
    $scope.jobs.push(job); 
  }
}

