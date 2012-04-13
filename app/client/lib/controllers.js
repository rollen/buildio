var JobsController = function($scope, job){
  $scope.jobs = [];
  $scope.create = function(new_job){
    $scope.jobs.push(new_job); 
    job.create(new_job);
  }
}

