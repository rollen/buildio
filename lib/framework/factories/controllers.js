Nervebuilder.createControllers = function(request, response, filesystem, frameworkViewsPath){
  return{ 'testsController':new TestsController(request, response, filesystem, frameworkViewsPath + '/runner.html')}
}
