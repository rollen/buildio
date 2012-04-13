describe('Job', function(){
  describe('.create', function(){
    it('sends the request to the http endpoint /job', function(){
      var scope = {};
      scope.job = 'scope';

      module('resources');

      inject(function(job , $httpBackend){
        scope.job = job
        scope.httpBackend = $httpBackend;
      });

      scope.httpBackend.expect('POST', '/jobs', '{"title":"Software Engineer","description":"lost of work"}').respond();
      scope.job.create({title: 'Software Engineer', description: 'lost of work'});
    });
  });
});
