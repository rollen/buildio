Response = function(){ 
  this._head = "";
}

Response.prototype.writeHead = function(error_code, options){
  this._head = error_code;
}

Response.prototype.end = function(){}
