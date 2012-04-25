var exec = require('child_process').exec,
pg = require('pg'),
connectionstring,
sql;


sql = 'create table jobs ( ' +
  'id serial,' +
  'job_title text,' +
  'company_name text,' +
  'job_description text,' + 
  'requirements text,' + 
  'technologies text,' + 
  'company_website text,' + 
  'company_description text );';

connectionstring = 'tcp://localhost/buildio';
pg.connect(connectionstring, function(err, client){
  if(err){
    console.log(err);
  }else{
    console.log(sql);
    client.query(sql, function(err, result){
      if(err){
        console.log(err);   
      } else {
        console.log('created table');
      }
    });
  }
});




