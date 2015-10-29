

var locationData = [
    {
      breakName: 'Sunset Beach',
      location: 'Oahu, Hawaii',
      bigWave: true,
      wellKnown: false,
      cost: {budget: 100, highEnd: 250},
      skillLevel: ['advanced'],
      waveDirection: 'left',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['W', 'NW'],
      optimalWind: ['E', 'SSE'],
      optimalTide: ['mid'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Aw',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: ['barnacles', 'beginners', 'boats'],
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
      cost: {budget: 50, highEnd: 150},
      skillLevel: ['advanced'],
      waveDirection: 'right',
      breakDetails: 'beach',
      avgSize: {min: 3, max: 7, aboveMax: true},
      optimalSwell: ['E', 'SE'],
      optimalWind: ['E', 'SW'],
      optimalTide: ['high'],
      optimalTime: [' Mar', ' Jan', ' Feb', ' Apr', ' May'],
      climate: 'Af',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 75, winter: 77},
      hazards: ['crocs', 'crowded', 'dangerous break'],
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
      cost: {budget: 125, highEnd: 300},
      skillLevel: ['advanced'],
      waveDirection: 'left & right',
      breakDetails: 'point',
      avgSize: {min: 5, max: 8, aboveMax: true},
      optimalSwell: ['N', 'S'],
      optimalWind: ['N', 'NNE'],
      optimalTide: ['high', 'low'],
      optimalTime: [' Sep', ' Oct', ' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'BW',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 66, winter: 77},
      hazards: ['far from shore', 'pollution', 'rocky bottom'],
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
      cost: {budget: 20, highEnd: 50},
      skillLevel: ['intermediate'],
      waveDirection: 'right',
      breakDetails: 'river mouth',
      avgSize: {min: 10, max: 17, aboveMax: false},
      optimalSwell: ['ESE', 'SSW'],
      optimalWind: ['W', 'WSW'],
      optimalTide: ['high'],
      optimalTime: [' Dec', ' Jan', ' Feb', ' Mar', ' Apr', ' Jun', ' Jul'],
      climate: 'Cfa',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 74, winter: 77},
      hazards: ['sea snakes', 'seals', 'seaweed'],
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
      cost: {budget: 50, highEnd: 100},
      skillLevel: ['beginner'],
      waveDirection: 'left',
      breakDetails: 'point',
      avgSize: {min: 7, max: 9, aboveMax: false},
      optimalSwell: ['WSW', 'NNW'],
      optimalWind: ['WSW', 'SSE'],
      optimalTide: ['high', 'mid', 'low'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Cfc',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 79, winter: 77},
      hazards: ['sewage', 'shallow', 'sharks'],
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
      cost: {budget: 30, highEnd: 60},
      skillLevel: ['beginner', 'intermediate', 'advanced'],
      waveDirection: 'left & right',
      breakDetails: 'river mouth',
      avgSize: {min: 20, max: 25, aboveMax: true},
      optimalSwell: ['W', 'NW'],
      optimalWind: ['SE', 'SW'],
      optimalTide: ['mid', 'low'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'BWh',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 73, winter: 77},
      hazards: ['strong currents', 'strong rips', 'theft'],
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
      cost: {budget: 15, highEnd: 35},
      skillLevel: ['advanced'],
      waveDirection: 'left',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['WNW', 'NE'],
      optimalWind: ['NE', 'ESE'],
      optimalTide: ['high', 'mid'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'BWk',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 71, winter: 77},
      hazards: ['undertow', 'unfriendly', 'urchins'],
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
      cost: {budget: 20, highEnd: 50},
      skillLevel: ['advanced'],
      waveDirection: 'left',
      breakDetails: 'reef',
      avgSize: {min: 11, max: 16, aboveMax: true},
      optimalSwell: ['W', 'NW'],
      optimalWind: ['ENE', 'S'],
      optimalTide: ['low', 'mid', 'high'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Am',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 76, winter: 77},
      hazards: ['sharks', 'crowded', 'boats', 'shallow'],
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
      cost: {budget: 35, highEnd: 75},
      skillLevel: ['advanced'],
      waveDirection: 'right',
      breakDetails: 'point',
      avgSize: {min: 5, max: 8, aboveMax: true},
      optimalSwell: ['SSE', 'ESE'],
      optimalWind: ['W', 'N'],
      optimalTide: ['high', 'low'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Dfa',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 98, winter: 77},
      hazards: ['strong currents', 'crowded', 'seals', 'beginners', 'barnacles'],
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
      cost: {budget: 200, highEnd: 600},
      skillLevel: ['intermediate'],
      waveDirection: 'left',
      breakDetails: 'river mouth',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['SSW', 'NE'],
      optimalWind: ['E'],
      optimalTide: ['high', 'mid'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Dfd',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 86, winter: 77},
      hazards: ['strong currents', 'crowded', 'crocs', 'sewage'],
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
      cost: {budget: 5, highEnd: 25},
      skillLevel: ['beginner'],
      waveDirection: 'right',
      breakDetails: 'beach',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['WNW', 'N'],
      optimalWind: ['SW'],
      optimalTide: ['high', 'mid', 'low'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Cwa',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 45, winter: 77},
      hazards: ['sharks', 'crowded', 'seaweed', 'urchins', 'sea snakes'],
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
      cost: {budget: 10, highEnd: 25},
      skillLevel: ['intermediate'],
      waveDirection: 'left & right',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['W', 'S'],
      optimalWind: ['E', 'NNE'],
      optimalTide: ['low'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'BSh',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 36, winter: 77},
      hazards: ['crowded', 'sharks', 'dangerous break'],
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
      cost: {budget: 45, highEnd: 85},
      skillLevel: ['beginner'],
      waveDirection: 'right',
      breakDetails: 'beach',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['N', 'E'],
      optimalWind: ['NE', 'S'],
      optimalTide: ['mid'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Cfc',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: ['crowded', 'strong currents', 'rocky bottom', 'far from shore'],
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
      cost: {budget: 60, highEnd: 100},
      skillLevel: ['intermediate'],
      waveDirection: 'left & right',
      breakDetails: 'river mouth',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['SSE', 'NNE'],
      optimalWind: ['W', 'SSW'],
      optimalTide: ['high'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Cfb',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: ['strong currents', 'crowded'],
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
      cost: {budget: 20, highEnd: 55},
      skillLevel: ['beginner'],
      waveDirection: 'right',
      breakDetails: 'beach',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['WSW', 'ENE'],
      optimalWind: ['NNE', 'NE'],
      optimalTide: ['high', 'low'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Csb',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: ['sharks', 'crowded', 'seaweed', 'boats'],
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
      cost: {budget: 10, highEnd: 30},
      skillLevel: ['intermediate'],
      waveDirection: 'left & right',
      breakDetails: 'point',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['NE', 'NW'],
      optimalWind: ['ESE', 'SE'],
      optimalTide: ['high'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Dwa',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: ['strong currents', 'crowded', 'beginners', 'shallow'],
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
      cost: {budget: 60, highEnd: 185},
      skillLevel: ['advanced'],
      waveDirection: 'left',
      breakDetails: 'beach',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['W', 'NW'],
      optimalWind: ['E', 'S'],
      optimalTide: ['low'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Dwd',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: ['sharks', 'crowded','strong rips'],
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
      cost: {budget: 70, highEnd: 120},
      skillLevel: ['beginner'],
      waveDirection: 'left & right',
      breakDetails: 'reef',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['S', 'SW'],
      optimalWind: ['N', 'S'],
      optimalTide: ['mid'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Am',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: ['crowded', 'strong rips', 'unfriendly'],
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
      cost: {budget: 10, highEnd: 30},
      skillLevel: ['intermediate', 'advanced'],
      waveDirection: 'left',
      breakDetails: 'beach',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['W', 'E'],
      optimalWind: ['NE', ' ENE'],
      optimalTide: ['mid', 'low'],
      optimalTime: [' Nov', ' Dec', ' Jan', ' Feb'],
      climate: 'Bsh',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: ['strong currents', 'crowded', 'unfriendly', 'urchins'],
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
      cost: {budget: 5, highEnd: 25},
      skillLevel: ['beginner', 'intermediate'],
      waveDirection: 'left & right',
      breakDetails: 'point',
      avgSize: {min: 5, max: 16, aboveMax: true},
      optimalSwell: ['W', 'NW'],
      optimalWind: ['SSE', 'N'],
      optimalTide: ['high', 'low'],
      optimalTime: [' Jan', ' Feb', ' Mar', ' Apr', ' May', ' Jun', ' Jul', ' Aug', ' Sep', ' Oct', ' Nov', ' Dec'],
      climate: 'Aw',
      avgWaterTemp: {spring: 77, summer: 80, autumn: 80, winter: 77},
      hazards: ['sharks', 'crowded', 'undertow'],
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
    var rollover;

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

                        rollover = true;

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

                            img.css('-webkit-filter', 'blur(4px) brightness(80%)' );
                            location.toggle()
                            breakName.toggle();

                            /* Display icon associated with the skill level
                            needed to surf the break */

                            displaySkillIcon(obj.skillLevel);
                            var skillLevelInfo = skillLevelIcon;

                            /* Display the icon associated with the type of
                            break it is (i.e. what kind of surface is beneath
                            it */

                            displayBreakIcon(obj.breakDetails);
                            var breakTypeInfo = breakIcon;

                            /* Display the icon associated with the direction
                            the wave breaks */

                            displayDirectionIcon(obj.waveDirection);
                            var waveDirectionInfo = directionIcon;

                            /* Display the icon for the best month in which to
                            surf at the specific break*/

                            displayBestSeasonIcon(obj.optimalTime);
                            var bestSeasonInfo = bestSeasonIcon;

                            /* If there is big wave surfing at this break
                            display big wave icon. If not, display the
                            related climate icon */
                            if(obj.bigWave) {
                                var miscInfoOne = '<img src="/img/big_wave_ro.svg" class="rollover-info misc-info-one-hover">';
                            } else {
                                var miscInfoOne = '<img src="img/empty_ro_marquee.svg" class="rollover-info misc-info-one-hover">' + '<p class="rollover-info climate-info-hover">' + obj.climate  + '</p>';
                            }
/*

                            /* If there is big wave surfing at this break
                            display big wave icon. If not, display the
                            related climate icon *
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
                            first in the array purposfully *
                            if(obj.wellKnown) {
                                var miscInfoTwo = '<img src="/img/marquee.png" class="rollover-info misc-info-two">';
                            } else if (obj.hazards[0] === ' strong currents') {
                                var miscInfoTwo = '<img src="/img/marquee.png" class="rollover-info misc-info-two">';
                            } else if (obj.hazards[0] === ' crowds') {
                                var miscInfoTwo = '<img src="/img/marquee.png" class="rollover-info misc-info-two">';
                            } else if (obj.hazards[0] === ' sharks') {
                                var miscInfoTwo = '<img src="/img/marquee.png" class="rollover-info misc-info-two">';
                            };

                            /* Display the budget cost for the location *
                            var costInfo = '<p class="rollover-info cost">' + '$' + obj.cost.budget + '/' + 'day' + '</p>';

                            /* Get distance between both locations using
                            the Haversine formula *
                            /* Obtain current location from user *
                            var latOrigin = currentLat;
                            var lngOrigin = currentLng;

                            /* Obtain location data for the selected break *
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
                            current month *
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

                            /* Cache the water temp element *
                            var waterTempInfo = '<p class="rollover-info water-temp">' + waterTemp + '℉' + '</p>';

                            /* Check if the average maximum wave size
                            sometimes goes above the max. If it does, save a plus sign in a variable to add to the min/max wave height *
                            if (obj.avgSize.aboveMax) {
                                var plus = '+';
                            } else {
                                var plus = '';
                            };

                            /* Cache the average wave size element *
                            var waveSizeInfo = '<p class="rollover-info wave-size">'+ obj.avgSize.min + "-" + obj.avgSize.max + plus + "ft" +'</p>';
*/
                            /* Append all cached elements to the selected
                            location frame */
                            locationFrame.append(skillLevelInfo);
                            locationFrame.append(breakTypeInfo);
                            locationFrame.append(waveDirectionInfo);
                            locationFrame.append(bestSeasonInfo);
                            locationFrame.append(miscInfoOne);/*
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
                            var bestSeason = $('.best-season');
                            var miscInfoOne = $('.misc-info-one');/*
                            var miscInfoTwo = $('.misc-info-two');
                            var cost = $('.cost');
                            var distance = $('.distance');
                            var waterTemp = $('.water-temp');
                            var waveSize = $('.wave-size');*/

                            $(skillLevel).addClass('rollover-info skill-level-hover');
                            $(breakType).addClass('rollover-info break-type-hover');
                            $(waveDirection).addClass('rollover-info wave-direction-hover');
                            $(bestSeason).addClass('rollover-info best-season-hover');


                            /* Position the misc icon. It's either
                            the big wave or climate icon *
                            miscInfoOne.css({
                              "position": "absolute",
                              "bottom" : "20%",
                              "left" : "0",
                              "right" : "0",
                              "margin" : "0 auto",
                              "height" : "60px"
                            });

                            /* Position the misc icon. It's either
                            the well known or hazard icon *
                            miscInfoTwo.css({
                              "position": "absolute",
                              "bottom" : "20%",
                              "right" : "20%",
                              "height" : "60px"
                            });

                            /* Position the cost info *
                            cost.css({
                              "font-size" : "1.25em",
                              "color" : "white",
                              "text-shadow" : "1px 1px 10px black",
                              "position" : "absolute",
                              "top" : "10px",
                              "left" : "15px"
                            });

                            /* Position the distance info *
                            distance.css({
                              "font-size" : "1.25em",
                              "color" : "white",
                              "text-shadow" : "1px 1px 10px black",
                              "position" : "absolute",
                              "top" : "10px",
                              "right" : "15px"
                            });

                            /* Position the water temp info *
                            waterTemp.css({
                              "font-size" : "1.25em",
                              "color" : "white",
                              "text-shadow" : "1px 1px 10px black",
                              "position" : "absolute",
                              "bottom" : "0",
                              "right" : "15px"
                            });

                            /* Position the wave size info *
                            waveSize.css({
                              "font-size" : "1.25em",
                              "color" : "white",
                              "text-shadow" : "1px 1px 10px black",
                              "position" : "absolute",
                              "bottom" : "0",
                              "left" : "17px"
                            });*/
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

            // Disable rollover effects so the correct icon loads in surf guide
            rollover = false;

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

        // Check if break has big waves and render
        if (obj.bigWave) {
            $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 big-wave card">' + '<img src="img/big_wave.svg" class="icon big-wave-guide">' + '</div>');
        };

        // Check if break is well known
        if (obj.wellKnown) {
            $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 well-known card">' + '<img src="img/well_known.svg">' + '</div>');
        }


        /* Display icon associated with the skill level
        needed to surf the break */
        displaySkillIcon(obj.skillLevel);

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 difficulty card">' + skillLevelIcon + '</div>');

        $('.skill-level').addClass('skill-level-guide');


        /* Display the icon associated with the direction
        the wave breaks */
        displayDirectionIcon(obj.waveDirection);

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 direction card">' + directionIcon + '</div>');

        $('.wave-direction').addClass('wave-direction-guide');


        // Display the icon for the break details
        displayBreakIcon(obj.breakDetails);

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 break card">' + breakIcon + '</div>');

        $('.break-type').addClass('break-type-guide');


        /* Check if the average maximum wave size sometime goes above the max.
        If it does, save a plus sign in a variable to add to the min/max wave
        height */
        if (obj.avgSize.aboveMax) {
            var plus = '+';
        } else {
            var plus = '';
        }


        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 wave-height card">' + '<img src="img/wave_range.svg">' + '<p>' + obj.avgSize.min + "-" + obj.avgSize.max + plus + "ft" + '</p>' + '</div>');


        // Render optimal swell compass
        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 swell card"><canvas id="compass-swell" width="160" height="160"></canvas></div>');


        renderSwellCompass();

        function renderSwellCompass () {

              var Canvas = document.getElementById('compass-swell');

              var ctx = Canvas.getContext('2d');

              var pointer = new Image();
              pointer.src = 'img/compass_swell_pointer.svg';

              var img = new Image();
              img.src = 'img/compass_guide.svg';
              img.onload = draw;

              function draw() {


                    ctx.drawImage(img, 0, 0);

                    ctx.save();

                    ctx.translate(80, 80);

                    for (var i = 0; i < obj.optimalSwell.length; i++) {

                          switch (obj.optimalSwell[i]) {
                                case 'N':
                                      var swellDirection = 0;
                                break;

                                case 'NNE':
                                      var swellDirection = 22.5;
                                break;

                                case 'NE':
                                      var swellDirection = 45;
                                break;

                                case 'ENE':
                                      var swellDirection = 67.5;
                                break;

                                case 'E':
                                      var swellDirection = 90;
                                break;

                                case 'ESE':
                                      var swellDirection = 112.5;
                                break;

                                case 'SE':
                                      var swellDirection = 135;
                                break;

                                case 'SSE':
                                      var swellDirection = 157.5;
                                break;

                                case 'S':
                                      var swellDirection = 180;
                                break;

                                case 'SSW':
                                      var swellDirection = 202.5;
                                break;

                                case 'SW':
                                      var swellDirection = 225;
                                break;

                                case 'WSW':
                                      var swellDirection = 247.5;
                                break;

                                case 'W':
                                      var swellDirection = 270;
                                break;

                                case 'WNW':
                                      var swellDirection = 292.5;
                                break;

                                case 'NW':
                                      var swellDirection = 315;
                                break;

                                case 'NNW':
                                      var swellDirection = 337.5;
                                break;
                          }

                                var pointerAngle = swellDirection * (Math.PI / 180);

                                ctx.rotate(pointerAngle);

                                ctx.drawImage(pointer, -80, -80);

                                ctx.rotate(-pointerAngle);
                    }

                    ctx.restore();
              };
        };


        // Render optimal wind compass
        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 wind card"><canvas id="compass-wind" width="160" height="160"></canvas></div>');


        renderWindCompass();

        function renderWindCompass () {

              var Canvas = document.getElementById('compass-wind');

              var ctx = Canvas.getContext('2d');

              var pointer = new Image();
              pointer.src = 'img/compass_wind_pointer.svg';

              var img = new Image();
              img.src = 'img/compass_guide.svg';
              img.onload = draw;

              function draw() {

                    ctx.drawImage(img, 0, 0);

                    ctx.save();

                    ctx.translate(80, 80);

                    for (var i = 0; i < obj.optimalWind.length; i++) {

                          switch (obj.optimalWind[i]) {
                                case 'N':
                                      var windDirection = 0;
                                break;

                                case 'NNE':
                                      var windDirection = 22.5;
                                break;

                                case 'NE':
                                      var windDirection = 45;
                                break;

                                case 'ENE':
                                      var windDirection = 67.5;
                                break;

                                case 'E':
                                      var windDirection = 90;
                                break;

                                case 'ESE':
                                      var windDirection = 112.5;
                                break;

                                case 'SE':
                                      var windDirection = 135;
                                break;

                                case 'SSE':
                                      var windDirection = 157.5;
                                break;

                                case 'S':
                                      var windDirection = 180;
                                break;

                                case 'SSW':
                                      var windDirection = 202.5;
                                break;

                                case 'SW':
                                      var windDirection = 225;
                                break;

                                case 'WSW':
                                      var windDirection = 247.5;
                                break;

                                case 'W':
                                      var windDirection = 270;
                                break;

                                case 'WNW':
                                      var windDirection = 292.5;
                                break;

                                case 'NW':
                                      var windDirection = 315;
                                break;

                                case 'NNW':
                                      var windDirection = 337.5;
                                break;
                          }

                                var pointerAngle = windDirection * (Math.PI / 180);

                                ctx.rotate(pointerAngle);

                                ctx.drawImage(pointer, -80, -80);

                                ctx.rotate(-pointerAngle);
                    }

                    ctx.restore();
              };
        };

        /* Display icon associated with the optimal tide */
        // Set variables for each skill level at zero
        var low = 0;
        var mid = 0;
        var high = 0;

        for (var i = 0; i < obj.optimalTide.length; i++) {
            switch (obj.optimalTide[i]) {
                case 'low':
                    low++;
                break;

                case 'mid':
                    mid++;
                break;

                case 'high':
                    high++;
                break
            }
        };

        if (low === mid && high) {
            var tideIcon = '<img src="/img/tide_all.svg">';
        } else if (low >= mid && low >= high) {
              if(low === mid) {
                  var tideIcon = '<img src="/img/tide_low_mid.svg">';
              } else if (low === high) {
                  var tideIcon = '<img src="/img/tide_low_high.svg">';
              } else {
                  var tideIcon = '<img src="/img/tide_low.svg">';
              };
        } else if (mid > low && mid >= high) {
              if(mid === high) {
                  var tideIcon = '<img src="/img/tide_high_mid.svg">';
              } else {
                  var tideIcon = '<img src="/img/tide_mid.svg">';
              };
        } else {
            var tideIcon = '<img src="/img/tide_high.svg">';
        };

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 tide card">' + tideIcon + '</div>');



        displayBestSeasonIcon(obj.optimalTime);

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 time card">' + bestSeasonIcon + '</div>');

        $('.best-season').addClass('best-season-guide');



        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 water-temp spring card">' + '<canvas id="spring" width="160" height="160"></canvas>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 water-temp summer card">' + '<canvas id="summer" width="160" height="160"></canvas>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 water-temp autumn card">' + '<canvas id="autumn" width="160" height="160"></canvas>');

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 water-temp winter card">' + '<canvas id="winter" width="160" height="160"></canvas>');

        var season = 0;
        /* Loop through the average water temps for each time of year. Designate specific water attire for each time of year*/
        for (var temp in obj.avgWaterTemp) {

            season++;

            if(obj.avgWaterTemp[temp] > 72) {
                var gear = 'img/water_attire_boardies.svg';
            } else if (obj.avgWaterTemp[temp] > 66) {
                var gear = 'img/water_attire_2mm_wetsuit.svg';
            } else if (obj.avgWaterTemp[temp] > 59) {
                var gear = 'img/water_attire_3mm_wetsuit.svg';
            } else if (obj.avgWaterTemp[temp] > 54) {
                var gear = 'img/water_attire_4mm_wetsuit.svg';
            } else if (obj.avgWaterTemp[temp] > 48) {
                var gear = 'img/water_attire_5mm_wetsuit.svg';
            } else if (obj.avgWaterTemp[temp] <= 48) {
                var gear = 'img/water_attire_6mm_wetsuit.svg';
            };

            drawSeason(gear, season);
        };

        function drawSeason(gear, season) {

            if(season === 1) {
                var Canvas = document.getElementById('spring');
                var seasonImg = 'img/water_temp_spring.svg';
            } else if (season === 2) {
                var Canvas = document.getElementById('summer');
                var seasonImg = 'img/water_temp_summer.svg';
            } else if (season === 3) {
                var Canvas = document.getElementById('autumn');
                var seasonImg = 'img/water_temp_autumn.svg';
            } else {
                var Canvas = document.getElementById('winter');
                var seasonImg = 'img/water_temp_winter.svg';
            };

            var ctx = Canvas.getContext('2d');

            var attire = new Image();
            attire.src = gear;

            var seasonBackground = new Image();
            seasonBackground.src = seasonImg;
            seasonBackground.onload = drawAttire;

                function drawAttire () {

                    ctx.drawImage(seasonBackground, 0, 0);
                    ctx.drawImage(attire, 0, 0);
                }
        }

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
              $('#winter').addClass("highlight-attire");
          break;

          case 2:
          case 3:
          case 4:
              $('#spring').addClass("highlight-attire");
          break;

          case 5:
          case 6:
          case 7:
              $('#summer').addClass("highlight-attire");
          break;

          case 8:
          case 9:
          case 10:
              $('#autumn').addClass("highlight-attire");
          break;
        }

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 climate card">' + '<img src="img/empty_marquee.svg" class="icon climate-guide">' + '<p>' + obj.climate  + '</p>' + '</div>');

        var midRange = Math.floor((obj.cost.highEnd - obj.cost.budget)/2 + obj.cost.budget);

        $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 cost card">' + '<img src="img/cost.svg">' + '<p>' + obj.cost.budget + '</p>' + '<p>' + midRange + '</p>' + '<p>' + obj.cost.highEnd +'</p>' + '</div>');

        var hazardsLength = obj.hazards.length;

        for (var i = hazardsLength; i--;) {

            switch (obj.hazards[i]) {

                case 'barnacles':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_barnacles.svg">' + '</div>');
                break;

                case 'beginners':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_beginners.svg">' + '</div>');
                break;

                case 'boats':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_boats.svg">' + '</div>');
                break;

                case 'crocs':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_crocs.svg">' + '</div>');
                break;

                case 'crowded':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_crowded.svg">' + '</div>');
                break;

                case 'dangerous break':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_dangerous_break.svg">' + '</div>');
                break;

                case 'far from shore':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_far_from_shore.svg">' + '</div>');
                break;

                case 'pollution':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_pollution.svg">' + '</div>');
                break;

                case 'rocky bottom':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_rocky_bottom.svg">' + '</div>');
                break;

                case 'sea snakes':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_sea_snakes.svg">' + '</div>');
                break;

                case 'seals':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_seals.svg">' + '</div>');
                break;

                case 'seaweed':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_seaweed.svg">' + '</div>');
                break;

                case 'sewage':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_sewage.svg">' + '</div>');
                break;

                case 'shallow':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_shallow.svg">' + '</div>');
                break;

                case 'sharks':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_sharks.svg">' + '</div>');
                break;

                case 'strong currents':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_strong_currents.svg">' + '</div>');
                break;

                case 'strong rips':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_strong_rips.svg">' + '</div>');
                break;

                case 'theft':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_theft.svg">' + '</div>');
                break;

                case 'undertow':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_undertow.svg">' + '</div>');
                break;

                case 'unfriendly':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_unfriendly.svg">' + '</div>');
                break;

                case 'urchins':

                    $surfGuideContainer.append('<div class="col-xs-6 col-sm-3 hazard card">' + '<img src="img/hazards_urchins.svg">' + '</div>');
                break;

            }
        };

        addGuideButtons(obj);

    };

    /* Create buttons for opening closing surf guide / view current break
    conditions */
    self.addGuideButtons = function (obj) {
        // Add a button for closing the surf guide
        $surfGuideContainer.prepend('<button type="button" class="btn guide-close-button">✖</button>');

        // Add a button for displaying surf conditions
        $('.surf-guide-title').append('<button type="button" class="btn btn-default conditions-button">Current Condtions</button>');

        /* When the surf conditions button is clicked, display current
        conditions */
        $('.conditions-button').on('click', function(e) {

            /* If surf conditions for a particular location have already
            been displayed, simply make visible again */
            if ($('.surf-conditions').is(":hidden")) {

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

    function displaySkillIcon (obj) {
        // Set variables for each skill level at zero
        var beginner = 0;
        var intermediate = 0;
        var advanced = 0;

        var skillLevelLength = obj.length;

        for (var i = skillLevelLength; i--;) {
            switch (obj[i]) {
                case 'beginner':
                    beginner++;
                break;

                case 'intermediate':
                    intermediate++;
                break;

                case 'advanced':
                    advanced++;
                break
            }
        };

        if (beginner === intermediate && beginner === advanced) {
            if(rollover){
                skillLevelIcon = '<img src="/img/skill_level_ro_all.svg" class="icon skill-level">';
            } else {
                skillLevelIcon = '<img src="/img/skill_level_all.svg" class="icon skill-level">';
            }
        } else if (beginner >= intermediate && beginner > advanced) {
            if(beginner === intermediate) {
                if(rollover){
                    skillLevelIcon = '<img src="/img/skill_level_ro_beginner_intermediate.svg" class="icon skill-level">';
                } else {
                    skillLevelIcon = '<img src="/img/skill_level_beginner_intermediate.svg" class="icon skill-level">'
                }
            } else {
                if(rollover){
                    skillLevelIcon = '<img src="/img/skill_level_ro_beginner.svg" class="icon skill-level">';
                } else {
                    skillLevelIcon = '<img src="/img/skill_level_beginner.svg" class="icon skill-level">'
                }
            };
        } else if (intermediate > beginner && intermediate >= advanced) {
            if(intermediate === advanced) {
                if(rollover){
                    skillLevelIcon = '<img src="/img/skill_level_ro_intermediate_advanced.svg" class="icon skill-level">';
                } else {
                    skillLevelIcon = '<img src="/img/skill_level_intermediate_advanced.svg" class="icon skill-level">'
                }
            } else {
                if(rollover){
                    skillLevelIcon = '<img src="/img/skill_level_ro_intermediate.svg" class="icon skill-level">';
                } else {
                    skillLevelIcon = '<img src="/img/skill_level_intermediate.svg" class="icon skill-level">'
                }
            };
        } else {
            if(rollover){
                skillLevelIcon = '<img src="/img/skill_level_ro_advanced.svg" class="icon skill-level">';
            } else {
                skillLevelIcon = '<img src="/img/skill_level_advanced.svg" class="icon skill-level">'
            }
        };

    }

    function displayBreakIcon (obj) {
        switch(obj) {
          case 'reef':
              if(rollover) {
                  breakIcon = '<img src="/img/break_ro_reef.svg" class="icon break-type">';
              } else {
                  breakIcon = '<img src="/img/break_reef.svg" class="icon break-type">';
              }
          break;

          case 'beach':
              if(rollover) {
                  breakIcon = '<img src="/img/break_ro_beach.svg" class="icon break-type">';
              } else {
                  breakIcon = '<img src="/img/break_beach.svg" class="icon break-type">';
              }
          break;

          case 'point':
              if(rollover) {
                  breakIcon = '<img src="/img/break_ro_point.svg" class="icon break-type">';
              } else {
                  breakIcon = '<img src="/img/break_point.svg" class="icon break-type">';
              }
          break;

          case 'river mouth':
              if(rollover) {
                  breakIcon = '<img src="/img/break_ro_river_mouth.svg" class="icon break-type">';
              } else {
                  breakIcon = '<img src="/img/break_river_mouth.svg" class="icon break-type">';
              }
          break;
        }
    }

    function displayDirectionIcon (obj) {
        switch(obj) {
          case 'left':
              if(rollover) {
                  directionIcon = '<img src="/img/direction_ro_left.svg" class="icon wave-direction">';
              } else {
                  directionIcon = '<img src="/img/direction_left.svg" class="icon wave-direction">';;
              }
          break;

          case 'right':
              if(rollover) {
                  directionIcon = '<img src="/img/direction_ro_right.svg" class="icon wave-direction">';
              } else {
                  directionIcon = '<img src="/img/direction_right.svg" class="icon wave-direction">';;
              }
          break;

          case 'left & right':
              if(rollover) {
                  directionIcon = '<img src="/img/direction_ro_both.svg" class="icon wave-direction">';
              } else {
                  directionIcon = '<img src="/img/direction_both.svg" class="icon wave-direction">';;
              }
          break;
        }

    }

    function displayBestSeasonIcon (obj) {

        // Set variables for each season at zero
        var spring = 0;
        var summer = 0;
        var autumn = 0;
        var winter = 0;

        /* Tally the number of months fall into a
        particular season */

        var bestSeasonLength = obj.length;

        for (var i = bestSeasonLength; i--;) {
            switch (obj[i]) {
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
        if (winter === spring && winter === summer && winter === autumn) {
            if(rollover) {
                bestSeasonIcon = '<img src="/img/season_ro_all.svg" class="icon best-season">';
            } else {
                bestSeasonIcon = '<img src="/img/season_all.svg" class="icon best-season">';
            };
        } else if(winter >= spring && winter >= summer && winter >= autumn) {
              if(winter === spring) {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_winter_spring.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_winter_spring.svg" class="icon best-season">';
                  };
              } else if (winter === summer) {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_winter_summer.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_winter_summer.svg" class="icon best-season">';
                  };
              } else if (winter === autumn) {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_winter_autumn.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_winter_autumn.svg" class="icon best-season">';
                  };
              } else {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_winter.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_winter.svg" class="icon best-season">';
                  };
              };
        } else if (spring >= summer && spring >= autumn && spring > winter) {
              if (spring === summer) {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_spring_summer.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_spring_summer.svg" class="icon best-season">';
                  };
              } else if (spring === autumn) {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_spring_autumn.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_spring_autumn.svg" class="icon best-season">';
                  };
              } else {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_spring.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_spring.svg" class="icon best-season">';
                  };
              };
        } else if (summer >= autumn && summer > winter && summer > spring) {
              if(summer === autumn) {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_summer_autumn.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_summer_autumnsvg" class="icon best-season">';
                  };
              } else {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_summer.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_summer.svg" class="icon best-season">';
                  };
              };
        } else {
                  if(rollover) {
                      bestSeasonIcon = '<img src="/img/season_ro_autumn.svg" class="icon best-season">';
                  } else {
                      bestSeasonIcon = '<img src="/img/season_autumn.svg" class="icon best-season">';
                  };
        };
    }
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
            rating.push('<img class="star" src="img/star_filled.svg" />');
        }

        /* Add faded stars to the array equal to number value
        retrieved from MSW*/
        for (var i = 0; i < forecastData.fadedRating; i++) {
            rating.push('<img class="star" src="img/star_faded.svg" />');
        }

        var fillEmptyStars = 5 - rating.length;

        for (var i = 0; i < fillEmptyStars; i++) {
            rating.push('<img class="star" src="img/star_empty.svg" />');
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

            // Add compass column
            $surfGuideTitleContainer.after('<div class="col-xs-12 col-sm-6 compass-conditions surf-conditions compass"><canvas id="compass" width="300" height="300"></canvas></div>');

            // Add container to hold live conditions
            $surfGuideTitleContainer.after('<div class="col-xs-12 surf-conditions-container surf-conditions"></div>');

            $surfConditionsContainer = $('.surf-conditions-container');

            // Add live conditions columns
            $surfConditionsContainer.append('<div class="col-xs-12 col-sm-6 surf-conditions surf-conditions-small surf-conditions-waves"></div>');
            $surfConditionsContainer.append('<div class="col-xs-6 col-sm-3 surf-conditions surf-conditions-small surf-conditions-swell"></div>');
            $surfConditionsContainer.append('<div class="col-xs-6 col-sm-3 surf-conditions surf-conditions-small surf-conditions-wind"></div>');

            /* Render the temperature and weather image in the left
            side of the newly created conditions window*/
            $('.title').after('<p class="live-temp surf-conditions">' + temperature + " ℉" + '<img class="live-weather" src="' + weatherImg + '" alt="Symbol for current weather">' + '</p>');
            $surfConditions = $('.surf-conditions');

            // Cache references to each column

            var $surfConditionsWind = $('.surf-conditions-wind');
            var $surfConditionsSwell = $('.surf-conditions-swell');
            var $surfConditionsWaves = $('.surf-conditions-waves');

            /* Render the swell height and period */
            $surfConditionsSwell.append('<p>' + swellHeight + "ft" + '</p>');
            $surfConditionsSwell.append('<p>' + "primary" + '</p>');
            $surfConditionsSwell.append('<p>' + "@" + ' ' + swellPeriod + 's' + ' ' + swellCompassDirection + '</p>');

            /* Render the breaking wave height, and wave rating from above in
            the center of the conditions window */
            $surfConditionsWaves.append('<p>' + waveHeight + "ft" + '</p>');
            $surfConditionsWaves.append('<p>' + waveRating + '</p>');

            /* Render the wind speed, direction, and wind image in the
            right side of the conditions window*/
            $surfConditionsWind.append('<p>' + windSpeed + "mph" + '</p>');
            $surfConditionsWind.append('<img class="img-responsive" src="' + windImg + '" alt="Symbol for wind">');
            $surfConditionsWind.append('<p>' + compassDirection + " " + "wind" + '</p>');

            // Render live swell and wind compass
            renderCompass();

            function renderCompass () {

                var Canvas = document.getElementById('compass');

                var ctx = Canvas.getContext('2d');

                var windPointer = new Image();
                windPointer.src = 'img/windPointer.svg';

                var swellPointer = new Image();
                swellPointer.src = 'img/swellPointer.svg';

                var img = new Image();
                img.src = 'img/compass.svg';
                img.onload = draw;

                var windCompassRotation = windDirection * (Math.PI / 180);
                var swellCompassRotation = swellDirection * (Math.PI / 180);

                function draw() {

                    ctx.drawImage(img, 0, 0);

                    ctx.save();

                    ctx.translate(150, 150);

                    ctx.rotate(windCompassRotation);

                    ctx.drawImage(windPointer, -150, -150);

                    ctx.rotate(-windCompassRotation);

                    ctx.rotate(swellCompassRotation);

                    ctx.drawImage(swellPointer, -150, -150);

                    ctx.restore();

                }
            };

            // Add button for closing the surf conditions window
            $surfConditionsWaves.prepend('<button type="button" class="btn conditions-close-button">✖</button>');

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
            $('.surf-guide-title').after('<div class="col-xs-12 error-container"></div>');

            $('.error-container').append('<p class="conditions-error">' + breakName + ' ' + "conditions unavailable =(" + '</p>');

            // Add a button for closing the error window
            $('.error-container').prepend('<button type="button" class="btn error-close-button">✖</button>');

            /* When the conditions close button is clicked remove the error
            message */
            $('.error-close-button').on('click', function(e) {

                // Remove conditions row from DOM
                $('.error-container').remove();

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