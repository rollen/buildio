require('./../nervercenter.js');

require('./stubs/controller.js');
require('./stubs/request.js');
require('./stubs/response.js');

require('./stubs/factories/response_factory.js');

require('./stubs/services/sync_fs.js');
require('./fixtures/fixtures.js');

fixturesFolderPath = __dirname + '/fixtures'

require('./browser.js');
