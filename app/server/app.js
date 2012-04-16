require('nervex');
require('./factories/app_builder');
AppBuilder.root = __dirname;
require('./factories/router');
require('./config/app_builder');

require('./factories/app_tests_controller_factory');
require('./factories/app_root_controller_factory');
require('./factories/controllers/angular_controller_factory');

require('./controllers/jobs_controller');

