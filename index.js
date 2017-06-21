var express = require( 'express' )();
var http    = require('http').Server(app);
var pg      = require('pg');
var app     = express(  );

var server = 'postgres://nuavpcnyzyktqt:485861e8bbf2bfa55bb4d3ea91ef7a6e5cec39035fce3568bde985e03d12c07b@ec2-184-73-167-43.compute-1.amazonaws.com:5432/dbo04u53n9aac9';

app.set( 'port', ( process.env.PORT || 5000 ) );

app.use( express.static( __dirname + '/public' ) );

// views is directory for all template files
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/', function( request, response ) {
  response.render ('pages/week09' );
} );

app.listen( app.get( 'port' ), function(  ) {
  console.log( 'Node app is running on port', app.get( 'port' ) );
});

db.createCollection("people", { capped : true, autoIndexId : true, size :
   6142800, max : 10000 } )
{ "ok" : 1 }
