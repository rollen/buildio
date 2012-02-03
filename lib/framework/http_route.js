HttpRoute = function(httpVerb, template, controller, action, matcher) {
  this.httpVerb = httpVerb;
  this.template= template;
  this.controller = controller;
  this.action = action;
  this.matcher = matcher;
}

HttpRoute.prototype.runAction = function(){
  this.controller[this.action]();
}

HttpRoute.prototype.hasAMatchFor = function(path) {
  var templateComponents = this.template.split('/');
  var pathComponents = path.split('/');
  return !(this.similarNumberOfSegments(pathComponents, templateComponents) &&
           !this.hasMatchingPathComponents(pathComponents, templateComponents))
}

HttpRoute.prototype.similarNumberOfSegments = function(pathComponents, templateComponents){
  return templateComponents.length === pathComponents.length;
}

HttpRoute.prototype.hasMatchingPathComponents = function(pathComponents, templateComponents){
  var isAMatch = true;
  for(var index = 0; index < pathComponents.length; index++){
    if(this.areNotMatchingComponents(pathComponents[index], templateComponents[index])){
      isAMatch = false;
    } 
  }
  return isAMatch;
}

HttpRoute.prototype.areNotMatchingComponents= function(pathComponent, templateComponent){
  return templateComponent.charAt(0) !== ":" && templateComponent!== pathComponent;
}
