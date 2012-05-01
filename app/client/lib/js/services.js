angular.module('resources', ['ngResource'])
  .factory('job', function($resource){
    return $resource('/jobs/:id', {}, {create: {method: 'POST'}});
  });


angular.module('appify', ['resources'])

myAppDev = angular.module('appifyDev', ['appify', 'ngMockE2E']);

myAppDev.run(function($httpBackend){
  $httpBackend.whenGET(/.*/).passThrough();
});

