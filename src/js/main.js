

var locationData = [
    {
      breakName: 'Sunset Beach',
      location: 'Oahu, Hawaii',
      bigWave: true,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'left',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' Mid'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 21.679011,
      lng: -158.041277,
      spotID: 657,
      picture: '<img src="/img/flickr_sunset_beach-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Pipeline/Backdoor',
      location: 'Oahu, Hawaii',
      bigWave: false,
      wellKnown: true,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'left',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 10, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Mar', ' Jan', ' Feb', ' Apr', ' May'],
      climate: [' cold', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 75, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 21.665244,
      lng: -158.053408,
      spotID: 616,
      picture: '<img src="/img/flickr_pipeline-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Cannons',
      location: 'Kauai, Hawaii',
      bigWave: true,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'left',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 8, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Sep', ' Oct', ' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 66, winter: 77},
      hazards: [' sharks', ' crowds'],
      lat: 22.224744,
      lng: -159.566712,
      spotID: 'none',
      picture: '<img src="/img/flickr_cannons-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Tunnels',
      location: 'Kauai, Hawaii',
      bigWave: false,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'right',
      breakDetails: 'reef',
      avgSize: {min: 3, max: 7, aboveMax: false},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Dec', ' Jan', ' Feb', ' Mar', ' Apr', ' Jun', ' Jul'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 74, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 22.224744,
      lng: -159.566712,
      spotID: 'none',
      picture: '<img src="/img/flickr_tunnels-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Anahola',
      location: 'Kauai, Hawaii',
      bigWave: false,
      wellKnown: true,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'left',
      breakDetails: 'point',
      avgSize: {min: 7, max: 9, aboveMax: false},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 79, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 22.148311,
      lng: -159.300331,
      spotID: 'none',
      picture: '<img src="/img/flickr_anahola-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Hanalei',
      location: 'Kauai, Hawaii',
      bigWave: true,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'right',
      breakDetails: 'river mouth',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 73, winter: 77},
      hazards: [' crowds', ' sharks'],
      lat: 22.218315,
      lng: -159.502265,
      spotID: 3051,
      picture: '<img src="/img/google_hanalei-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: "Hale'iwa",
      location: 'Oahu, Hawaii',
      bigWave: false,
      wellKnown: true,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'left',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' dry', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 71, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 21.596416,
      lng: -158.109121,
      spotID: 660,
      picture: '<img src="/img/flickr_haleiwa-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Waimea Bay',
      location: 'Oahu, Hawaii',
      bigWave: true,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'left',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 76, winter: 77},
      hazards: [' sharks', ' crowds'],
      lat: 21.642987,
      lng: -158.066743,
      spotID: 549,
      picture: '<img src="/img/wiki_waimea_bay-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Rocky Point',
      location: 'Oahu, Hawaii',
      bigWave: false,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'right',
      breakDetails: 'point',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' dry', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 98, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 21.670862,
      lng: -158.049157,
      spotID: 658,
      picture: '<img src="/img/flickr_rocky_point-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Turtle Bay',
      location: 'Oahu, Hawaii',
      bigWave: true,
      wellKnown: true,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'intermediate',
      waveDirection: 'left',
      breakDetails: 'river mouth',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 86, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 21.708047,
      lng: -158.002275,
      spotID: 'none',
      picture: '<img src="/img/flickr_turtle_bay-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Halawa Bay',
      location: 'Molokai, Hawaii',
      bigWave: false,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'beginner',
      waveDirection: 'right',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' dry', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 45, winter: 77},
      hazards: [' sharks', ' crowds'],
      lat: 21.159132,
      lng: -156.735906,
      spotID: 'none',
      picture: '<img src="/img/flickr_halawa_bay-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Honolua Bay',
      location: 'Maui, Hawaii',
      bigWave: false,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'intermediate',
      waveDirection: 'left & right',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 36, winter: 77},
      hazards: [' crowds', ' sharks'],
      lat: 21.024350,
      lng: -156.641890,
      spotID: 697,
      picture: '<img src="/img/flickr_honolua_bay-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Jaws/Peahi',
      location: 'Maui, Hawaii',
      bigWave: false,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'beginner',
      waveDirection: 'right',
      breakDetails: 'point',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' dry', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: [' crowds', ' strong currents'],
      lat: 20.946401,
      lng: -156.297389,
      spotID: 617,
      picture: '<img src="/img/flickr_jaws-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'The Cove',
      location: 'Maui, Hawaii',
      bigWave: false,
      wellKnown: true,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'intermediate',
      waveDirection: 'left & right',
      breakDetails: 'river mouth',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' cold', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 20.728298,
      lng: -156.452353,
      spotID: 'none',
      picture: '<img src="/img/flickr_the_cove-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: "Ma'alaea",
      location: 'Maui, Hawaii',
      bigWave: true,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'beginner',
      waveDirection: 'right',
      breakDetails: 'beach',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: [' sharks', ' crowds'],
      lat: 20.791860,
      lng: -156.508960,
      spotID: 618,
      picture: '<img src="/img/flickr_maalaea-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Lahaina',
      location: 'Maui, Hawaii',
      bigWave: false,
      wellKnown: true,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'intermediate',
      waveDirection: 'left & right',
      breakDetails: 'point',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' cold', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 20.869326,
      lng: -156.679025,
      spotID: 4287,
      picture: '<img src="/img/flickr_lahaina-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Lymans/Banyans',
      location: 'Big Island, Hawaii',
      bigWave: true,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'left',
      breakDetails: 'beach',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: [' sharks', ' crowds'],
      lat: 19.606206,
      lng: -155.978016,
      spotID: 2784,
      picture: '<img src="/img/flickr_lymans-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Pine Trees',
      location: 'Big Island, Hawaii',
      bigWave: false,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'beginner',
      waveDirection: 'left & right',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' cold', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: [' crowds', ' strong currents'],
      lat: 19.695131,
      lng: -156.045926,
      spotID: 3958,
      picture: '<img src="/img/flickr_pine_trees-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: 'Kiholo Bay',
      location: 'Big Island, Hawaii',
      bigWave: true,
      wellKnown: true,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'advanced',
      waveDirection: 'left',
      breakDetails: 'beach',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: [' tropical', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: [' strong currents', ' crowds'],
      lat: 19.854416,
      lng: -155.931340,
      spotID: 'none',
      picture: '<img src="/img/flickr_kiholo_bay-w640.jpg" class="location-image  img-responsive img-rounded">'
    },
    {
      breakName: "Honoli'i",
      location: 'Big Island, Hawaii',
      bigWave: true,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: 'intermediate',
      waveDirection: 'left & right',
      breakDetails: 'point',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: [' W', ' NW'],
      optimalWind: [' E', ' SSE'],
      optimalTide: [' High'],
      optimalTime: [' Jan', ' Feb', ' Mar', ' Apr', ' May', ' Jun', ' Jul', ' Aug', ' Sep', ' Oct', ' Nov', ' Dec'],
      climate: [' cold', ' humid'],
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: [' sharks', ' crowds'],
      lat: 19.756298,
      lng: -155.089960,
      spotID: 3815,
      picture: '<img src="/img/flickr_honolii-w640.jpg" class="location-image  img-responsive img-rounded">'
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
        this.bigWave = obj.bigWave;
        this.wellKnown = obj.wellKnown;
        this.cost = obj.cost;
        this.skillLevel = obj.skillLevel;
        this.waveDirection = obj.waveDirection;
        this.breakDetails = obj.breakDetails;
        this.avgSize = obj.avgSize;
        this.optimalSwell = obj.optimalSwell;
        this.optimalTide = obj.optimalTide;
        this.optimalWind = obj.optimalWind;
        this.optimalTime = obj.optimalTime;
        this.climate = obj.climate;
        this.avgWaterTemp = obj.avgWaterTemp;
        this.hazards = obj.hazards;
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

    /* When the cursor hovers over a location, remove the text and add
    a gaussian blur. Wait until the locations have been loaded */
    self.addRolloverEffect = function () {

        // Wait until the locations have been loaded
        $(document).ready(function() {

            // For each location set variables and add hover effects
            $('.location-frame').each(function () {
                var locationFrame = $(this);
                var breakName = $(this).find('.break-name');
                var location = $(this).find('.location-name');
                var img = $(this).find('img.location-image');

                locationFrame.on('mouseenter',

                    function (e) {

                        // Get identifying information from the clicked object
                        var targetData = e.currentTarget.innerText;

                        // Format the obtained information
                        var hoverItem = targetData.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "");

                        // Iterate through the location array
                        self.LocationArray.forEach(function(obj) {

                            // Format info from object
                            var breakName = obj.breakName.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "");

                            /* Filter locations that match the hovered item.
                            When a match is found, export it to be displayed
                            in the location frame */
                            if (hoverItem.indexOf(breakName) >= 0) {

                                importInfo(obj);
                            }

                        });

                        /* When the mouse is hovering over a location frame
                        show unique information about that location */
                        function importInfo(obj) {

                            img.css('-webkit-filter', 'blur(3px)');
                            location.toggle()
                            breakName.toggle();

                            /* Display icon associated with the skill level
                            needed to surf the break */
                            switch(obj.skillLevel) {
                              case 'advanced':
                                  var skillLevelInfo = '<img src="/img/marquee.png" class="rollover-info skill-level">';
                              break;

                              case 'intermediate':
                                  var skillLevelInfo = '<img src="/img/marquee.png" class="rollover-info skill-level">';
                              break;

                              case 'beginner':
                                  var skillLevelInfo = '<img src="/img/marquee.png" class="rollover-info skill-level">';
                              break;

                              case 'all levels':
                                  var skillLevelInfo = '<img src="/img/marquee.png" class="rollover-info skill-level">';
                              break;
                            }

                            /* Display the icon associated with the type of
                            break it is (i.e. what kind of surface is beneath
                            it */
                            switch(obj.breakDetails) {
                              case 'reef':
                                  var breakTypeInfo = '<img src="/img/marquee.png" class="rollover-info break-type">';
                              break;

                              case 'point':
                                  var breakTypeInfo = '<img src="/img/marquee.png" class="rollover-info break-type">';
                              break;

                              case 'beach':
                                  var breakTypeInfo = '<img src="/img/marquee.png" class="rollover-info break-type">';
                              break;

                              case 'river mouth':
                                  var breakTypeInfo = '<img src="/img/marquee.png" class="rollover-info break-type">';
                              break;
                            }

                            /* Display the icon associated with the direction
                            the wave breaks */
                            switch(obj.waveDirection) {
                              case 'left':
                                  var waveDirectionInfo = '<img src="/img/marquee.png" class="rollover-info wave-direction">';
                              break;

                              case 'right':
                                  var waveDirectionInfo = '<img src="/img/marquee.png" class="rollover-info wave-direction">';
                              break;

                              case 'left & right':
                                  var waveDirectionInfo = '<img src="/img/marquee.png" class="rollover-info wave-direction">';
                              break;
                            }

                            // Set variables for each season at zero
                            var spring = 0;
                            var summer = 0;
                            var autumn = 0;
                            var winter = 0;

                            /* Tally the number of months fall into a
                            particular season */
                            for (i = 0; i < obj.optimalTime.length; i++) {
                                switch (obj.optimalTime[i]) {
                                    case ' Dec':
                                    case ' Jan':
                                    case ' Feb':
                                        winter++;
                                    break;

                                    case ' Mar':
                                    case ' Apr':
                                    case ' May':
                                        spring++;
                                    break;

                                    case ' Jun':
                                    case ' Jul':
                                    case ' Aug':
                                        summer++;
                                    break

                                    case ' Sep':
                                    case ' Oct':
                                    case ' Nov':
                                        autumn++;
                                    break
                                }
                            }

                            /* Filter which seasons are the best for the
                            particular break */
                            /* Display icon associated with best time of
                            year */
                            if (winter === spring && summer && autumn &&
                                spring === summer && autumn && winter &&
                                summer === autumn && winter && spring &&
                                autumn === winter && spring && summer) {
                                  var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                            } else if(winter >= spring && winter >= summer && winter >= autumn) {
                                  if(winter === spring) {
                                      var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                                  } else if (winter === summer) {
                                      var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                                  } else if (winter === autumn) {
                                      var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                                  } else {
                                      var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                                  };
                            } else if (spring >= summer && spring >= autumn && spring > winter) {
                                  if (spring === summer) {
                                      var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                                  } else if (spring === autumn) {
                                      var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                                  } else {
                                      var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                                  };
                            } else if (summer >= autumn && summer > winter && summer > spring) {
                                  if(summer === autumn) {
                                      var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                                  } else {
                                      var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                                  };
                            } else if (autumn > winter && autumn > spring && autumn > summer) {
                                  var bestMonthsInfo = '<img src="/img/marquee.png" class="rollover-info best-months">';
                            };

                            /* If there is big wave surfing at this break
                            display big wave icon. If not, display the
                            related climate icon */
                            if(obj.bigWave) {
                                var miscInfoOne = '<img src="/img/marquee.png" class="rollover-info misc-info-one">';
                            } else if (obj.climate[0] === ' tropical') {
                                var miscInfoOne = '<img src="/img/marquee.png" class="rollover-info misc-info-one">';
                            } else if (obj.climate[0] === ' dry') {
                                var miscInfoOne = '<img src="/img/marquee.png" class="rollover-info misc-info-one">';
                            } else if (obj.climate[0] === ' cold') {
                                var miscInfoOne = '<img src="/img/marquee.png" class="rollover-info misc-info-one">';
                            };

                            /* If the wave is well known dispaly the well
                            well known icon, otherwise display the correct
                            hazard icon. FYI only the first hazard will
                            be display. The worst hazard has been positioned
                            first in the array purposfully */
                            if(obj.wellKnown) {
                                var miscInfoTwo = '<img src="/img/marquee.png" class="rollover-info misc-info-two">';
                            } else if (obj.hazards[0] === ' strong currents') {
                                var miscInfoTwo = '<img src="/img/marquee.png" class="rollover-info misc-info-two">';
                            } else if (obj.hazards[0] === ' crowds') {
                                var miscInfoTwo = '<img src="/img/marquee.png" class="rollover-info misc-info-two">';
                            } else if (obj.hazards[0] === ' sharks') {
                                var miscInfoTwo = '<img src="/img/marquee.png" class="rollover-info misc-info-two">';
                            };

                            /* Display the budget cost for the location */
                            var costInfo = '<p class="rollover-info cost">' + '$' + obj.cost.budget + '/' + 'day' + '</p>';

                            /* Get distance between both locations using
                            the Haversine formula */
                            /* Obtain current location from user */
                            var latOrigin = currentLat;
                            var lngOrigin = currentLng;

                            /* Obtain location data for the selected break */
                            var latDest = obj.lat;
                            var lngDest = obj.lng;

                            // Set the radius of Earth in mi
                            var R = 3959;

                            // Calculate radians diff between both locations
                            var latR = deg2rad(latDest-latOrigin);
                            var lngR = deg2rad(lngDest-lngOrigin);

                            var a =
                              Math.sin(latR/2) * Math.sin(latR/2) +
                              Math.cos(deg2rad(latOrigin)) * Math.cos(deg2rad(latDest)) *
                              Math.sin(lngR/2) * Math.sin(lngR/2)
                              ;
                            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

                            // Solve for d
                            var d = R * c;

                            // Round distance to nearest integer
                            var distance = Math.round(d);

                            // Converts degrees to radians
                            function deg2rad(deg) {
                              return deg * (Math.PI/180)
                            }

                            // Cache distance element with distance
                            var distanceInfo = '<p class="rollover-info distance">' + distance + 'mi' + '</p>';

                            // Get today's date and month
                            var today = new Date();
                            var month = today.getMonth();

                            /* Compare today's month with the array of water
                            temps and associated seasons. Display the temp
                            related to the current season (depending on the
                            current month */
                            switch (month) {
                              case 11 :
                              case 0 :
                              case 1 :
                                  var waterTemp = obj.avgWaterTemp.winter;
                              break;

                              case 2:
                              case 3:
                              case 4:
                                  var waterTemp = obj.avgWaterTemp.spring;
                              break;

                              case 5:
                              case 6:
                              case 7:
                                  var waterTemp = obj.avgWaterTemp.summer;
                              break;

                              case 8:
                              case 9:
                              case 10:
                                  var waterTemp = obj.avgWaterTemp.autumn;
                              break;
                            }

                            /* Cache the water temp element */
                            var waterTempInfo = '<p class="rollover-info water-temp">' + waterTemp + '℉' + '</p>';

                            /* Check if the average maximum wave size
                            sometimes goes above the max. If it does, save a plus sign in a variable to add to the min/max wave height */
                            if (obj.avgSize.aboveMax) {
                                var plus = '+';
                            } else {
                                var plus = '';
                            };

                            /* Cache the average wave size element */
                            var waveSizeInfo = '<p class="rollover-info wave-size">'+ obj.avgSize.min + "-" + obj.avgSize.max + plus + "ft" +'</p>';

                            /* Append all cached elements to the selected
                            location frame */
                            locationFrame.append(skillLevelInfo);
                            locationFrame.append(breakTypeInfo);
                            locationFrame.append(waveDirectionInfo);
                            locationFrame.append(bestMonthsInfo);
                            locationFrame.append(miscInfoOne);
                            locationFrame.append(miscInfoTwo);
                            locationFrame.append(costInfo);
                            locationFrame.append(distanceInfo);
                            locationFrame.append(waterTempInfo);
                            locationFrame.append(waveSizeInfo);

                            /* Get each element from within the location
                            frame and cache it for later use */
                            var skillLevel = $('.skill-level');
                            var breakType = $('.break-type');
                            var waveDirection = $('.wave-direction');
                            var bestMonths = $('.best-months');
                            var miscInfoOne = $('.misc-info-one');
                            var miscInfoTwo = $('.misc-info-two');
                            var cost = $('.cost');
                            var distance = $('.distance');
                            var waterTemp = $('.water-temp');
                            var waveSize = $('.wave-size');

                            /* Position the skill level icon */
                            skillLevel.css({
                              "position": "absolute",
                              "top": "20%",
                              "left": "25%",
                              "height" : "60px"
                            });

                            /* Position the break type icon */
                            breakType.css({
                              "position": "absolute",
                              "top" : "20%",
                              "left" : "0",
                              "right" : "0",
                              "margin" : "0 auto",
                              "height" : "60px"
                            });

                            /* Position the wave direction icon */
                            waveDirection.css({
                              "position": "absolute",
                              "top" : "20%",
                              "right" : "25%",
                              "height" : "60px"
                            });

                            /* Position the best months icon */
                            bestMonths.css({
                              "position": "absolute",
                              "bottom": "20%",
                              "left": "25%",
                              "height" : "60px"
                            });

                            /* Position the misc icon. It's either
                            the big wave or climate icon */
                            miscInfoOne.css({
                              "position": "absolute",
                              "bottom" : "20%",
                              "left" : "0",
                              "right" : "0",
                              "margin" : "0 auto",
                              "height" : "60px"
                            });

                            /* Position the misc icon. It's either
                            the well known or hazard icon */
                            miscInfoTwo.css({
                              "position": "absolute",
                              "bottom" : "20%",
                              "right" : "25%",
                              "height" : "60px"
                            });

                            /* Position the cost info */
                            cost.css({
                              "font-size" : "1.25em",
                              "color" : "white",
                              "text-shadow" : "1px 1px 10px black",
                              "position" : "absolute",
                              "top" : "10px",
                              "left" : "15px"
                            });

                            /* Position the distance info */
                            distance.css({
                              "font-size" : "1.25em",
                              "color" : "white",
                              "text-shadow" : "1px 1px 10px black",
                              "position" : "absolute",
                              "top" : "10px",
                              "right" : "15px"
                            });

                            /* Position the water temp info */
                            waterTemp.css({
                              "font-size" : "1.25em",
                              "color" : "white",
                              "text-shadow" : "1px 1px 10px black",
                              "position" : "absolute",
                              "bottom" : "0",
                              "right" : "15px"
                            });

                            /* Position the wave size info */
                            waveSize.css({
                              "font-size" : "1.25em",
                              "color" : "white",
                              "text-shadow" : "1px 1px 10px black",
                              "position" : "absolute",
                              "bottom" : "0",
                              "left" : "17px"
                            });
                        };
                    }
                );

                /* Remove all imported info when the mouse stops hovering */
                locationFrame.on('mouseleave',
                    function () {
                        img.css('-webkit-filter', 'blur(0px)');
                        location.toggle();
                        breakName.toggle();

                        $('.rollover-info').remove();
                    }
                );
            });
        });
    };

    // Add hover effects to each location
    self.addRolloverEffect();

    /* self.Query is bound to the input on the View. Because it is an
     observable variable, it's value will be updated whenver the input on the
     View is altered*/
    self.Query = ko.observable("");

    /* Clear any existing text in the search field, clear any existing
    searches, close the surf guide if open, show searchable locations, and
    close any open info windows */
    $('.search-form').on("click", function () {
        // Clear search field
        $(this).val("");
        // Clear any searches
        self.Query("");
        // Remove the surf guide and conditions
        $('.surf-conditions').remove();
        $('.surf-conditions-error').remove();
        $('.surf-guide-container').remove();
        // Show the locations
        $('.location-grid').show();
        // Close open info windows
        infoWindow.close();
        // Run a search to reset the map by running an empty search
        self.searchLocations();
    });

    /* Create an array that holds keywords that pop up in a small menu
    within the search bar dynamically during searches */
    self.searchKeywords = [];

    /* Loop through the location array and obtain all of the break names
    and adding them to the search keywords array */
    self.LocationArray.forEach(function(obj) {
        self.searchKeywords.push(obj.breakName);

        /* If a location keyword already exists in the search keywords array
        do not it. If it doesn't add it to the array. This avoids having the
        same location listed multiple times in the pop-up window */
        if(searchKeywords.indexOf(obj.location) < 0) {
            self.searchKeywords.push(obj.location);
        }
    });

    /* Call the jQuery-UI auto complete widget.*/
    $('.search-form').autocomplete({
        /* All keywords come from the above array */
        source: searchKeywords,
        /* Highlight the pop-up menu item that matches what is currently in
         the search input field */
        autoFocus: true,
        /* A search must be at least two characters long before the pop-up
        window shows */
        minLength: 2,
        // Delay the pop-up window from displaying for (x) milliseconds
        delay: 500,
        /* The a selection has been made, change the ko variable that
        represents the search and then activate the search filtering
        below */
        select: function (event, ui) {
            self.Query(ui.item.value);
            self.searchLocations();
        }

    });

    /* Filter through the location objects and compare each one to the
    search terms (value of self.Query). If there is a match, the matching
    object is re-added to the locationGrid (observ. array bound to the View). */
    self.searchLocations = function () {

        /* Convert search input to lowercase, remove spaces, remove
        apostrophes, and remove commas in order to compare like
        characters in each break and location name & store in a new var*/
        var search = self.Query().toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "");

        /* Remove all location objects from obs. array, so that only objects
        which match the search can be re-added to the array and subsequently
        rendered in the View*/
        self.locationGrid.removeAll();

        /* Compare each object's break name and location to the search terms.
         If it matches, re-add it to the obs. array and render in the View.
         If it doesn't match, then it isnt re-added.*/
        self.LocationArray.forEach(function(obj) {

            // Convert break names (remove spaces, commas, apostrophes etc.)
            if (obj.breakName.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "").indexOf(search) >= 0) {

              self.locationGrid.push(obj);

            // Convert locations (remove spaces, commas, apostrophes etc.)
            } else if (obj.location.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "").indexOf(search) >= 0) {

              self.locationGrid.push(obj);
            }
        });

        /* Compare each marker's title, which holds the break and location name, to the search terms. If it matches, set the marker as visible.
        If it doesn't match, make setVisible false*/
        markers.forEach(function(marker) {

            // Convert marker titles (remove spaces, commas, apostrophes etc.)
            if (marker.title.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "").indexOf(search) >= 0) {

              marker.setVisible(true);

            } else {

              marker.setVisible(false);

            }

        });

        // Set the map bounds & map position for every search
        setMapBounds();

        /* After a search, there are new objects in the locationGrid, so the
        rollover effects that were added before need to be re-added */
        addRolloverEffect();

    }

    /* Go to specific marker and open the surf guide */
    self.clickLocationFrame = function(obj) {

            // Pass object to match the appropriate marker with the obj
            self.goToMarker(obj.breakName);

            // Pass obj to the surf guide
            renderSurfGuide(obj);

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

    /* Display detailed information about the location*/
    self.renderSurfGuide = function (obj) {

        /* Check if the surf guide window is open already from a previous
        click. If it isn't hide the locatin grid. If it is, the location
        grid is already hidden, so we don't want to make it visible! */
        if (!$('.surf-guide-container').is(":visible")) {
            // Hide the location grid
            $('.location-grid').toggle();
        }

        /* Remove any existing information from previous click */
        $('.surf-guide-container').remove();

        $('.surf-info-container').append('<div class="row surf-guide-container"></div>');

        $surfGuideContainer = $('.surf-guide-container');

        $surfGuideContainer.append('<div class="col-xs-12 surf-guide-title">' + '<p class="title">' + obj.breakName + ',' + ' ' + obj.location + '</p>' + '</div>');

        // Check if break has big waves
        if (obj.bigWave) {
            $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 big-wave card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive img-circle">' + '<p>' + "Big Waves" + '</p>' + '</div>');
        };

        // Check if break is well known
        if (obj.bigWave) {
            $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 well-known card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive img-circle">' + '<p>' + "Well-Known Wave" + '</p>' + '</div>');
        }

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 difficulty card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.skillLevel + '</p>' + '</div>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 direction card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.waveDirection + '</p>' + '</div>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 break-details card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.breakDetails + '</p>' + '</div>');

        /* Check if the average maximum wave size sometime goes above the max.
        If it does, save a plus sign in a variable to add to the min/max wave
        height */
        if (obj.avgSize.aboveMax) {
            var plus = '+';
        } else {
            var plus = '';
        }

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 wave-height card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.avgSize.min + ' ' + "-" + ' ' + obj.avgSize.max + plus + "ft" + '</p>' + '</div>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 swell-direction card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.optimalSwell + '</p>' + '</div>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 tide card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.optimalTide + '</p>' + '</div>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 tide card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.optimalTide + '</p>' + '</div>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 wind card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.optimalWind + '</p>' + '</div>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 time card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + "Best Time" + '</p>' + '</div>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 climate card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.climate  + '</p>' + '</div>');

        /* Create an array to hold the details for what kind of water attire one should wear according to the time of year
        var gear = [];

        /* Loop through the average water temps for each time of year. Designate specific water attire for each time of year
        for (var temp in obj.avgWaterTemp) {

            if(obj.avgWaterTemp[temp] > 72) {
                gear.push('boardies');
            } else if (obj.avgWaterTemp[temp] > 66) {
                gear.push('2mm wetsuit');
            } else if (obj.avgWaterTemp[temp] > 59) {
                gear.push('3mm wetsuit');
            } else if (obj.avgWaterTemp[temp] > 54) {
                gear.push('4mm wetsuit');
            } else if (obj.avgWaterTemp[temp] > 48) {
                gear.push('5mm wetsuit');
            } else if (obj.avgWaterTemp[temp] > 43) {
                gear.push('6mm wetsuit');
            };
        };

         Create an inner table that displays water temp and recommended water attire according to time of year
        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 water-temp attire card">' + '<table>' + '<thead>' + '<tr>'  + '<th colspan="4">' + "Water Temp" + '</th>' + '</tr>' + '</thead>' + '<tbody>' + '<tr>' + '<td>' + "Spring" + '</td>' + '<td>' + "Summer" + '</td>' + '<td>' + "Autumn" + '</td>' + '<td>' + "Winter" + '</td>' + '</tr>' + '<tr>' + '<td>' + obj.avgWaterTemp.spring + "℉" + '</td>' + '<td>' + obj.avgWaterTemp.summer + "℉" + '</td>' + '<td>' + obj.avgWaterTemp.autumn + "℉" + '</td>' + '<td>' + obj.avgWaterTemp.winter + "℉" + '</td>' + '</tr>' + '<tr>' + '<td>' + gear[0] + '</td>' + '<td>' + gear[1] + '</td>' + '<td>' + gear[2] + '</td>' + '<td>' + gear[3] + '</td>' + '</tr>' + '</tbody>' + '</table>' + '</div>');*/

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 water-temp card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + "Water Temp"  + '</p>' + '</div>');

        /*
        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 cost card">' + '<table>' + '<thead>' + '<tr>'  + '<th colspan="3">' + "Cost" + '</th>' + '</tr>' + '</thead>' + '<tbody>' + '<tr>' + '<td>' + "Cost/day:"+ '</td>' + '<td>' + '<table>' + '<tr>' + '<td>' + "Budget" + '</td>' + '<td>' + "Mid-range" + '</td>' + '<td>' + "Deluxe" + '</td>' + '</tr>' + '<tr>' + '<td>' + "$" + obj.cost.budget + '</td>' + '<td>' + "$" + obj.cost.budget + ' ' + "-" + ' ' + obj.cost.highEnd + '</td>' + '<td>' + "$" + obj.cost.highEnd + "+" + '</td>' + '</tr>' + '</table>' + '</td>' + '</tr>' + '</tbody>' + '</table>' + '</div>');*/

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 cost card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + "Cost" + '</p>' + '</div>');

        for (var i = 0; i < obj.hazards.length; i++) {
            $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="http://lorempixel.com/120/120/technics" class="img-responsive">' + '<p>' + obj.hazards[i]  + '</p>' + '</div>');
        };
