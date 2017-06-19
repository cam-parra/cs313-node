var longi, lat;

function getLocation() {

  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          longi = position.coords.latitude;
          lat = position.coords.longitude;
        });
    } else {

    }
}

getLocation();

// <-----------jquery stuff----------> //
$(document).ready(function() {
  $('#submit').click(function(event) {
    $.post(
      "address-add.php",
      {
        latitude: lat,
        longitude: longi
      }

    )
  });
});
