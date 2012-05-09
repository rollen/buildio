angular.module('routes', [], function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {template: '/lib/partials/jobs/new.html'});
  $routeProvider.when('/home', {template: '/lib/partials/jobs/new.html'});
  $routeProvider.when('/jobs/', {template: '/lib/partials/jobs/all.html', controller: 'JobsIndexController'});
  $routeProvider.when('/jobs/new', {template: '/lib/partials/jobs/new.html', controller: 'JobsController'});
  $routeProvider.when('/jobs/:id', {template: '/lib/partials/jobs/show.html', controller: 'JobsShowController'});

  $locationProvider.html5Mode(true);
});

