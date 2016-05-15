'use strict';
var http = require( 'http' );
var path = require('path');
var mapping = require( './mapping' );
var express = require( 'express' );
var logger = require( './logger' );
var app = express();


app.use( logger( 'redirector' ) );

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index',{
            mapping:'Bhaskar gyan vardhan'
        });
});

app.get('/:id', function( req, res ) {
    var url = mapping.get( req.params.id, function( err, url ) {
        if ( err ) {
            res.writeHead( 404 );
            return res.end();
        }

        res.writeHead( 302, {
            location : url
        } );
        res.end();
    } );
});

http.createServer( app ).listen( 3000 );
