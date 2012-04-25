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
      scope.job_title='Software Engineer'
      scope.job_description='Some random text here'
      scope.company_name='Software Comanpy'
      scope.technologies='Some random tech'
      scope.requirements='Ruby, Rails, Javascript'
      scope.company_description='Do lots of this that make you happy'
      scope.company_website='http://apple.com' 

      job = { 'job_title':'Software Engineer',
        'job_description':'Some random text here',
        'company_name':'Software Comanpy',
        'technologies':'Some random tech',
        'requirements':'Ruby, Rails, Javascript',
        'company_description':'Do lots of this that make you happy',
        'company_website':'http://apple.com' 
      }
      scope.create();
    });

    it('should attempt to persist the new job', function(){
      expect(mock.create).toHaveBeenCalledWith(job);
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
