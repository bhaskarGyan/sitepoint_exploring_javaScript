'use strict';

var logger = function( appName ) {
    return function( req, res, next ) {
        console.log( appName + ' ' + req.url + ' ' + req.method );
        next();
    }
};

module.exports = logger;