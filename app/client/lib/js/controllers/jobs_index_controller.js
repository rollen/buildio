function JobsIndexController($scope, job, $location){
  $scope.jobs = job.query();
}