/*
        /* Create a table for displaying more information about the location
        $('.surf-guide').append('<table class="surf-guide-table"></table>');

        // Cache the reference to the table
        var $surfGuideTable = $('.surf-guide-table');

        // Create a table head to hold the clicked object's name and location
        $surfGuideTable.append('<thead class="table-head"></thead>');

        // Add the name of the break and location as title of table
        $('.table-head').append('<tr>' + '<th colspan="4">' + obj.breakName + ',' + ' ' + obj.location + '</th>' + '</tr>');

        // Create table body to display more unique information about the location
        $surfGuideTable.append('<tbody class="table-body"></tbody>');

        // Cache the reference to the table body
        var $surfGuideTableBody = $('.table-body');

        // Check if break has big waves
        if (obj.bigWave) {
            var bigWave = '<img src="http://lorempixel.com/40/40/technics" class="img-responsive img-circle">'
        } else {
            var bigWave = '';
        };

        // Check if break is well known
        if (obj.wellKnown) {
            var wellKnown = '<img src="http://lorempixel.com/40/40/technics" class="img-responsive img-circle">'
        } else {
            var wellKnown = '';
        };

        // Add special designations for the break
        $surfGuideTableBody.append('<tr>' + '<td>' + bigWave + '</td>' + '<td>' + wellKnown + '</td>' + '</tr>');

        // Add break difficulty
        $surfGuideTableBody.append('<tr>' + '<td>' + "Difficulty:" + '</td>' + '<td>' + obj.skillLevel + '</td>' + '</tr>');

        // Add break direction (left, right etc.)
        $surfGuideTableBody.append('<tr>' + '<td>' + "Direction:"+ '</td>' + '<td>' + obj.waveDirection + '</td>' + '</tr>');

        // Add what the wave breaks over (beach, reef, rocks etc.)
        $surfGuideTableBody.append('<tr>' + '<td>' + "Break:" + '</td>' + '<td>' + obj.breakDetails + '</td>' + '</tr>');

        /* Check if the average maximum wave size sometime goes above the max.
        If it does, save a plus sign in a variable to add to the min/max wave
        height
        if (obj.avgSize.aboveMax) {
            var plus = '+';
        } else {
            var plus = '';
        }

        // Add the average wave size range
        $surfGuideTableBody.append('<tr>' + '<td>' + "Height:"+ '</td>' + '<td>' + obj.avgSize.min + ' ' + "-" + ' ' + obj.avgSize.max + plus + "ft" + '</td>' + '</tr>');

        // Add the optimal swell direction
        $surfGuideTableBody.append('<tr>' + '<td>' + "Swell:" + '</td>' + '<td>' + obj.optimalSwell + '</td>' + '</tr>');

        // Add the optimal tide
        $surfGuideTableBody.append('<tr>' + '<td>' + "Tide:" + '</td>' + '<td>' + obj.optimalTide + '</td>' + '</tr>');

        // Add the optimal wind direction
        $surfGuideTableBody.append('<tr>' + '<td>' + "Wind:" + '</td>' + '<td>' + obj.optimalWind + ' ' + '</td>' + '</tr>');

        // Add the optimal time of year to surf the break
        $surfGuideTableBody.append('<tr>' + '<td>' + "Time:" + '</td>' + '<td>' + obj.optimalTime + '</td>' + '</tr>');

        // Add the climate details
        $surfGuideTableBody.append('<tr>' + '<td>' + "Climate:" + '</td>' + '<td>' + obj.climate + '</td>' + '</tr>');

        /* Create an array to hold the details for what kind of water attire one should wear according to the time of year
        var gear = [];

        /* Loop through the average water temps for each time of year. Designate specific water attire for each time of year
        for (var temp in obj.avgWaterTemp) {

            if(obj.avgWaterTemp[temp] > 72) {
                gear.push('boardies');
            } else if (obj.avgWaterTemp[temp] > 66) {
                gear.push('2mm wetsuit');
            } else if (obj.avgWaterTemp[temp] > 59) {
                gear.push('3mm wetsuit');
            } else if (obj.avgWaterTemp[temp] > 54) {
                gear.push('4mm wetsuit');
            } else if (obj.avgWaterTemp[temp] > 48) {
                gear.push('5mm wetsuit');
            } else if (obj.avgWaterTemp[temp] > 43) {
                gear.push('6mm wetsuit');
            };
        };

        /* Create an inner table that displays water temp and recommended water attire according to time of year
        $surfGuideTableBody.append('<tr>' + '<td>' + "Water Temp:" + '</td>' + '<td>' + '<table>' + '<tr>' + '<td>' + "Spring" + '</td>' + '<td>' + "Summer" + '</td>' + '<td>' + "Autumn" + '</td>' + '<td>' + "Winter" + '</td>' + '</tr>' + '<tr>' + '<td>' + obj.avgWaterTemp.spring + "℉" + '</td>' + '<td>' + obj.avgWaterTemp.summer + "℉" + '</td>' + '<td>' + obj.avgWaterTemp.autumn + "℉" + '</td>' + '<td>' + obj.avgWaterTemp.winter + "℉" + '</td>' + '</tr>' + '<tr>' + '<td>' + gear[0] + '</td>' + '<td>' + gear[1] + '</td>' + '<td>' + gear[2] + '</td>' + '<td>' + gear[3] + '</td>' + '</tr>' + '</table>' + '</td>' + '</tr>');

        // Add a list of surfing hazards for the specific break
        $surfGuideTableBody.append('<tr>' + '<td>' + "Hazards:"+ '</td>' + '<td>' + obj.hazards + '</td>' + '</tr>');

        // Add an inner table that displays varying budgets
        $surfGuideTableBody.append('<tr>' + '<td>' + "Cost/day:"+ '</td>' + '<td>' + '<table>' + '<tr>' + '<td>' + "Budget" + '</td>' + '<td>' + "Mid-range" + '</td>' + '<td>' + "Deluxe" + '</td>' + '</tr>' + '<tr>' + '<td>' + "$" + obj.cost.budget + '</td>' + '<td>' + "$" + obj.cost.budget + ' ' + "-" + ' ' + obj.cost.highEnd + '</td>' + '<td>' + "$" + obj.cost.highEnd + "+" + '</td>' + '</tr>' + '</table>' + '</td>' + '</tr>');
*/
        addGuideButtons(obj);

    };

    /* Create buttons for opening closing surf guide / view current break
    conditions */
    self.addGuideButtons = function (obj) {
        // Add a button for closing the surf guide
        $surfGuideContainer.prepend('<button type="button" class="btn guide-close-button">✖</button>');

        // Add a button for displaying surf conditions
        $('.surf-guide-title').append('<button type="button" class="btn btn-default conditions-button">Show Current Condtions</button>');

        /* When the surf conditions button is clicked, display current
        conditions */
        $('.conditions-button').on('click', function(e) {

            /* If surf conditions for a particular location have already
            been displayed, simply make visible again */
            if ($('.surf-conditions').is(":hidden")) {

                console.log('filter working')

                $('.surf-conditions').toggle();

                // Hide the surf conditions button
                $('.conditions-button').toggle();

                // Show the close conditions button
                $('.conditions-close-button').toggle();

            /* If surf conditions arent' already cached request new data */
            } else {

                    // Hide the surf conditions button
                    $('.conditions-button').toggle();

                    // Pass info to API function and initiate request
                    getMagicSeaweed(obj.spotID, obj.breakName);

            }

        });

        /* When the close surf guide button is clicked the surf guide is
        removed */
        $('.guide-close-button').on('click', function(e) {

            // Remove both surf conditions and surf guide from DOM
            $('.surf-conditions').remove();
            $('.surf-conditions-error').remove();
            $('.surf-guide-container').remove();

            /* Make both the location grid and the location frames
            within it visible. The location frames need to be made
            visible again in case a marker has been selected. */
            $('.location-frame').show();
            $('.location-grid').toggle();

            // Reset the map window to display all markers
            setMapBounds();

            // Close any info windows that remain open
            infoWindow.close();
        });
    };
};

