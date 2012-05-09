function JobsShowController($scope, job){
  $scope.jobs = job.query({id:2}, function(){
    $scope.job_title = $scope.jobs[0].job_title;
    $scope.job_description = $scope.jobs[0].job_description;
    $scope.company_name = $scope.jobs[0].company_name;
    $scope.technologies = $scope.jobs[0].technologies;
    $scope.requirements = $scope.jobs[0].requirements;
    $scope.company_description = $scope.jobs[0].company_description;
    $scope.company_website = $scope.jobs[0].company_website;

  });
}
