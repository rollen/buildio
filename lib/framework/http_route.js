HttpRoute = function(httpVerb, pattern, controller, action) {
  this.httpVerb = httpVerb;
  this.pattern = pattern;
  this.controller = controller;
  this.action = action;
}

HttpRoute.prototype.hasAMatchFor = function(path) {
  return path === pattern;
}

HttpRoute.prototype.runAction = function(){
  this.controller[action]();
}
