NestedResourcePathExtractor = function(partials_folder, urlstring){
  var object = {}

  var root_folder_name = function(){
    return partials_folder.match(/.+\/(.+)/)[1];
  }

  var parse_folderpath = function(){
    var regex = new RegExp(root_folder_name() + '\/(.*)\/.+$');
    var match =  urlstring.match(regex);
    var subfolder_directory = match ? match[1] :  '';
    if(match){
      return [partials_folder, subfolder_directory].join('/');
    }else{
      return partials_folder;
    }
  }

  var parse_filename = function(){
    var regex = new RegExp(root_folder_name() + '.*\/(.+)$');
    var match = urlstring.match(regex)
    if(match){
      return match[1];
    }else{
      throw 'NoMatchFound'
    }
  }

  object.parse_filename = parse_filename;
  object.parse_folderpath = parse_folderpath;
  object.root_folder_name = root_folder_name;

  return object;
}
