describe('JobsController', function(){
  var mock,
  scope,
  job;

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

  describe('.create()', function(){
    beforeEach(function(){
      job = { 'jobs_title':'Software Engineer',
        'company_name':'Software Comanpy',
        'job_description':'Some random text here',
        'requirements':'Ruby, Rails, Javascript',
        'company_description':'Do lots of this that make you happy',
        'company_website':'http://apple.com' }
      scope.create(job);
    });

    it('should attemp to persist the new job', function(){
      expect(mock.create).toHaveBeenCalledWith(job);
    });

    it('should not allow an incomplete job to be submitted', function(){
      jobs_title = '';
      expect(mock.create).not.toHaveBeenCalled();  
    });
  });


  describe('.preview', function(){
    it('should be initalize to false', function(){
      expect(scope.preview).toBe('');
    });
  });

  describe('.form', function(){
    it('should be initalize to active', function(){
      expect(scope.form).toBe('active');
    });
  });



  describe('.toggle_view()', function(){
    it('should toggle the preview', function(){
      scope.toggle_view();
      expect(scope.preview).toBe('active');
      expect(scope.form).toBe('');
    });
  });
});
