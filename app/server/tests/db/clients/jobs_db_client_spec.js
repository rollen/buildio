require('./../../spec_helper');

describe('JobsDbClient', function(){
  var system_under_test,
  params,
  success,
  failure,
  querystring,
  client;


  beforeEach(function(){
    params = { title:"Software Engineer", description:"Lots of Work" }
    success = jasmine.createSpy("success");
    failure = jasmine.createSpy("failure");


    client = {}
    client.query = jasmine.createSpy("query").andReturn({on:function(str, func){func()}});
    system_under_test = JobsDbClient(client);
  });

  describe('.create', function(){
    it('should delegate the creation of the object to postgres', function(){
     var querystring = "INSERT INTO Jobs (title, description) values ($1, $2)"
      spyOn(system_under_test, 'insertstring').andReturn(querystring);
      spyOn(system_under_test, 'values').andReturn(['Soft', 'Title']);

      system_under_test.create(params, success, failure);

      expect(client.query).toHaveBeenCalledWith(querystring, ['Soft','Title']);
    });

    it('should expect the callbacks to be regsitered', function(){
      system_under_test.create(params, success, failure);
      expect(success).toHaveBeenCalled();
      expect(failure).toHaveBeenCalled();
    });
  });

  describe('.values()', function(){
    it('should get values in order of the fields', function(){
      var params = { 'job_title':'Software Engineer',
        'job_description':'Job Description',
        'company_title':'Company Title',
        'requirements':'Requirements',
        'technologies':'Technologies',
        'company_description':'Company Description' };

      expect(system_under_test.values(params)).toEqual(['Software Engineer',
                                                   'Job Description',
                                                   'Company Title',
                                                   'Requirements',
                                                   'Technologies',
                                                   'Company Description']);
    });
  });

  describe('.insertstring()', function(){
    it('should convert a hash into an insert statement', function(){
      var expected_query = 'INSERT INTO Jobs (' + 
        'job_title, ' +
        'job_description, ' +
        'company_title, ' +
        'requirements, ' +
        'technologies, ' +
        'company_description) ' +
        'values (' +
        '$1, $2, $3, $4, $5, $6)';

      expect(system_under_test.insertstring('Jobs', params)).toBe(expected_query);
    });
  });
});

