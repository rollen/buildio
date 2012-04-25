JobsController = function($scope, job){
  $scope.jobs = [];
  $scope.preview = '';
  $scope.form = 'active';

  $scope.create = function(new_job){
    var new_job = { "job_title":$scope.job_title,
      "job_description":$scope.job_description,
      "company_title":$scope.company_title,
      "requirements":$scope.requirements,
      "technologies":$scope.technologies,
      "company_description":$scope.company_description
    };

    $scope.jobs.push(new_job); 
    job.create(new_job);
  }

  $scope.toggle_view = function(){
    var temp = $scope.preview;
    $scope.preview = $scope.form;
    $scope.form = temp;
  };
}

