require('./../app')
require('./../../../node_modules/nervex/tests/application/lib/browser')
require('./../../../node_modules/nervex/tests/application/stubs/')

Given = function(string, func){
  describe('Given ' + string, func);
}

When = function(string, func){
 describe('When ' + string, func);
}

And = function(string, func){
  describe('And ' + string, func);
}
