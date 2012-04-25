JobsDbClient = function(client){
  var object = {}

  var fields = ['job_title',
              'job_description',
              'company_name',
              'requirements',
              'technologies',
              'company_description']

  object.values = function(params){
    var temp = [];
    for(var key in params){
      temp.push(params[key]);
    }
    return temp;
  }

  object.insertstring= function(table_name){
    return 'INSERT INTO ' + 
            table_name + 
            ' (' + 
            fields.join(', ') + 
            ') ' + 
            'values ' +
            '($1, $2, $3, $4, $5, $6)';
  }

  object.create = function(params, success, failure){
    var q = client.query(object.insertstring('Jobs'), object.values(params));
    q.on('end', success);
    q.on('error', failure);
  }

  return object
}
