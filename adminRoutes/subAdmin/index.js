module.exports.main = function (config, logger) {

    logger.route('AdminRoute.SubRoute', 'loaded!');
    logger.info('Sub adminRoute, this change the value of config.debug.');

    config.debug = true;
}