require('./../spec_helper');

describe('JobsController', function(){
var  params,
  callback, 
  controller,
  jobs_db_client;

  beforeEach(function(){
    params = {title:"Software Engineer",description:"Do lots of things"}
    response = new Response();
    jobs_db_client = JobsDbClient(); 
    controller = JobsController(response, jobs_db_client);
  });

  describe('.show', function(){
    it('gets a single job from the database', function(){
      var urlparams = {"id":"1"}
      spyOn(jobs_db_client, 'get');
      spyOn(controller, 'on_job_get_success');
      spyOn(controller, 'on_command_fail');
      spyOn(controller, 'on_row_received');

      controller = JobsController(response, jobs_db_client, urlparams);
      controller.show();
      expect(jobs_db_client.get).toHaveBeenCalledWith(controller.on_job_get_success,
                                                     controller.on_command_fail,
                                                     controller.on_row_received,
                                                     "1");
    });
  });

  describe('.index', function(){
    it('gets all the jobs from the database', function(){
      spyOn(jobs_db_client, 'get');
      spyOn(controller, 'on_job_get_success');
      spyOn(controller, 'on_command_fail');
      spyOn(controller, 'on_row_received');
    
      controller.index();
      expect(jobs_db_client.get).toHaveBeenCalledWith(controller.on_job_get_success,
                                                     controller.on_command_fail,
                                                     controller.on_row_received);
    });
  });

  describe('.on_row_received', function(){
    it('should append the row to a datasource', function(){
      var row = jasmine.createSpy('row');
      controller.on_row_received(row);
      expect(controller.cache).toEqual([row]);
    });
  });

  describe('.create', function(){
    it('creates a new job with given params', function(){
      spyOn(jobs_db_client, 'create');
      spyOn(controller, 'on_job_created');
      spyOn(controller, 'on_command_fail');

      controller.create(params);

      expect(jobs_db_client.create).toHaveBeenCalledWith(params, 
                                                         controller.on_job_created, 
                                                         controller.on_command_fail);
    });
  });

  describe('.on_job_created', function(){
    it('closes the connection on success', function(){
      spyOn(response, 'end');

      controller.on_job_created();
      expect(response.end).toHaveBeenCalled();
    });
  });

  describe('.on_command_fail', function(){
    it('closes the reponse with the failure message', function(){
      var error = { "error":"This is an error"}
      spyOn(response, 'end');
      spyOn(response, 'writeHead');

      controller.on_command_fail(error);
      expect(response.writeHead).toHaveBeenCalledWith(400, {"Content-Type":"application/json"});
      expect(response.end).toHaveBeenCalledWith(error.error);
    });
  });
});
