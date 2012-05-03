require('./../spec_helper');


Given('I have a jobs record in the database', function(){
  beforeEach(function(){
    job = Factory('job').create();  
  });
});
