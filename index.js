var eloader = null;
let numbers = [1,2];

let config = {
	debug : false
};

//Version 1.0.1
console.log('Loading version 1.0.1. [OLD]');
const eloader_1_0 =	require('eloader');
eloader_1_0
	.add('db', require('./services/db.js'))
	.add('logger', require('./services/logger.js'))
	.add('config', config) 
	.add('num', numbers)
	.add('num', [4,5])
	.run(__dirname + '\\adminRoutes\\', true)
	.run(__dirname + '\\routes\\');

config.debug = false;

//Version 1.1.1
console.log('\n################################################################');
console.log('\nLoading version 1.1.1. [NEW]');
const eloader_1_1 = require('../eloader');
eloader_1_1
	.addServices('.\\services') //load all modules in this path
	.addObject('num', numbers)
	.add('num', [4,5])
	.addObject('config', config)
	.addRoutes('routes')
	.run('adminRoutes', true); //The last add will be loaded first.