DbFactory = function(){
  var db_factory = {};
  
  db_factory.create_jobs_db_client = function(){
    return JobsDbClient();
  }

  return db_factory;
}
