/**
 * Route without $inject. The inject is by params.
 */
let main = function (fs, db, num, assert, config, logger) {
	
	logger.route('Route 1', 'loaded!');

	logger.info('fs in param is like require(\'fs\');' + (typeof fs.statSync === 'function'));


	db.add(num[0]);

	assert(db.getLastItem() === num[0],'Add the number in array, then the last item in list must be it.');
}

exports.main = main;