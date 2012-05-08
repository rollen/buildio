angular.module('routes', [], function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {template: '/lib/partials/jobs/new.html'});
  $routeProvider.when('/home', {template: '/lib/partials/jobs/new.html'});
  $routeProvider.when('/jobs/', {template: '/lib/partials/jobs/all.html', controller: 'JobsIndexController'});
  $routeProvider.when('/jobs/new', {template: '/lib/partials/jobs/new.html', controller: 'JobsController'});

  $locationProvider.html5Mode(true);
});

