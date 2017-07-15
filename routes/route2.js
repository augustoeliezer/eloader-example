/**
 * Route with $inject.
 */
let main = function (db, fromInject, test, config, logger) {

	logger.route('Route 2', 'loaded!');

	db.add(fromInject[1]);

	test(db.getLastItem() == fromInject[1], 'After add item last item must be equal this.');

	logger.info('If adminRoute run first config will be true: ' + config.debug);

	logger.info('Old version allow overwrite object: ' + fromInject);
}

exports.main = main;
exports.$inject = ['db', 'num', 'assert','config','logger'];