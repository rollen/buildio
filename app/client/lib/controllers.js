JobsController = function($scope, job, $log){
  $log.log('hello world');
  $scope.jobs = [];
  $scope.preview = '';
  $scope.form = 'active';

  $scope.create = function(new_job){
    $scope.jobs.push(new_job); 
    job.create(new_job);
  }

  $scope.toggle_view = function(){
    var temp = $scope.preview;
    $scope.preview = $scope.form;
    $scope.form = temp;
  };
}

Ctrl = function($scope){
  $scope.names = ['rollen', 'gomess'];
}


