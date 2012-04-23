PartialsControllerHelper = function(partials_folder, urlstring){
  var object = {}

  var parse_folderpath = function(){
    var match =  urlstring.match(/partials\/(.*)\/.+$/);
    var subfolder_directory = match ? match[1] :  '';
    if(match){
      return [partials_folder, subfolder_directory].join('/');
    }else{
      return partials_folder;
    }
  }

  var parse_filename = function(){
    return urlstring.match(/partials.*\/(.+)$/)[1]
  }

  object.parse_filename = parse_filename;
  object.parse_folderpath = parse_folderpath;

  return object;
}
