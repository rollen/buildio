HttpRoute = function(httpVerb, pattern, controller, message) {
  this.httpVerb = httpVerb;
  this.pattern = pattern;
  this.controller = controller;
  this.message = message;
}

HttpRoute.prototype.hasAMatchFor = function(path) {
  return path === pattern;
}

HttpRoute.prototype.runAction = function(){
  this.controller[message]();
}
