PartialsControllerHelper = function(partials_folder, urlstring){
  object = {}
  object.parse_folderpath = function(){
    var match =  urlstring.match(/partials\/(.*)\/.+$/);
    var subfolder_directory = match ? match[1] :  '';
    if(match){
      return [partials_folder, subfolder_directory].join('/');
    }else{
      return partials_folder;
    }
  }

  object.parse_filename = function(){
    return urlstring.match(/partials.*\/(.+)$/)[1]
  }

  return object;
}
