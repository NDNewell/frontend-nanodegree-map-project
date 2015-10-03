

var locationData = [
    {
      breakName: 'Sunset Beach',
      location: 'Oahu, Hawaii',
      lat: 21.679011,
      lng: -158.041277,
      spotID: 657,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Pipeline/Backdoor',
      location: 'Oahu, Hawaii',
      lat: 21.665244,
      lng: -158.053408,
      spotID: 616,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Cannons',
      location: 'Kauai, Hawaii',
      lat: 22.224744,
      lng: -159.566712,
      spotID: 'none',
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Tunnels',
      location: 'Kauai, Hawaii',
      lat: 22.224744,
      lng: -159.566712,
      spotID: 'none',
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Anahola',
      location: 'Kauai, Hawaii',
      lat: 22.148311,
      lng: -159.300331,
      spotID: 'none',
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Hanalei',
      location: 'Kauai, Hawaii',
      lat: 22.218315,
      lng: -159.502265,
      spotID: 3051,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: "Hale'iwa",
      location: 'Oahu, Hawaii',
      lat: 21.596416,
      lng: -158.109121,
      spotID: 660,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Waimea Bay',
      location: 'Oahu, Hawaii',
      lat: 21.642987,
      lng: -158.066743,
      spotID: 549,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Rocky Point',
      location: 'Oahu, Hawaii',
      lat: 21.670862,
      lng: -158.049157,
      spotID: 658,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Turtle Bay',
      location: 'Oahu, Hawaii',
      lat: 21.708047,
      lng: -158.002275,
      spotID: 'none',
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Halawa Bay',
      location: 'Molokai, Hawaii',
      lat: 21.159132,
      lng: -156.735906,
      spotID: 'none',
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Honolua Bay',
      location: 'Maui, Hawaii',
      lat: 21.024350,
      lng: -156.641890,
      spotID: 697,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Jaws/Peahi',
      location: 'Maui, Hawaii',
      lat: 20.946401,
      lng: -156.297389,
      spotID: 617,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'The Cove',
      location: 'Maui, Hawaii',
      lat: 20.728298,
      lng: -156.452353,
      spotID: 'none',
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: "Ma'alaea",
      location: 'Maui, Hawaii',
      lat: 20.791860,
      lng: -156.508960,
      spotID: 618,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Lahaina',
      location: 'Maui, Hawaii',
      lat: 20.869326,
      lng: -156.679025,
      spotID: 4287,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Lymans/Banyans',
      location: 'Big Island, Hawaii',
      lat: 19.606206,
      lng: -155.978016,
      spotID: 2784,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Pine Trees',
      location: 'Big Island, Hawaii',
      lat: 19.695131,
      lng: -156.045926,
      spotID: 3958,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Kiholo Bay',
      location: 'Big Island, Hawaii',
      lat: 19.854416,
      lng: -155.931340,
      spotID: 'none',
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: "Honoli'i",
      location: 'Big Island, Hawaii',
      lat: 19.756298,
      lng: -155.089960,
      spotID: 3815,
      picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }
];


function AppViewModel () {

    this.self = this;

    /* This array holds the location objects from model that have been created
    from the beachLocation constructor*/
    self.LocationArray = [];

    /* Iterate through the location data from the model and push each object to
    the location array above*/
    locationData.forEach(function(obj) {
    self.LocationArray.push(new beachLocation(obj));
    });

    /* Using a constructor, location objects are built here via the forEach
    method above*/
    function beachLocation(obj) {
        this.breakName = obj.breakName;
        this.location = obj.location;
        this.lat = obj.lat;
        this.lng = obj.lng;
        this.spotID = obj.spotID;
        this.picture = obj.picture;
    };

    /* This obervable array holds filtered location objects from search
    queries. It is automatically updated/rendered in the View*/
    self.locationGrid = ko.observableArray("");

    /* Iterate through the array of location objects and push them to the
    observable array above*/
    self.LocationArray.forEach(function(obj) {
        self.locationGrid.push(obj);
    });

    /* self.Query is bound to the input on the View. Because it is an
     observable variable, it's value will be updated whenver the input on the
     View is altered*/
    self.Query = ko.observable("");

    /* Filter through the location objects and compare each one to the
    search terms (value of self.Query). If there is a match, the matching
    object is re-added to the locationGrid (observ. array bound to the View). */
    self.searchLocations = function () {

        /* Convert search input to lowercase in order to compare like
        characters in each break and location name & store in a new var*/
        var search = self.Query().toLowerCase();

        /* Remove all location objects from obs. array, so that only objects
        which match the search can be re-added to the array and subsequently
        rendered in the View*/
        self.locationGrid.removeAll();

        /* Compare each object's break name and location to the search terms.
         If it matches, re-add it to the obs. array and render in the View.
         If it doesn't match, then it isnt re-added*/
        self.LocationArray.forEach(function(obj) {

            if (obj.breakName.toLowerCase().indexOf(search) >= 0) {

              self.locationGrid.push(obj);

            } else if (obj.location.toLowerCase().indexOf(search) >= 0) {

              self.locationGrid.push(obj);
            }
        });

        // Set the map bounds & map position for every search
        setMapBounds();

        /* Compare each marker's title, which holds the break and location name, to the search terms. If it matches, set the marker as visible.
        If it doesn't match, make setVisible false*/
        markers.forEach(function(marker) {

            if (marker.title.toLowerCase().indexOf(search) >= 0) {

              marker.setVisible(true);

            } else {

              marker.setVisible(false);

            }

        });

    }

    self.clickLocationFrame = function(obj) {
        self.goToMarker(obj.breakName);
        getMagicSeaweed(obj.spotID);
    };

    /* Select and zoom in on each marker related to a location object from
    the View. This is accomplished using ko's click binding*/
    self.goToMarker = function(breakName) {

        // Iterate through the markers array
        markers.forEach(function(marker) {

            /* Filter markers that match the location object. When a match is
            found, zoom in and display the relevant info window*/
            if (marker.title.indexOf(breakName) >= 0) {

                // Open info window
                getInfoWindow(marker, breakName);

                // Center the map
                map.setCenter(marker.getPosition());

                // Zoom in on marker
                map.setZoom(10);

                // Animate marker
                animateMarker(marker);

            }

        });

    }
};


