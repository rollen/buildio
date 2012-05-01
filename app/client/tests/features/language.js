var Then = it;
var Given = function(string, func){
  describe('Given ' + string, func);
}

var When = function(string, func){
  describe('When ' + string, func);
}

var And = function(string, func){
  describe('And ' + string, func);
}


