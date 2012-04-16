JobsController = function(response, client){
  jobs_controller = {};

  jobs_controller.create = function(params){
    console.log(params);
    client.create(params, jobs_controller.on_job_created);
  }

  jobs_controller.on_job_created = function(){
    response.end(); 
  }
  return jobs_controller;
}
