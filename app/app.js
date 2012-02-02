console.log("Starting application");

require("./../lib/build.js");

Application = function(request, response){
  this.request = request;
  this.response = response;
}

Application.prototype.create = function(){
}