function getMagicSeaweed (spotID, breakName) {

    /* Check for the location's spot ID. If there is no spot ID,
    immediately display an error message. This also prevents an API request
    from going through for a non-existing location*/
    if(spotID === 'none') {

        showError();

    } else {

        /* If the location object passes the above filter (has a location ID),
        but times out (no api data is returned), show an error message */
        var msRequestTimeout = setTimeout (function() {

            showError();

        }, 8000);

        // Load Magic Seaweed API data
        var msUrl = 'http://magicseaweed.com/api/d2983e394d07724e96404fba11c10485/forecast/?spot_id=' + spotID + '&units=us&fields=timestamp,fadedRating,solidRating,swell.minBreakingHeight,swell.maxBreakingHeight,swell.components.primary.*,wind.*,condition.*';

        $.ajax({
            url: msUrl,
            dataType: 'jsonp',
            // jsonp: "callback",
            success: function(response) {

                // Get current time & current time plus/minus three hours
                var getTime = Date.now();
                var currentTimeSecs = getTime / 1000;
                var backThreeHours = currentTimeSecs - 10800;
                var forwardThreeHours = currentTimeSecs + 10800;

                /* Iterate through forecast objects to get the last forecast (i.e. within the last 3 hours)*/
                for (var i = 0; i < response.length; i++) {

                    var forecastTime = response[i].timestamp;

                    if (forecastTime < currentTimeSecs && forecastTime > backThreeHours) {

                        // Save forecast for parsing other information in a variable
                        var forecastData = response[i];

                    /* if data is not available from within the previous three hours, get the nearest forecast up to 3 hours in the future*/
                    } else if (forecastTime > currentTimeSecs && forecastTime < forwardThreeHours) {

                        // Save forecast for parsing other information in a variable
                        var forecastData = response[i];

                    }
                }

                // Show forecast in the View
                renderSurfConditions(forecastData);

                // Disable error message
                clearTimeout(msRequestTimeout);
            }
        });

    };

    function renderSurfConditions(forecastData) {

        // Save wave break height
        var minBreakHeight = forecastData.swell.minBreakingHeight;
        var maxBreakHeight = forecastData.swell.maxBreakingHeight;

        // If the min and max are the same, just save the min height
        if (minBreakHeight === maxBreakHeight) {
            var waveHeight = minBreakHeight;

        // If the min and max are different, save both as a range
        } else {
            var waveHeight = minBreakHeight + ' ' + '-' + ' ' + maxBreakHeight;
        }

        // Get and save swell height, direction, period
        var swellHeight = forecastData.swell.components.primary.height;
        var swellPeriod = forecastData.swell.components.primary.period;
        var swellDirection = forecastData.swell.components.primary.direction;
        var swellCompassDirection = forecastData.swell.components.primary.compassDirection;

        // Get and sav wind speed and direction
        var windSpeed = forecastData.wind.speed;
        var windDirection = forecastData.wind.direction;
        var compassDirection = forecastData.wind.compassDirection;

        // Get and save current temperature and weather
        var temperature = forecastData.condition.temperature;
        var weather = forecastData.condition.weather;
        var weatherImg = 'http://cdnimages.magicseaweed.com/30x30/' + weather + '.png'
        var windImg = 'img/cloudy-&-wind.png'

        /* Get wave and conditions ratings */
        var rating = [];

        /* Add solid stars to the array equal to number value
        retrieved from MSW*/
        for (var i = 0; i < forecastData.solidRating; i++) {
            rating.push('<img src="img/star_filled.png" />');
        }

        /* Add faded stars to the array equal to number value
        retrieved from MSW*/
        for (var i = 0; i < forecastData.fadedRating; i++) {
            rating.push('<img src="img/star_empty.png" />');
        }

        /* Combine the array into one line of stars to form the overall rating of both the surfing conditions and wave
        quality*/
        var waveRating = rating.join("");

        /* Before rendering the surf conditions, check which surf guide is
        currently open and make sure it matches the API request. This ensures
        that an api request that takes time to download isn't injected
        into another surf guide if the user changed surf guides during
        the api request processing */
        var currentSurfGuide = $('.surf-guide-title').text();
        if (currentSurfGuide.indexOf(breakName) >= 0) {

            $surfGuideTitleContainer = $('.surf-guide-title');

            // Add three columns to the new row
            $surfGuideTitleContainer.after('<div class="col-xs-6 col-sm-3 surf-conditions surf-conditions-wind"></div>');
            $surfGuideTitleContainer.after('<div class="col-xs-6 col-sm-3 surf-conditions surf-conditions-swell"></div>');
            $surfGuideTitleContainer.after('<div class="col-xs-6 col-sm-3 surf-conditions surf-conditions-waves"></div>');
            $surfGuideTitleContainer.after('<div class="col-xs-6 col-sm-3 surf-conditions surf-conditions-weather"></div>');

            $surfConditions = $('.surf-conditions');

            // Cache references to each column

            var $surfConditionsWind = $('.surf-conditions-wind');
            var $surfConditionsSwell = $('.surf-conditions-swell');
            var $surfConditionsWaves = $('.surf-conditions-waves');
            var $surfConditionsWeather = $('.surf-conditions-weather');


            /* Render the temperature and weather image in the left
            side of the newly created conditions window*/
            $surfConditionsWeather.append('<p>' + temperature + " ℉" + '</p>');
            $surfConditionsWeather.append('<img class="img-responsive" src="' + weatherImg + '" alt="Symbol for current weather">');

            /* Render the swell height and period */
            $surfConditionsSwell.append('<p>' + swellHeight + "ft" + ' ' + "primary" + '</p>');
            $surfConditionsSwell.append('<p>' + "@" + ' ' + swellPeriod + 's' + ' ' + swellCompassDirection + '</p>');

            /* Render the breaking wave height, and wave rating from above in
            the center of the conditions window */
            $surfConditionsWaves.append('<p>' + waveHeight + "ft" + '</p>');
            $surfConditionsWaves.append('<p>' + waveRating + '</p>');

            /* Render the wind speed, direction, and wind image in the
            right side of the conditions window*/
            $surfConditionsWind.append('<p>' + windSpeed + "mph" + '</p>');
            $surfConditionsWind.append('<p>' + compassDirection + '</p>');
            $surfConditionsWind.append('<img class="img-responsive" src="' + windImg + '" alt="Symbol for wind">');

            // Add button for closing the surf conditions window
            $surfGuideTitleContainer.append('<button type="button" class="btn btn-default conditions-close-button">Hide Current Conditions</button>');

            /* When the surf conditions button is clicked the surf
            conditions window is closed */
            $('.conditions-close-button').on('click', function(e) {

                // Hide the surf conditions window
                $surfConditions.toggle();

                // Hide the close conditions button
                $('.conditions-close-button').toggle();

                // Make visible the show surf conditions button
                $('.conditions-button').toggle();

            });

        } else {

          return

        }
    }

    function showError () {

        /* Before rendering the error message, check which surf guide is
        currently open and make sure it matches the API request. This ensures
        that an api request that takes time to download isn't injected
        into another surf guide if the user changed surf guides during
        the api request processing */
        var currentSurfGuide = $('.surf-guide-title').text();
        if (currentSurfGuide.indexOf(breakName) >= 0) {

            // Insert a new row above the surf guide
            $('.surf-guide-title').after('<div class="col-xs-12 surf-conditions-error"></div>');

            $('.surf-conditions-error').append('<p class="conditions-error">' + breakName + ' ' + "conditions unavailable =(" + '</p>');

            // Add a button for closing the error window
            $('.surf-guide-title').append('<button type="button" class="btn btn-default conditions-close-button">Close Conditions</button>');

            /* When the conditions close button is clicked remove the error
            message */
            $('.conditions-close-button').on('click', function(e) {

                // Remove conditions row from DOM
                $('.surf-conditions-error').remove();

                // Remove the close conditions button
                $('.conditions-close-button').remove();

                // Make visible the show surf conditions button
                $('.conditions-button').toggle();

            });

        } else {

            return

        };

    };
}

