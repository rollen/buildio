JobsController = function($scope, job){
  $scope.message_templates = {'success':'/lib/partials/jobs/status_messages/post_success.html', 'failure':'/lib/partials/jobs/status_messages/post_failure.html'};
  $scope.current_message_template = '';
  $scope.partial = 'form';

  $scope.close_message = function(){
    $scope.current_message_template = '';
  }
  
  $scope.create = function(){
    var new_job = { "job_title":$scope.job_title,
      "job_description":$scope.job_description,
      "company_name":$scope.company_name,
      "technologies":$scope.technologies,
      "requirements":$scope.requirements,
      "company_description":$scope.company_description,
      "company_website":$scope.company_website
    };

    job.create(new_job, $scope.form_post_success, $scope.form_post_failure);
  }

  $scope.form_post_success = function(){
    $scope.current_message_template = $scope.message_templates['success'];
  }

  $scope.form_post_failure = function(){
    $scope.current_message_template = $scope.message_templates['failure'];
  }


  $scope.tab_switch= {'form':'active'};
  $scope.switch_view = function(name){
    $scope.partial = name;
    $scope.tab_switch = {};
    $scope.tab_switch[name] = 'active';
  }
}

