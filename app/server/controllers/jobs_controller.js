JobsController = function(response, client, urlparams){
  var object = {};
  object.response = response;
  object.client = client;
  object.urlparams = urlparams;

  object.cache = [];

  object.on_job_created = function(){
    response.end(); 
  }

  object.on_command_fail = function(error){
    response.writeHead(400, {"Content-Type":"application/json"});
    response.end(error.error);
  }

  object.on_row_received = function(row){
    object.cache.push(row);
  }

  var create = function(params){
    console.log(params);
    client.create(params, object.on_job_created, object.on_command_fail);
  }

  object.on_job_get_success = function(){
    response.writeHead(200, {"Content-Type":"application/json"});
    response.end(JSON.stringify(object.cache));
  }

  var index = function(){
    client.get(object.on_job_get_success, object.on_command_fail, object.on_row_received);
  }

  var show = function(){
    client.get(object.on_job_get_success, object.on_command_fail, object.on_row_received, urlparams['id'] );
  }

  object.create = create;
  object.index = index;
  object.show = show;

  return object;
}
