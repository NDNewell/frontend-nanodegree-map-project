function AppViewModel() {
    var self = this;

    self.surfSpot = [
      {
        breakName: 'Sunset Beach',
        location: 'Oahu, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Pipeline',
        location: 'Oahu, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Cannons',
        location: 'Kauai, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Tunnels',
        location: 'Kauai, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Anahola',
        location: 'Kauai, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Pipeline',
        location: 'Oahu, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Haleiwa',
        location: 'Oahu, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Waimea Bay',
        location: 'Oahu, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Rocky Point',
        location: 'Oahu, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Turtle Bay',
        location: 'Oahu, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Halawa Bay',
        location: 'Molokai, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Honolua Bay',
        location: 'Maui, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Jaws/Peahi',
        location: 'Maui, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Kalama Park',
        location: 'Maui, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Maalaea',
        location: 'Maui, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Lahaina',
        location: 'Maui, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Lymans/Banyans',
        location: 'Big Island, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Pinetrees',
        location: 'Big Island, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Kiholo Bay',
        location: 'Big Island, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      },
      {
        breakName: 'Honolii',
        location: 'Big Island, Hawaii',
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
      }
    ]

}

var map;
function initMap() {

    var myLatLng = {lat: -25.363, lng: 131.044};

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 20.67, lng: -157.505},
        zoom: 7
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: 'Hello World!'
    });

}



ko.applyBindings(new AppViewModel());