JobsController = function(response, client){
  var object = {};

  object.on_job_created = function(){
    response.end(); 
  }

  object.on_job_creation_failed = function(error){
    response.writeHead(400, {"Content-Type":"application/json"});
    response.end(error.error);
  }

  var create = function(params){
    console.log(params);
    client.create(params, object.on_job_created, object.on_job_creation_failed);
  }

  object.create = create;

  return object;
}
