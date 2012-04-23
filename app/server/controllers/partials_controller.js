PartialsController = function(httpResponseWriter){
  var object = {}
  var show = function(){
    httpResponseWriter.writeToResponse();
  }

  object.show = show;
  return object;
}
