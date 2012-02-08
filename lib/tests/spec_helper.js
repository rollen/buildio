require('./../nervecenter');

require('./stubs/controller');
require('./stubs/request');
require('./stubs/response');

require('./stubs/factories/response_factory');
require('./stubs/factories/http_file_responder_writer_builder');
require('./stubs/controller_factory');

require('./stubs/services/sync_fs');
require('./fixtures/fixtures');

fixturesFolderPath = __dirname + '/fixtures'

require('./browser.js');
