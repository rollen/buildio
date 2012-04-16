JobsDbClientFactory = function(){
  var pg = require('pg'); 
  var conString = process.env.DATABASE_URL || "tcp://localhost/buildio";
  var client = new pg.Client(conString);
  client.connect();

  return JobsDbClient(client);
}
