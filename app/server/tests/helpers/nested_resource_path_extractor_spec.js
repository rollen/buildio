describe('NestedResourcePathExtractor', function(){
  var urlstring,
  parials_folder_path,
  system_under_test;

  beforeEach(function(){
    urlstring = '/partials/jobs/new.html';
    parials_folder_path = '/root/to/partials'
    system_under_test = NestedResourcePathExtractor(parials_folder_path, urlstring);
  });

  describe('.parse_folderpath', function(){
    it('resolves the folderpath of the specified file', function(){
      expect(system_under_test.parse_folderpath()).toBe([parials_folder_path, 'jobs'].join('/'));
    });

    it('resolves the folderpath for a file that is not nested', function(){
      urlstring = '/partials/file.html';
      parials_folder_path = '/root/to/partials'
      system_under_test = NestedResourcePathExtractor(parials_folder_path, urlstring);
      expect(system_under_test.parse_folderpath()).toBe(parials_folder_path);
    });
  });

  describe('.root_folder_name()', function(){
    system_under_test = NestedResourcePathExtractor('/path/to/folder', null)

    expect(system_under_test.root_folder_name()).toBe('folder');
  });

  describe('.parse_filename', function(){
    it('extracts the filename from the url', function(){
      expect(system_under_test.parse_filename()).toBe('new.html');
    });

    it('resolves the filname for a file that is not nested', function(){
      urlstring = '/partials/file.html';
      parials_folder_path = '/root/to/partials'
      system_under_test = NestedResourcePathExtractor(parials_folder_path, urlstring);
      expect(system_under_test.parse_filename()).toBe('file.html');
    });
  });
});
