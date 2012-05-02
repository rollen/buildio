angular.module('resources', ['ngResource'])
  .factory('job', function($resource){
    return $resource('/jobs/:id', {}, {create: {method: 'POST'}});
  });

module = angular.module('appify', ['resources']);

parent.mocks ? parent.mocks(module, angular.mock.e2e.$httpBackendDecorator, angular) : []

