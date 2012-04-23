require('./../spec_helper');

describe('JobsController', function(){
  var response,
  params,
  controller,
  jobs_db_client;

  beforeEach(function(){
    params = {title:"Software Engineer",description:"Do lots of things"}
    response = new Response();
    jobs_db_client = JobsDbClient(); 
    controller = JobsController(response, jobs_db_client);
  });

  describe('.create', function(){
    it('creates a new job with given params', function(){
      spyOn(jobs_db_client, 'create');
      spyOn(controller, 'on_job_created');

      controller.create(params);

      expect(jobs_db_client.create).toHaveBeenCalledWith(params, controller.on_job_created);
    });
  });

  describe('.on_job_created', function(){
    it('closes the connection on success', function(){
      spyOn(response, 'end');

      controller.on_job_created();

      expect(response.end).toHaveBeenCalled();
    });
  });
});