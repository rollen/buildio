fs = require('fs');
require('./framework/router');
require('./framework/http_route');
require('./framework/factories/http_route_factory');
require('./framework/controllers/tests_controller');
require('./framework/controllers/errors_controller');

require('./framework/config/routes.js');
require('./framework/application');


frameworkViewsPath = __dirname + '/framework/views'
