HttpRoute = function(httpVerb, template, controller, action) {
  this.httpVerb = httpVerb;
  this.template= template;
  this.controller = controller;
  this.action = action;
}

HttpRoute.prototype.hasAMatchFor = function(path) {
  var isAMatch = true;
  if(!this.hasMatchingPathComponents(path.split('/'), this.template.split('/'))){
    isAMatch = false;
  }
  return isAMatch;
}

HttpRoute.prototype.runAction = function(){
  this.controller[this.action]();
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
