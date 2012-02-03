Fixtures = function(filesystem, htmlFolderPath){
  this.htmlFolderPath = htmlFolderPath;
  this.filesystem = filesystem;
}

Fixtures.prototype.htmlfile = function(filename){
  return this.filesystem.readFileSync(this.htmlFolderPath + filename, 'utf8');
}

Fixtures.prototype.htmlfilePath = function(filename){
  return this.htmlFolderPath + filename;
}