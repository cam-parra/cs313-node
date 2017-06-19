var express = require( 'express' );
var app     = express(  );

app.set( 'port', ( process.env.PORT || 5000 ) );

app.use( express.static( __dirname + '/public' ) );

// views is directory for all template files
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/', function( request, response ) {
  response.render ('pages/week08');
} );
app.get( '/mail', function( request, response ) {
  var weight = Number(request.query.weight), mtype = request.query.mailtype;
  function get_price( weight, mailtype ) {

    var letter_stamped = { "1": 0.49, "2": 0.70, "3": 0.91, "3.5": 1.12 } ;
    var letter_metered = { "1": 0.46, "2": 0.67, "3": 0.88, "3.5": 1.09 } ;
    var chunky_mail    = { "1": 0.98, "2": 1.19, "3": 1.40, "4": 1.61, "5":1.82,
    "6":2.03, "7":2.24, "8":2.45, "9":2.66, "10":2.87, "11":3.08,"12":3.29 ,"13":3.50};
    var parcels        = {"1": 2.67, "2": 2.67, "3": 2.67, "4": 2.67, "5":2.85,
    "6":3.03, "7":3.21, "8":3.39, "9":3.57, "10":3.75, "11":3.93,"12":4.11 ,"13":4.29};
    var result = {};
    if ( mailtype === "lstmp"){
      result = Object.keys(letter_stamped).filter(function (key) { return (Number(key) <= weight);});
      return letter_stamped[result[result.length - 1]];
    }else if (mailtype === "lmetd") {
      result = Object.keys(letter_metered).filter(function (key) { return (Number(key) <= weight);});
      return letter_metered[result[result.length - 1]];
    }else if (mailtype === "lrgenv") {
      result = Object.keys(chunky_mail).filter(function (key) { return (Number(key) <= weight);});
      return chunky_mail[result[result.length - 1]];
    }else if (mailtype === "para") {
      result = Object.keys(parcels).filter(function (key) { return (Number(key) <= weight);});
      return parcels[result[result.length - 1]];
    }


  }
  console.log(weight, mtype);
  var results = get_price(weight, mtype );
  console.log(results);

  response.render( 'pages/week08', { result: results.toPrecision(2)} );

});

app.listen( app.get( 'port' ), function(  ) {
  console.log( 'Node app is running on port', app.get( 'port' ) );
});
