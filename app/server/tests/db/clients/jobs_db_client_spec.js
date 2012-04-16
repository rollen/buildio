require('./../../spec_helper');

describe('JobsDbClient', function(){
  var jobs_db_client,
  params,
  callback,
  querystring,
  client;

  describe('.create', function(){
    it('should delegate the creation of the object to postgres', function(){
      querystring = "INSERT INTO Jobs (title, description) values ($1, $2)"
      params = { title:"Software Engineer", description:"Lots of Work" }
      callback = jasmine.createSpy("callback");
      client = {}
      client.query = jasmine.createSpy("query").andReturn({on:function(str, callback){callback()}});

      jobs_db_client = JobsDbClient(client);
      jobs_db_client.create(params, callback);
  
      expect(client.query).toHaveBeenCalledWith(querystring, ["Software Engineer", "Lots of Work"])     
      expect(callback).toHaveBeenCalled();
    });
  });
});
