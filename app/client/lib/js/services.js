angular.module('resources', ['ngResource'])
  .factory('job', function($resource){
    return $resource('/jobs/:id', {}, {create: {method: 'POST'}});
  });


appify = angular.module('appify', ['resources','routes']);

parent.mocks ? parent.mocks(appify, angular.mock.e2e.$httpBackendDecorator, angular) : []