function getMagicSeaweed (spotID) {

    var $surfConditionsError = $('div.conditions-error');
    var $surfConditionsLeft = $('div.surf-conditions-left');
    var $surfConditionsMiddle = $('div.surf-conditions-middle');
    var $surfConditionsRight = $('div.surf-conditions-right');

    // clear old data before new request
    $surfConditionsError.text("");
    $surfConditionsLeft.text("");
    $surfConditionsMiddle.text("");
    $surfConditionsRight.text("");

    var $spotID = spotID;

    // load Magic Seaweed
    var msUrl = 'http://magicseaweed.com/api/d2983e394d07724e96404fba11c10485/forecast/?spot_id=' + $spotID + '&units=us&fields=timestamp,fadedRating,solidRating,swell.minBreakingHeight,swell.maxBreakingHeight,swell.components.primary.*,wind.*,condition.*';

    var msRequestTimeout = setTimeout (function() {
        $surfConditionsError.append('<p>' + "Sorry dude! Conditions for this location are unavailable right now. Total bummer =(" + '</p>');
    }, 8000);

    $.ajax({
        url: msUrl,
        dataType: 'jsonp',
        // jsonp: "callback",
        success: function(response) {

            // Get current time and current time minus three hours
            var getTime = Date.now();
            var currentTimeSecs = getTime / 1000;
            var backThreeHours = currentTimeSecs - 10800;
            var forwardThreeHours = currentTimeSecs + 10800;

            /* Iterate through forecast objects to get the last forcast (i.e. within the last 3 hours)*/
            for (var i = 0; i < response.length; i++) {

                var forecastTime = response[i].timestamp;

                if (forecastTime < currentTimeSecs && forecastTime > backThreeHours) {

                    // Save forecast for parsing other information in a variable
                    var forcastData = response[i];

                /* if data is not available from within the previous three hours, get the nearest forecast up to 3 hours in the future*/
                } else if (forecastTime > currentTimeSecs && forecastTime < forwardThreeHours) {

                    // Save forecast for parsing other information in a variable
                    var forcastData = response[i];

                }
            }

            // Wave break height max -  min
            var minBreakHeight = forcastData.swell.minBreakingHeight;
            var maxBreakHeight = forcastData.swell.maxBreakingHeight;

              if (minBreakHeight === maxBreakHeight) {
                  var waveHeight = minBreakHeight;
              } else {
                  var waveHeight = minBreakHeight + ' ' + '-' + ' ' + maxBreakHeight;
              }

            // Swell height, direction, period
            var swellHeight = forcastData.swell.components.primary.height;
            var swellPeriod = forcastData.swell.components.primary.period;
            var swellDirection = forcastData.swell.components.primary.direction;
            var swellCompassDirection = forcastData.swell.components.primary.compassDirection;

            // Wind speed
            var windSpeed = forcastData.wind.speed;
            var windDirection = forcastData.wind.direction;
            var compassDirection = forcastData.wind.compassDirection;

            // Temp and weather
            var temperature = forcastData.condition.temperature;
            var weather = forcastData.condition.weather;
            var weatherImg = 'http://cdnimages.magicseaweed.com/30x30/' + weather + '.png'
            var windImg = 'img/cloudy-&-wind.png'

            // Rating

            var rating = [];

            for (var i = 0; i < forcastData.solidRating; i++) {
                rating.push('<img src="http://cdnimages.magicseaweed.com/star_filled.png" />');
            }

            for (var i = 0; i < forcastData.fadedRating; i++) {
                rating.push('<img src="http://cdnimages.magicseaweed.com/star_empty.png" />');
            }

            var waveRating = rating.join("");

            // UI render left
            $surfConditionsLeft.append('<p>' + temperature + "℉" + '</p>');

            $surfConditionsLeft.append('<img class="img-responsive" src="' + weatherImg + '" alt="Symbol for current weather">');

            // UI render middle
            $surfConditionsMiddle.append('<p>' + "(" + swellHeight + "ft" + ' ' + "at" + ' ' + swellPeriod + 's' + ' ' + swellCompassDirection + ")" + '</p>');
            $surfConditionsMiddle.append('<p>' + waveHeight + ' ' + "ft" + '</p>');
            $surfConditionsMiddle.append('<p>' + waveRating + '</p>');

            // UI render right
            $surfConditionsRight.append('<p>' + "(" + windSpeed + "mph" + ")" + '</p>');
            $surfConditionsRight.append('<p>' + compassDirection + '</p>');
            $surfConditionsRight.append('<img class="img-responsive" src="' + windImg + '" alt="Symbol for wind">');


            clearTimeout(msRequestTimeout);
        }
    });
}