navigator.geolocation.getCurrentPosition(success);

function success(position) {
    currentLat = position.coords.latitude;
    currentLng = position.coords.longitude;
};

// Declare global variables map and infoWindow
var map, infoWindow;

/* Create array of map markers that is globally accessible, particularly by
the ViewModel */
var markers = [];

function initMap() {

  // Create an array of styles for the surf map
    var surfMapStyles = [
      {
        featureType:"all",
        elemntType: "geometry",
        stylers: [
         { visibility: "off" }
        ]
      },{
        featureType:"all",
        elemntType: "labels",
        stylers: [
         { visibility: "off" }
        ]
      },{
        featureType:"water",
        elemntType: "geometry",
        stylers: [
         { color: "#FFFFFF" },
         { visibility: "on" }
        ]
      },{
        featureType:"landscape",
        elemntType: "geometry",
        stylers: [
         { visibility: "on" },
         { color: "#99EB99" }
        ]
      }
    ];

    // Create an array of styles for the driving map
    var driveMapStyles = [
      {
        stylers: [
          { hue: "#99EB99" },
          { saturation: -20 }
        ]
      },{
        featureType:"water",
        elemntType: "geometry",
        stylers: [
         { color: "#FFFFFF" }
        ]
      },{
        featureType: "road",
        elementType: "labels",
        stylers: [
          { visibility: "simplified" }
        ]
      },{
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          { visibility: "off" },
        ]
      },{
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 50 },
          { color: "#00B8E6" }
        ]
      },{
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          { visibility: "none" }
        ]
      },{
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "none" }
        ]
      }
    ];

    /* Create StyledMapType objects and pass the corresponding array of
    styles and name to each one. The name will be displayed in the map
    controls.*/
    var surfMapStyled = new google.maps.StyledMapType(surfMapStyles,
      {name: "Surf"});

    var driveMapStyled = new google.maps.StyledMapType(driveMapStyles,
      {name: "Drive"});

    // Set the options for the map
    var mapOptions = {
        center: new google.maps.LatLng(20.67,-157.505),
                mapTypeControlOptions: {
                    mapTypeIds: ['drive_map_style', 'surf_map_style']
                },
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true
    };

    // Create the map and center on the Hawaiian Islands
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Associate the styled maps with the corresponding MapTypeId
    map.mapTypes.set('surf_map_style', surfMapStyled);
    map.mapTypes.set('drive_map_style', driveMapStyled);

    // Set the surf map to display
    map.setMapTypeId('surf_map_style');

    // Create an info window object for displaying the break name
    infoWindow = new google.maps.InfoWindow();

    generateMarkers();

    addMapButton();

    addMapClickEvent();
}

