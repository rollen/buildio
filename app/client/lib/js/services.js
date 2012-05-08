angular.module('resources', ['ngResource'])
  .factory('job', function($resource){
    return $resource('/api/jobs/:id', {}, {
      create: {method: 'POST'},
      get: {method: 'GET', isArray:true},
    });
  });


appify = angular.module('appify', ['resources','routes']);

parent.mocks ? parent.mocks(appify, angular.mock.e2e.$httpBackendDecorator, angular) : []

