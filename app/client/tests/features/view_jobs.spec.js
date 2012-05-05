Given('I have some job postings', function(){
  beforeEach(function(){
    bs.register('view_jobs', function(app){
      app.run(function($httpBackend){
        var job = Factory.create('job');
        $httpBackend.whenGET(/partials/).passThrough();
        $httpBackend.whenGET('jobs.json').respond(job);
      });
    });
  });

  When('I go to the jobs page', function(){
    beforeEach(function(){
      browser().navigateTo('/jobs');
    });

    Then('I should see all the jobs on the page', function(){
      expect(element('div#jobs > .job').count()).toBe(1);
    });
  });
});