function generateMarkers () {

    /* Loop through locationData and filter out the coordinates
    & break name for each break. Save the break's coordinates and name
    in their own variables for easy referencing*/
    for(var i = 0; i < locationData.length; i++) {

        var obj = locationData[i];

        // Create a variable to hold each break's coordinates
        var breakCoordinates = ({lat: locationData[i].lat, lng: locationData[i].lng});

        // Create a variable to hold the name of the break
        var breakName = locationData[i].breakName;

        // Create a variable to hold the name of the break location
        var breakLocation = locationData[i].location;

        /* Create a marker and set its position. Pass the variables
        created above as arguments*/
        addMarker(breakName, breakCoordinates, breakLocation, obj);

    }

    // Display markers found in the markers array on the map
    showMarkers(map);

    // Set initial map bounds based on location of markers
    setMapBounds();

}

function addMarker(breakName, breakCoordinates, breakLocation, obj) {

    // Set a variable for custom map marker
    var image = 'img/marker.png';

    var marker = new google.maps.Marker({

        // Set position using the newly created variable
        position: breakCoordinates,

        // Animate markers by dropping them onto the map at page load
        animation: google.maps.Animation.DROP,
        map: map,
        icon: image,

        /* Set the title for the break marker as the name of the wave/location
        of the break. This way it can be searched/filtered in the ViewModel*/
        title: breakName + ' ' + '(' + breakLocation + ')'
    });

    // Add a text box that displays the break name and location when clicked
    addListeners(marker, breakName, obj);
}

