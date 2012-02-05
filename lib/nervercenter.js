fs = require('fs');
require('./framework/router');
require('./framework/http_route');
require('./framework/utilities/http_response_writer');
require('./framework/controllers/tests_controller');
require('./framework/controllers/errors_controller');
require('./framework/controllers/assets_controller');

require('./framework/factories/nervebuilder.js');
require('./framework/factories/controllers.js');
require('./framework/factories/http_route_factory');
require('./framework/factories/router.js');
require('./framework/factories/application.js');

require('./framework/application');

frameworkViewsPath = __dirname + '/framework/views'

