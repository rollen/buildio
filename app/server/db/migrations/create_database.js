var exec = require('child_process').exec,
child;

console.log('Creating database buildio');
child = exec('createdb buildio', function(error, stdout, stderr){
  if(error){
    console.log(stderr);
  } else {
    console.log("....created database");
  }
});