function addListeners(marker, breakName, obj) {

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

    google.maps.event.addListener(marker, 'click', (function(marker, breakName, obj) {

        /* Create an inner function what will at the time of iteration save
        the individual break's name (breakName) within the infoWindow and
        attach it to the relevant marker */
        return function() {
            getInfoWindow(marker, breakName);

            // Bounce marker upon clicking
            animateMarker(marker);

            /* Show surf guide (only if surf guide is already open) when the
            marker is clicked */
            if ($('.surf-guide-container').is(":visible")) {
                /* Remove any visible surf conditions so they aren't still
                displayed when the new surf guide renders */
                $('.surf-conditions').remove();
                renderSurfGuide(obj);
            } else {
                /* If the surf guide isn't open, hide all location frames
                except the one related to the marker */
                showLocationFrame(breakName);
            }
        }

    /* Pass the relevant marker and break name (breakName) for the current
    iteration as an argument into the function*/
    })(marker, breakName, obj));

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

function addMapButton () {

    // Add button for hiding the map
    $('.map-container').prepend('<button type="button" class="btn hide-map-button">▼</button>');

    $('.hide-map-button').on('click', function(e) {

        // Either hide or reveal the map depending the last click
        $('#map').toggle();

        if (!$('#map').is(":visible")) {
            // Replace map text
            $(this).text('▲');
        } else {
            // Replace map text
            $(this).text('▼');
        };

        /* Show the locations in case a marker has been selected. This will display the whole list of locations again */
        $('.location-frame').show();

    });
}

function showLocationFrame (breakName) {

    // Loop through all of the location frames
    $('.location-frame').each(function() {

        var $this = $(this);

        /* If a specific location frame's text matches the currenlty selected
        break, show it and hide the others*/
        if($this.text().indexOf(breakName) >= 0) {
            var match = ($this);
            $('.location-frame').hide();
            match.show();
        }
    });
}

function addMapClickEvent () {

    /* When the map is clicked, location frames are made visible. This is useful if they were hidden as a result of a marker being clicked.
    In addition, all open info windows are closed */
    map.addListener('click', function() {

        /* If the surf guide isn't visible show the locations, otherwise
        do nothing (just close the info windows) */
        if (!$('.surf-guide-container').is(":visible")) {
            $('.location-frame').show();
        }
            infoWindow.close();
    });
}


ko.applyBindings(new AppViewModel);