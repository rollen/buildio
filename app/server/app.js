require('nervex');
require('./factories/app_builder');
AppBuilder.root = __dirname;
require('./factories/router');
require('./config/app_builder');

require('./helpers/partials_controller_helper');

require('./factories/app_tests_controller_factory');
require('./factories/app_root_controller_factory');
require('./db/factories/jobs_db_client_factory');

require('./factories/controllers/partial_controller_factory');
require('./factories/controllers/jobs_controller_factory');
require('./factories/controllers/angular_controller_factory');

require('./controllers/jobs_controller');
require('./controllers/partials_controller');

require('./db/clients/jobs_db_client');


