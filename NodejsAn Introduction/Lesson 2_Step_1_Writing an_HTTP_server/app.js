'use strict';
var http = require( 'http' );
var mapping = {
    g : 'http://www.google.com'
};

var server = http.createServer( function( req, res ) {
    var redirectUrl = req.url.substring( 1 );

    if ( !mapping[ redirectUrl ] ) {
        res.writeHead( '404' );
        return res.end();
    }
    res.writeHead( 302, {
        location : mapping[ redirectUrl ]
    } );
    res.end();
} );

server.listen( 3000 );