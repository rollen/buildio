require('./../../spec_helper');

describe('JobsDbClient', function(){
  var jobs_db_client,
  params,
  success,
  failure,
  querystring,
  client;

  describe('.create', function(){
    it('should delegate the creation of the object to postgres', function(){
      querystring = "INSERT INTO Jobs (title, description) values ($1, $2)"
      params = { title:"Software Engineer", description:"Lots of Work" }
      success = jasmine.createSpy("success");
      failure = jasmine.createSpy("failure");

      
      client = {}
      client.query = jasmine.createSpy("query").andReturn({on:function(str, func){func()}});
      jobs_db_client = JobsDbClient(client);
      jobs_db_client.create(params, success, failure);
  
      expect(client.query).toHaveBeenCalledWith(querystring, ["Software Engineer", "Lots of Work"])     
      expect(success).toHaveBeenCalled();
    });

    it('should delegate to the fail function should an error occurs', function(){

    });
  });
});
