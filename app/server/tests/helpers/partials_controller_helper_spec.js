describe('PartialControllerHelper', function(){
  var urlstring,
  parials_folder_path,
  partial_controller_helper;

  beforeEach(function(){
    urlstring = '/partials/jobs/new.html';
    parials_folder_path = '/root/to/partials'
    partial_controller_helper = PartialsControllerHelper(parials_folder_path, urlstring);
  });

  describe('.parse_folderpath', function(){
    it('resolves the folderpath of the specified file', function(){
      expect(partial_controller_helper.parse_folderpath()).toBe([parials_folder_path, 'jobs'].join('/'));
    });

    it('resolves the folderpath for a file that is not nested', function(){
      urlstring = '/partials/file.html';
      parials_folder_path = '/root/to/partials'
      partial_controller_helper = PartialsControllerHelper(parials_folder_path, urlstring);
      expect(partial_controller_helper.parse_folderpath()).toBe(parials_folder_path);
    });
  });

  describe('.parse_filename', function(){
    it('extracts the filename from the url', function(){
      expect(partial_controller_helper.parse_filename()).toBe('new.html');
    });

    it('resolves the filname for a file that is not nested', function(){
      urlstring = '/partials/file.html';
      parials_folder_path = '/root/to/partials'
      partial_controller_helper = PartialsControllerHelper(parials_folder_path, urlstring);
      expect(partial_controller_helper.parse_filename()).toBe('file.html');
    });
  });
});
