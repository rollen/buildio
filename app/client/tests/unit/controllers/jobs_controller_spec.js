describe('JobsController', function(){
  var mock, scope;

  beforeEach(function(){
    mock = { create: jasmine.createSpy('job') }
    module(function($provide){
      $provide.value('job', mock);
    });

    inject(function($rootScope, $controller, job) {
      scope = $rootScope.$new();
      $controller(JobsController, {$scope: scope, job: job});
    });
  });

  describe('.create', function(){
    beforeEach(function(){
      this.job = [{title: 'Software Engineer', description: 'Do it all'}];
      scope.create(this.job);
    });

    it('should add a job to the list of jobs', function(){
      expect(scope.jobs.length).toBe(1);
    });

    it('should attemp to persist the new job', function(){
      expect(mock.create).toHaveBeenCalledWith(this.job);
    });
  });
});
