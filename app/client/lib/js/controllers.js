JobsController = function($scope, job){
  $scope.jobs = [];
  $scope.preview = '';
  $scope.form = 'active';

  $scope.create = function(){
    var new_job = { "job_title":$scope.job_title,
      "job_description":$scope.job_description,
      "company_name":$scope.company_name,
      "technologies":$scope.technologies,
      "requirements":$scope.requirements,
      "company_description":$scope.company_description,
      "company_website":$scope.company_website
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

