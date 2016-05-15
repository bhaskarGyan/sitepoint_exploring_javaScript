'use strict';
var http = require( 'http' );
var mapping = require( './mapping' );
var connect = require( 'connect' );
var logger = require( './logger' );
var app = connect();

app.use( logger( 'redirector' ) );
app.use( function( req, res ) {
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

http.createServer( app ).listen( 3000 );
