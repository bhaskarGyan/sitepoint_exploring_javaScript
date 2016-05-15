'use strict';
var http = require( 'http' );
var mapping = require( './mapping' );

var server = http.createServer( function( req, res ) {
    var url = mapping.get( req.url, function( err, url ) {
        if ( err ) {
            res.writeHead( 404 );
            return res.end();
        }

        res.writeHead( 302, {
            location : url
        } );
        res.end();
    } );
} );

server.listen( 3000 );