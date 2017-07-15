module.exports.info = function (msg) {

    console.log('[Info ]', msg);
}

module.exports.route = function (route, msg) {

    console.log('\n[Route]', route,msg);
}


module.exports.$name = 'logger';