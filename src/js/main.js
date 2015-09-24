AppViewModel = {

    surfSpot : [
        {
          breakName: 'Sunset Beach',
          location: 'Oahu, Hawaii',
          lat: 21.679011,
          lng: -158.041277,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Pipeline/Backdoor',
          location: 'Oahu, Hawaii',
          lat: 21.665244,
          lng: -158.053408,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Cannons',
          location: 'Kauai, Hawaii',
          lat: 22.224744,
          lng: -159.566712,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Tunnels',
          location: 'Kauai, Hawaii',
          lat: 22.224744,
          lng: -159.566712,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Anahola',
          location: 'Kauai, Hawaii',
          lat: 22.148311,
          lng: -159.300331,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Hanalei',
          location: 'Kauai, Hawaii',
          lat: 22.218315,
          lng: -159.502265,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Haleiwa',
          location: 'Oahu, Hawaii',
          lat: 21.596416,
          lng: -158.109121,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Waimea Bay',
          location: 'Oahu, Hawaii',
          lat: 21.642987,
          lng: -158.066743,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Rocky Point',
          location: 'Oahu, Hawaii',
          lat: 21.670862,
          lng: -158.049157,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Turtle Bay',
          location: 'Oahu, Hawaii',
          lat: 21.708047,
          lng: -158.002275,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Halawa Bay',
          location: 'Molokai, Hawaii',
          lat: 21.159132,
          lng: -156.735906,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Honolua Bay',
          location: 'Maui, Hawaii',
          lat: 21.024350,
          lng: -156.641890,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Jaws/Peahi',
          location: 'Maui, Hawaii',
          lat: 20.946401,
          lng: -156.297389,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'The Cove',
          location: 'Maui, Hawaii',
          lat: 20.728298,
          lng: -156.452353,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Maalaea',
          location: 'Maui, Hawaii',
          lat: 20.791860,
          lng: -156.508960,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Lahaina',
          location: 'Maui, Hawaii',
          lat: 20.869326,
          lng: -156.679025,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Lymans/Banyans',
          location: 'Big Island, Hawaii',
          lat: 19.606206,
          lng: -155.978016,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Pinetrees',
          location: 'Big Island, Hawaii',
          lat: 19.695131,
          lng: -156.045926,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Kiholo Bay',
          location: 'Big Island, Hawaii',
          lat: 19.854416,
          lng: -155.931340,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        },
        {
          breakName: 'Honolii',
          location: 'Big Island, Hawaii',
          lat: 19.756298,
          lng: -155.089960,
          picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
        }
    ]
};

AppViewModel.Query = ko.observable("");

AppViewModel.locationGrid = ko.computed(function() {
      var q = AppViewModel.Query();
      return AppViewModel.surfSpot.filter(function(e) {
            return e.breakName.toLowerCase().indexOf(q.toLowerCase()) >= 0
            }
        )
    }
)


function initMap() {

    /* Create a new array that will be filled with lat/lng info from objective
    array*/
    var breaksAndGeos = [];

    // Loop through the array
    for(var i = 0; i < AppViewModel.surfSpot.length; i++) {

        console.log('filtering info and pushing it into the breaksAndGeos array');

        // Filter out the lat/lng and break name info to the empty array
        breaksAndGeos.push([AppViewModel.surfSpot[i].breakName, AppViewModel.surfSpot[i].lat, AppViewModel.surfSpot[i].lng]);
      }


    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 20.67, lng: -157.505},
        zoom: 6
    });

    // Loop through the newly created array and filter out the lng/lat values
    for(var i = 0; i < breaksAndGeos.length; i++) {

        // Create a variable to hold each array object's coordinates
        breakLocation = ({lat: breaksAndGeos[i][1], lng: breaksAndGeos[i][2]});

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          // Set poistion using the newly created variable
          position: breakLocation,
          title: 'Hello World!'
        });
      }
}


ko.applyBindings(AppViewModel);