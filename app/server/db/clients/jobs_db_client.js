JobsDbClient = function(client){
  var object = {}

  var fields = ['job_title',
    'job_description',
    'company_name',
    'requirements',
    'company_website',
    'technologies',
    'company_description'
  ]

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
      '($1, $2, $3, $4, $5, $6, $7)';
  }

  object.selectstring = function(table_name){
    return 'SELECT * FROM ' + table_name;
  }

  object.create = function(params, success, failure){
    var q = client.query(object.insertstring('Jobs'), object.values(params));
    q.on('end', success);
    q.on('error', failure);
  }


  object.makegetquery = function(id){
    var getquery = object.selectstring('Jobs');
    if(id){
      getquery += (' where id=' + id);  
    }
    return getquery; 
  }

  object.get = function(success, failure, row, id){
    var q = client.query(object.makegetquery(id));
    q.on('end', success);
    q.on('error', failure);
    q.on('row', row);
  }

  return object;
}
