Given('I have some job postings', function(){
  beforeEach(function(){
    bs.register('view_jobs', function(app){
      app.run(function($httpBackend){
        var job = Factory.create('job');
        $httpBackend.whenGET(/partials/).passThrough();
        $httpBackend.whenGET('api/jobs').respond(job);
      });
    });
  });

  When('I go to the jobs page', function(){
    beforeEach(function(){
      browser().navigateTo('/jobs');
    });

    Then('I should see all the jobs on the page', function(){
      pause();
      expect(element('div#jobs > .job').count()).toBe(1);
    });
  });
});

