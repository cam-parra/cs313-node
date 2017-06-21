var express = require( 'express' );
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

function display( req, res) {

  var id = req.query.userid;


  get_person_db( id, function (err, result) {
    if (err || result == null || result.length != 1) {
			res.status(500).json({success: false, data: err});
		} else {
			var person = result[0];
			res.status(200).json(result[0]);
		}

  } );



}

function get_person_db( id, callback ) {


  console.log("Getting person from DB with id: " + id);

  var client = new pg.Client( server );

  client.connect ( function ( err ) {


    if ( err ) {
      console.log(err);
      callback(err, null);
    }

    var sql = "SELECT id, first, last, birthdate FROM persons WHERE id = $1::int";
    var params = [id];

		var query = client.query(sql, params, function(err, result) {

			client.end(function(err) {
				if (err) throw err;
			});
      //response.render( 'pages/week09', { result: res.rows } );

			//console.log(JSON.stringify(res.rows));

			callback(null, result.rows);
		});
  });
}



app.get( '/stuff', function( request, response ) {



  display(request, response);



});

app.listen( app.get( 'port' ), function(  ) {
  console.log( 'Node app is running on port', app.get( 'port' ) );
});
