Nervebuilder.createControllers = function(request, response, filesystem, fixturesFolderPath){
  return{ 'testsController':new TestsController(request, response, filesystem, frameworkViewsPath + '/runner.html')}
}
