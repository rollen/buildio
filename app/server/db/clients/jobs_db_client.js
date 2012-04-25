JobsDbClient = function(client){
  object = {}

  var querystring = "INSERT INTO Jobs (title, description) values ($1, $2)"
  object.create = function(params, success, failure){
    var q = client.query(querystring, [params['title'], params['description']]);
    q.on('end', success);
    q.on('error', failure);
  }

  return object
}
