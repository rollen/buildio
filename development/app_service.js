var BackendService = function(){
  var obj = {};
  var store = {};
  var currentBackend = '';
  var name = '';
  var app = '';
  var ang = '';

  obj.register = function(key, value){
    currentBackend = value;
    name = key; 
  }

  obj.config = function(module, dec, angular){
    app = module;
    module.config(function($provide){
      $provide.decorator('$httpBackend', dec);
    });
    currentBackend(app, angular);
    return [name];
  }

  obj.moreconfig = function(conf){
    conf(app);
  }
  return obj;
}

bs = BackendService();
mocks = bs.config;

