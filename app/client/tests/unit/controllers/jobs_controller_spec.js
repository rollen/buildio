describe('JobsController', function(){
  var scope;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    var ctrl = $controller(JobsController, {$scope: scope});
  }));

  describe('.create_job', function(){
    it('add a job to the list of jobs', function(){
      var job = [{title: 'Software Engineer', description: 'Do it all'}];
      scope.create_job(job);
      expect(scope.jobs.length).toBe(1);
    });
  });
});
