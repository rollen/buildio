Given('I have some job postings', function(){

  var Factory = function(record_name){
    var object;
    object.create = function(number_of_records){

    }
    return object;
  }

  Factory.define('job'

  beforeEach(function(){
    bs.register('view_jobs', function(app){
      app.run(function($httpBackend){
        var jobs = Factory('job').create(1);
        $httpBackend.whenGET(/partials/).passThrough();
        $httpBackend.whenGET('jobs.json').respond();
      });
    });
  });

  When('I go to the jobs page', function(){
    beforeEach(function(){
      browser().navigateTo('/index');
    });

    Then('I should see all the jobs on the page', function(){
    });
  });
});

