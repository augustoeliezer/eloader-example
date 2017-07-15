exports.main = function (logger, config) {

    logger.route('AdminRoute.Main', 'loaded!');

   logger.info('Main dir in adminRoutes. config.debug='+ config.debug);
};