// Declare global variables map and infoWindow
var map, infoWindow;

/* Create array of map markers that is globally accessible, particularly by
the ViewModel*/
var markers = [];

function initMap() {

    // Create a new Google map centered on the Hawaiian Islands
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 20.67, lng: -157.505},
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    // Create an info window object for displaying the break name
    infoWindow = new google.maps.InfoWindow();

    generateMarkers();
}

function generateMarkers () {

    /* Loop through locationData and filter out the coordinates
    & break name for each break. Save the break's coordinates and name
    in their own variables for easy referencing*/
    for(var i = 0; i < locationData.length; i++) {

        // Create a variable to hold each break's coordinates
        var breakCoordinates = ({lat: locationData[i].lat, lng: locationData[i].lng});

        // Create a variable to hold the name of the break
        var breakName = locationData[i].breakName;

        // Create a variable to hold the name of the break location
        var breakLocation = locationData[i].location;

        /* Create a marker and set its position. Pass the variables
        created above as arguments*/
        addMarker(breakName, breakCoordinates, breakLocation);

    }

    // Display markers found in the markers array on the map
    showMarkers(map);

}

function addMarker(breakName, breakCoordinates, breakLocation) {

    var marker = new google.maps.Marker({

        // Set position using the newly created variable
        position: breakCoordinates,

        // Animate markers by dropping them onto the map at page load
        animation: google.maps.Animation.DROP,
        map: map,

        /* Set the title for the break marker as the name of the wave/location
        of the break. This way it can be searched/filtered in the ViewModel*/
        title: breakName + ' ' + '(' + breakLocation + ')'
    });

    // Add a text box that displays the break name and location when clicked
    addListeners(marker, breakName);
}

function addListeners(marker, breakName) {

    google.maps.event.addListener(marker, 'dblclick', (function(marker) {

        /* Create an inner function what will at the time of iteration save
        a double-click event to the relevant marker. When the user double-
        clicks, the map will zoom in on the marker*/
        return function() {
            // Center the map
            map.setCenter(marker.getPosition());

            /* Set zoom if marker is clicked and not already zoomed in at 14
            or above*/
            if(map.getZoom() < 14) {
                map.setZoom(14);
            }
        }

    /* Pass the relevant marker for the current iteration as an argument
    into the function*/
    })(marker));

    google.maps.event.addListener(marker, 'click', (function(marker, breakName) {

        /* Create an inner function what will at the time of iteration save
        the individual break's name (breakName) within the infoWindow and
        attach it to the relevant marker*/
        return function() {
            getInfoWindow(marker, breakName);

            // Bounce marker upon clicking
            animateMarker(marker);
        }

    /* Pass the relevant marker and break name (breakName) for the current
    iteration as an argument into the function*/
    })(marker, breakName));

    // Add each marker to the markers array
    markers.push(marker);
}

function showMarkers(map) {

    // Loop through the markers array and display on the map
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function setMapBounds () {

    /* Create map bounds rectangle using the most SW / NE locations
    to calculate the size*/
    var bounds = new google.maps.LatLngBounds();

    /* Loop through markers and extend bounds to only those markers
    that are visible*/
    for (var i = 0; i < markers.length; i++) {
        if(markers[i].visible) {
            bounds.extend(markers[i].getPosition());
        }
    }

    // Fit the map to the bounds calcuated above
    map.fitBounds(bounds);

    /* If there's only one marker (i.e. zoom is very high/too close), reset
    zoom to lower level*/
    if(map.getZoom() > 12) {
        map.setZoom(12);
    };
}

function getInfoWindow (marker, breakName) {
    // Assign content to InfoWindow object
    infoWindow.setContent(breakName);

    // Assign the InfoWindow object the appropriate marker
    infoWindow.open(map, marker);
}

function animateMarker (marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    window.setTimeout(function() {
        marker.setAnimation(null);
    }, 1400);
}

ko.applyBindings(new AppViewModel);