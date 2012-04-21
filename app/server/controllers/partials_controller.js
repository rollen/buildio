PartialsController = function(httpResponseWriter){
  object = {}
  object.show = function(){
    httpResponseWriter.writeToResponse();
  }
  return object;
}
