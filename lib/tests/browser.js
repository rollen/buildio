Browser = function(){
  this.response = undefined;
}

Browser.visit = function(url){
  var response = new Response();
  var request = new Request(url);
  var filesystem = new SyncFS(require('fs'));
  var application = Nervebuilder.createApplication(request, response, filesystem);
  application.executeRequest();
  this.response = response;
}
