JobsDbClient = function(client){
  object = {}

  var querystring = "INSERT INTO Jobs (title, description) values ($1, $2)"
  object.create = function(params, callback){
    var q = client.query(querystring, [params['title'], params['description']]);
    q.on('end', callback);
  }

  return object
}
