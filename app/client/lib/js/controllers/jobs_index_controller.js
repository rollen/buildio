function JobsIndexController($scope, job){
  $scope.jobs = job.get();
}
