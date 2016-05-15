'use strict';
var data = {
    g : 'http://www.google.com'
};
var mapping = {
    get : function( redirectUrl, callback ) {
        if ( !data[ redirectUrl ] ) {
            return callback( new Error( 'URL not found' ) );
        }

        return callback( null, data[ redirectUrl ] );
    }
};
module.exports = mapping;