angular.module('resources', ['ngResource'])
  .factory('job', function($resource){
    return $resource('/jobs/:id', {}, {create: {method: 'POST'}});
  });


angular.module('appify', ['resources'])
