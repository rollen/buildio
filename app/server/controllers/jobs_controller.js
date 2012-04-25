JobsController = function(response, client){
  var object = {};

  object.on_job_created = function(){
    response.end(); 
  }

  object.on_job_creation_failed = function(error){
    console.log(error);
    response.writeHead(400, {"Content-Type":"application/json"});
    response.end(error);
  }

  var create = function(params){
    console.log(params);
    client.create(params, object.on_job_created);
  }


  object.create = create;

  return object;
}
