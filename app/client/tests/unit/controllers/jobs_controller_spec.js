describe('JobsController', function(){
  var mock,
  scope,
  job;

  beforeEach(function(){
    mock = { create: jasmine.createSpy('create'),
      get: jasmine.createSpy('get').andReturn([])}

      module(function($provide){
        $provide.value('job', mock);
      });

      inject(function($rootScope, $controller, job) {
        scope = $rootScope.$new();
        $controller(JobsController, {$scope: scope, job: job});
      });
  });

  describe('.current_message_template', function(){
    it('should initialize the message template to empty', function(){
      expect(scope.current_message_template).toBe('');
    });
  });

  describe('.form_post_success()', function(){
    it('should change the state of the current_message_template to be the success message', function(){
      scope.form_post_success();
      expect(scope.current_message_template).toBe('/lib/partials/jobs/status_messages/post_success.html');
    });
  });

  describe('.form_post_failure()', function(){
    it('should change the state of the current_message_template to be the failure message', function(){
      scope.form_post_failure();
      expect(scope.current_message_template).toBe('/lib/partials/jobs/status_messages/post_failure.html');
    });
  });

  describe('.close_message()', function(){
    beforeEach(function(){
      scope.form_post_success();
    });

    it('should change the state of .current_message_template to empty', function(){
      scope.close_message();
      expect(scope.current_message_template).toBe('');
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

      spyOn(scope, 'form_post_success');
      spyOn(scope, 'form_post_failure');

      scope.create();
    });

    it('should attempt to persist the new job', function(){
      expect(mock.create).toHaveBeenCalledWith(job, scope.form_post_success, scope.form_post_failure);
    });
  });

  describe('.current_message', function(){
    it('should be initalized to invisible', function(){

    });
  });

  describe('.current_template', function(){
    it('should be initialized to the form', function(){
      expect(scope.current_template).toBe('/lib/partials/jobs/form.html');
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

  describe('.switch_view()', function(){
    it('should switch view to the named view', function(){
      scope.switch_view('preview');
      expect(scope.current_template).toBe('/lib/partials/jobs/preview.html');
    });

    it('should only set the tabswitch of a single view', function(){
      scope.switch_view('preview');
      expect(scope.tab_switch['preview']).toEqual('active');
    });
  });
});

