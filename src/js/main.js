var imagesLoaded, locationsLoaded = false;
var images = {};

$(document).ready(function() {

    // Load tooltips
    $('[title]').tooltip({
        show: true,
        hide: 'fade'
    });

    console.log('tooltips loaded');

    // Load images
    var numImages = 0;
    var loadedImages = 0;

    function loadImages(source) {

      for(var src in source) {
        numImages++;
      };

      for(var src in source) {
        images[src] = new Image();
        images[src].onload = function () {
            if(++loadedImages >= numImages) {
              console.log('images loaded');
              imagesLoaded = true;

              if(locationsLoaded){
                  addRolloverEffect();
              };
            };
        };
        images[src].src = source[src];

        switch (source) {
            case roIconsSkillLevel:
                images[src].className = "rollover-info skill-level-hover";;
            break;

            case roIconsBreak:
                images[src].className = "rollover-info break-type-hover";
            break;

            case roIconsDirection:
                images[src].className = "rollover-info wave-direction-hover";
            break;

            case roIconsBestSeason:
                images[src].className = "rollover-info best-season-hover";
            break;

            case roIconsMiscOne:
                images[src].className = "rollover-info misc-info-one-hover";
            break;

            case roIconsMiscTwo:
                images[src].className = "rollover-info misc-info-two-hover";
            break;
        };
      };
    };

    var guideIcons =
        { attireSpring: 'img/water_temp_spring.svg',
          attireSummer: 'img/water_temp_summer.svg',
          attireAutumn: 'img/water_temp_autumn.svg',
          attireWinter: 'img/water_temp_winter.svg',
          attireBoardies: 'img/water_attire_boardies.svg',
          attireWetsuitTwo: 'img/water_attire_2mm_wetsuit.svg',
          attireWetsuitThree: 'img/water_attire_3mm_wetsuit.svg',
          attireWetsuitFour: 'img/water_attire_4mm_wetsuit.svg',
          attireWetsuitFive: 'img/water_attire_5mm_wetsuit.svg',
          attireWetsuitSix: 'img/water_attire_6mm_wetsuit.svg',
          swellPointer: 'img/compass_swell_pointer.svg',
          windPointer: 'img/compass_wind_pointer.svg',
          smallCompass: 'img/compass_guide.svg' };

    var roIconsSkillLevel =
        { roIconSkillAll: 'img/skill_level_ro_all.svg',
          roIconSkillBegInt: 'img/skill_level_ro_beginner_intermediate.svg',
          roIconSkillBeg: 'img/skill_level_ro_beginner.svg',
          roIconSkillIntAdv: 'img/skill_level_ro_intermediate_advanced.svg',
          roIconSkillInt: 'img/skill_level_ro_intermediate.svg',
          roIconSkillAdv: 'img/skill_level_ro_advanced.svg' };

    var roIconsBreak =
        { roIconBreakReef: 'img/break_ro_reef.svg',
          roIconBreakBeach: 'img/break_ro_beach.svg',
          roIconBreakPoint: 'img/break_ro_point.svg',
          roIconBreakRiver: 'img/break_ro_river_mouth.svg' };

    var roIconsDirection =
        { roIconDirectionLeft: 'img/direction_ro_left.svg',
          roIconDirectionRight: 'img/direction_ro_right.svg',
          roIconDirectionBoth: 'img/direction_ro_both.svg' };

    var roIconsBestSeason =
        { roIconBestSeasonAll: 'img/season_ro_all.svg',
          roIconBestSeasonWinSpr: 'img/season_ro_winter_spring.svg',
          roIconBestSeasonWinSum: 'img/season_ro_winter_summer.svg',
          roIconBestSeasonWinAut: 'img/season_ro_winter_autumn.svg',
          roIconBestSeasonWin: 'img/season_ro_winter.svg',
          roIconBestSeasonSpgSum: 'img/season_ro_spring_summer.svg',
          roIconBestSeasonSpgAut: 'img/season_ro_spring_autumn.svg',
          roIconBestSeasonSpg: 'img/season_ro_spring.svg',
          roIconBestSeasonSumAut: 'img/season_summer_autumn.svg',
          roIconBestSeasonSum: 'img/season_summer.svg',
          roIconBestSeasonAut: 'img/season_autumn.svg' };

    var roIconsMiscOne =
        { roIconMiscOneBoardies: 'img/water_attire_ro_boardies.svg',
          roIconMiscOneWetSuitTwo: 'img/water_attire_ro_2mm_wetsuit.svg',
          roIconMiscOneWetSuitThree: 'img/water_attire_ro_3mm_wetsuit.svg',
          roIconMiscOneWetSuitFour: 'img/water_attire_ro_4mm_wetsuit.svg',
          roIconMiscOneWetSuitFive: 'img/water_attire_ro_5mm_wetsuit.svg',
          roIconMiscOneWetSuitSix: 'img/water_attire_ro_6mm_wetsuit.svg',
          roIconMiscOneBigWave: 'img/big_wave_ro.svg' };

    var roIconsMiscTwo =
        { roIconMiscTwoBeginners: 'img/hazards_ro_beginners.svg',
          roIconMiscTwoBoats: 'img/hazards_ro_boats.svg',
          roIconMiscTwoCrocs: 'img/hazards_ro_crocs.svg',
          roIconMiscTwoCrowded: 'img/hazards_ro_crowded.svg',
          roIconMiscTwoDgrBreak: 'img/hazards_ro_dangerous_break.svg',
          roIconMiscTwoFar: 'img/hazards_ro_far_from_shore.svg',
          roIconMiscTwoPollution: 'img/hazards_ro_pollution.svg',
          roIconMiscTwoRocky: 'img/hazards_ro_rocky_bottom.svg',
          roIconMiscTwoSnakes: 'img/hazards_ro_sea_snakes.svg',
          roIconMiscTwoSeals: 'img/hazards_ro_seals.svg',
          roIconMiscTwoSeaweed: 'img/hazards_ro_seaweed.svg',
          roIconMiscTwoSewage: 'img/hazards_ro_sewage.svg',
          roIconMiscTwoShallow: 'img/hazards_ro_sharks.svg',
          roIconMiscTwoSharks: 'img/hazards_ro_sharks.svg',
          roIconMiscTwoStrCurrent: 'img/hazards_ro_strong_currents.svg',
          roIconMiscTwoStrRips: 'img/hazards_ro_strong_rips.svg',
          roIconMiscTwoTheft: 'img/hazards_ro_theft.svg',
          roIconMiscTwoUndertow: 'img/hazards_ro_undertow.svg',
          roIconMiscTwoUnfriendly: 'img/hazards_ro_unfriendly.svg',
          roIconMiscTwoUrchins: 'img/hazards_ro_urchins.svg',
          roIconMiscTwoWellknown: 'img/well_known_ro.svg' };

    loadImages(guideIcons);
    loadImages(roIconsSkillLevel);
    loadImages(roIconsBreak);
    loadImages(roIconsDirection);
    loadImages(roIconsBestSeason);
    loadImages(roIconsMiscOne);
    loadImages(roIconsMiscTwo);

});

function AppViewModel () {

    this.self = this;

    /* If no location data is returned within 10 seconds, show error */
    var locationDataTimeout = setTimeout (function() {
        showLocationsLoadError();
    }, 15000);

    // Cache api request URL for location data
    var fireBaseURL = 'https://dazzling-torch-4012.firebaseio.com/locationData.json?';

    // Load location Data from Firebase using ajax request
    console.log('get location data');

    $.ajax({
        url: fireBaseURL,
        dataType: 'jsonp',
        // jsonp: "callback",
        success: function(data) {
          console.log('get location data successful');

          // Invoke function to parse the location data
          self.parseLocationData(data);

          // Populate Google map with markers based on location data
          generateMarkers(data);
          console.log('generate map markers');
        }
    });

    /* This array holds the location objects that have been parsed from
     Firebase */
    self.locationArray = [];

    /* This obervable array holds filtered location objects from search
    queries and the initital data entered into the location array. It is
    automatically updated/rendered in the View */
    self.locationGrid = ko.observableArray("");

    /* Create an array that holds keywords that pop up in a small menu
    within the search bar dynamically during searches */
    self.searchKeywords = [];

    /* Parse the location data obtained via the api request from Firebase */
    self.parseLocationData = function (data) {

        data.forEach(function(obj) {

            /* Iterate through the location data from the data and push each object to the location array above */
            self.locationArray.push(obj);

            /* Iterate through the location data from the data and push each object to the location grid above */
            self.locationGrid.push(obj);

            /* Loop through the location array, obtain all of the break names
            and add them to the search keywords array */
            self.searchKeywords.push(obj.breakName);

            /* If a location keyword already exists in the search keywords
            array do not add it. If it doesn't, add it to the array. This
            avoids having the same location listed multiple times in the pop-up window */
            if(searchKeywords.indexOf(obj.location) < 0) {
                self.searchKeywords.push(obj.location);
            };
        });

        console.log("locationArray loaded");
        console.log("locationGrid loaded");
        console.log("autosearch keywords loaded");

        /* Set to true. If images are still loading, rollover
        effects will be enabled when they are finished */
        locationsLoaded = true;

        /* Load the rollover effects if the images load before location data
        is parsed */
        if(imagesLoaded) {
            addRolloverEffect();
        };

        // Disable error message
        clearTimeout(locationDataTimeout);
    };

    // Render the error msg when no location data is loaded
    self.showLocationsLoadError = function () {

        console.log('get location data unsuccessful');

        // Hide sections not able to render properly without location info
        $('.search-container').toggle();
        $('.search-section').toggle();
        $('.map-section').toggle();
        $('.surf-info-section').toggle();
        $('.list-section').toggle();

        // Cache error message, image, and container
        var locationLoadError = '<section class="error-section">' + '<div class="row">' + '<div class="col-xs-12 data-load-error-container">' + '<img src="img/no_connection.svg" class="no-connection">' + '<p>Dude! Really?! =(</p>' + '</div>' + '</div>' + '</section>';

        // Cache a reload button
        var reloadButton = '<button type="button" class="btn reload-button">Reload</button>';

        // Attach error msg, img, & reload button
        $('header').after(locationLoadError);
        $('.data-load-error-container').append(reloadButton);
        $('.reload-button').on('click', function(e) {
            location = location;
        });
    };

    /* self.Query is bound to the input on the View. Because it is an
     observable variable, it's value will be updated whenever the input on the
     View is altered*/
    self.Query = ko.observable("");

    /* Replace specific SVG images with inline SVG in order to make CSS
    styling possible */
    self.makeSVGInline = function (oldSvg) {
        var $img = oldSvg;
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass);
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    };

    /* Convert the search symbols to inline svgs so hover effects my be applied
    through css styling */
    self.makeSVGInline($('.search-symbol-desktop'));
    self.makeSVGInline($('.search-symbol-mobile'));

    /* When the search symbol list item is clicked, the search field is
    displayed with sliding animation */
    $('.search-symbol').on("click", function () {
        self.displaySearch();
    });

    // Displays the search field using sliding animation
    self.displaySearch = function () {
        $('.navbar-collapse').removeClass("in");
        $('.search-container').slideToggle(500);

        // Delay focusing on the search field until it has fully expanded
        setTimeout(function() {
            $('.search-form').focus();
        }, 600);
        self.resetSearch();
    };

    /* When a search is made, create a 'clear search' button for clearing
    searches. Also reset search when search field is clicked */
    $('.search-form').on( "click", function () {
          self.resetSearch();
    }).on( "focus", function() {
          if(!$('.search-form').val()){
            $('.clear').toggle();
          };
      }).on( "blur", function () {
          if(!$('.search-form').val()){
            $('.clear').toggle();
          };
      });
      /* When the 'clear search' button is selected, close any existing text
      or searches in the search field, close the surf guide if open, show
      searchable locations, close any open info windows and hide the 'clear
      search' button */
      $('.clear').on( "click", function() {
          $('.clear').toggle();
          self.resetSearch();
      });

    // Resets the search field and location list
    self.resetSearch = function () {
        // Clear search field
        $('.search-form').val("");

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

        // Find last selected marker and make pin small again
        makeMarkerSmall();

        // Reset the map by running an empty search
        self.searchLocations();
    };

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
        },
        /* Remove focus from search field after selection is made */
        close: function(){
            $(this).blur();
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
        self.locationArray.forEach(function(obj) {

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

        /* If the map is visible, set the map bounds and map position. If it is
        instead hidden, do nothing. This is because that a bug is created when
        map bounds are invoked on the hidden map: the map, markers and info-
        windows skew left for some unknown reason. Because a search results
        in location frames being filtered and eventually one being selected,
        centering and map bounds will be set by the clicking of the location
        frame. Also, if the map is opened (and if the surf guide isn't in view)
        the map will be centered and the bounds will also be set whichever
        location frames have or haven't been filtered into view. */
        if (!$('#map').is(":hidden")) {
            // Set the map bounds & map position
            setMapBounds();
        };

        /* After a search, there are new objects in the locationGrid, so the
        rollover effects that were added before need to be re-added */
        addRolloverEffect();
    };

    /* When the cursor hovers over a location, remove the text and add
    a gaussian blur. Wait until the locations have been loaded */
    var rollover;

    self.addRolloverEffect = function () {

        console.log('enable hover effect');

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
                    self.locationArray.forEach(function(obj) {

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
                        var skillLevelIcon = displaySkillIcon(obj.skillLevel);
                        locationFrame.append(skillLevelIcon);

                        /* Display the icon associated with the type of
                        break it is (i.e. what kind of surface is beneath
                        it */
                        var breakIcon = displayBreakIcon(obj.breakDetails);
                        locationFrame.append(breakIcon);

                        /* Display the icon associated with the direction
                        the wave breaks */
                        var directionIcon = displayDirectionIcon(obj.waveDirection);
                        locationFrame.append(directionIcon);

                        /* Display the icon for the best month in which to
                        surf at the specific break*/
                        var bestSeasonIcon = displayBestSeasonIcon(obj.optimalTime);
                        locationFrame.append(bestSeasonIcon);

                        /* If there is big wave surfing at this break
                        display big wave icon. If not, display the
                        suggested swim attire icon for current season */
                        var miscIconOne = displayBigWaveIcon(obj);
                        locationFrame.append(miscIconOne);

                        /* If the wave is well known display the well
                        known icon, otherwise display a random hazard
                        icon */
                        var miscIconTwo = displayWellKnownIcon(obj);
                        locationFrame.append(miscIconTwo);

                        /* Display the budget cost for the location */
                        var costInfo = displayCost(obj.cost);
                        locationFrame.append(costInfo);

                        /* Check if current location is available, if it is
                        render the distance to the hovered over location in
                        the top right corner of the picture */
                        if(typeof currentLat !== 'undefined') {
                            var distanceInfo = displayDistance(obj.lat, obj.lng);
                            locationFrame.append(distanceInfo);
                        };

                        // Display average water temp for current season
                        var waterTempInfo = displayCurrentWaterTemp(obj.avgWaterTemp);
                        locationFrame.append(waterTempInfo);

                        // Display avg wave height for the break
                        var waveSizeInfo = displayWaveSize(obj.avgSize);
                        locationFrame.append(waveSizeInfo);
                    };
                }
            );

            /* Remove all imported info when the mouse stops hovering */
            locationFrame.on('mouseleave',
                function () {
                    img.css('-webkit-filter', 'blur(0px) brightness(100%)');
                    location.toggle();
                    breakName.toggle();

                    $('.rollover-info').remove();
                }
            );
        });
    };

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

        // Find last selected marker and make pin small again
        makeMarkerSmall();

        // Iterate through the markers array
        markers.forEach(function(marker) {

            /* Filter markers that match the location object. When a match is
            found, zoom in and display the relevant info window*/
            if (marker.title.indexOf(breakName) >= 0) {

                marker.setIcon('img/marker_selected.svg');

                // Open info window
                getInfoWindow(marker, breakName);

                // Center the map
                map.setCenter(marker.getPosition());

                // Zoom in on marker
                map.setZoom(10);

                // Animate marker
                animateMarker(marker);

            };

        });
    };

    /* Set up boolean variables for wind and swell compasses in local
    scope */
    var wind, swell;

    /* Display detailed information about the location */
    self.renderSurfGuide = function (obj) {

        // Scroll to top of the page
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        /* Check if the surf guide window is open already from a previous
        click. If it isn't, hide the locatin grid. If it is, the location
        grid is already hidden, so we don't want to make it visible! */
        if (!$('.surf-guide-container').is(":visible")) {
            // Hide the location grid
            $('.location-grid').toggle();
        }

        /* Remove any existing information from previous click */
        $('.surf-guide-container').remove();

        $('.surf-info-container').append('<div class="row surf-guide-container"></div>');

        $surfGuideContainer = $('.surf-guide-container');

        // Render the name and location of the break at the top of the guide
        var guideTitle = displayTitle(obj.breakName, obj.location);
        $surfGuideContainer.append(guideTitle);

        // Create a frame to hold the icon container
        $surfGuideContainer.append('<div class="col-xs-12 icon-frame"></div>');

        var $iconFrame = $('.icon-frame');

        // Create a container to hold all icons
        $iconFrame.append('<div class="xs-icon-container sm-icon-container icon-container"></div>');

        var $iconContainer = $('.icon-container');

        // Check if break has big waves and render
        displayBigWaveIcon(obj, $iconContainer);

        // Check if break is well known and render
        displayWellKnownIcon(obj, $iconContainer);

        /* Display icon associated with the skill level
        needed to surf the break */
        var skillLevelIcon = displaySkillIcon(obj.skillLevel);
        $iconContainer.append(skillLevelIcon);

        /* Display the icon associated with the direction
        the wave breaks */
        var directionIcon = displayDirectionIcon(obj.waveDirection);
        $iconContainer.append(directionIcon);

        // Display the icon for the break details
        var breakIcon = displayBreakIcon(obj.breakDetails);
        $iconContainer.append(breakIcon);

        // Display the icon for the average wave height
        var waveSizeIcon = displayWaveSize(obj.avgSize);
        $iconContainer.append(waveSizeIcon);

        // Set canvas size for guide compass and suggested attire icons
        var canvasWidth = 100;
        var canvasHeight = 100;

        // Render optimal swell compass
        displayCompassIcon(obj.optimalSwell, obj.optimalWind, $iconContainer, canvasWidth, canvasHeight);

        // Display icon associated with the optimal tide
        var tideIcon = displayTideIcon(obj.optimalTide);
        $iconContainer.append(tideIcon);

        // Display icon associated with the season with the best conditions
        var bestSeasonIcon = displayBestSeasonIcon(obj.optimalTime);
        $iconContainer.append(bestSeasonIcon);

        /* Display icon associated for the suggested water attire for each
        season */
        displaySuggestedAttireIcons(obj.avgWaterTemp, canvasWidth, canvasHeight, $iconContainer);

        // Display icon associated for the break's climate
        var climateIcon = displayClimateIcon(obj.climate);
        $iconContainer.append(climateIcon);

        // Display the icon associcated with average local costs
        var costIcon = displayCost(obj.cost, $iconContainer);
        $iconContainer.append(costIcon);

        /* Check if current location is available, if it is
        render the distance icon in the surf guide */
        if(typeof currentLat !== 'undefined') {

            var distanceIcon = displayDistance(obj.lat, obj.lng);

            $iconContainer.append('<div class=" distance card">' + distanceIcon + '</div>');
        };

        // Display an icon for each hazard one might encounter at the break
        displayHazardIcons(obj.hazards, $iconContainer);

        // Add class to newly created divs
        $('.card').addClass('col-xs-4 col-sm-3');

        // Render buttons for guide
        addGuideButtons(obj);

    };

    /* Create buttons for opening closing surf guide / view current break
    conditions */
    self.addGuideButtons = function (obj) {

        // Add a button for closing the surf guide
        $surfGuideContainer.prepend('<button type="button" class="btn guide-close-button">✖</button>');

        // Add a button for displaying surf conditions
        $('.title-guide').append('<button type="button" class="btn conditions-button">Current Conditions</button>');

        /* When the surf conditions button is clicked, display current
        conditions */
        $('.conditions-button').on('click', function(e) {

            /* If surf conditions for a particular location have already
            been displayed, simply make visible again */
            if ($('.live-surf-conditions').is(":hidden")) {

                // Change icon-frame size to accomodate live info
                $('.icon-frame').addClass('col-sm-6 sm-icon-frame');

                $('.icon-container').addClass('md-icon-container');

                $('.live-surf-conditions').toggle();

                // Hide the surf conditions button
                $('.conditions-button').toggle();

                // Show the close conditions button
                $('.conditions-close-button').toggle();

            /* If surf conditions aren't already cached request new data */

            } else {

                    // Hide the surf conditions button
                    $('.conditions-button').toggle();

                    // Load the progress indicator
                    /* Check if indicator was already loaded, if not create
                    its container */
                    if(!$('#progressBarContainer').length) {
                        // Insert container to hold indicator
                        $('.title-guide').append('<div id="progressBarContainer"></div>');
                    };

                    // Load indicator
                    var cl = loadProgressBar();

                    // Pass info to API function and initiate request
                    getMagicSeaweed(obj.spotID, obj.breakName, cl);
            };

        });

        /* When the close surf guide button is clicked the surf guide is
        removed */
        $('.guide-close-button').on('click', function(e) {

            // Find last selected marker and make pin small again
            makeMarkerSmall();

            // Remove both surf conditions and surf guide from DOM
            $('.surf-guide-container').remove();

            /* Make both the location grid and the location frames
            within it visible. The location frames need to be made
            visible again in case a marker has been selected. */
            $('.location-frame').show();
            $('.location-grid').toggle();


            if (!$('#map').is(":hidden")) {
                // Reset the map window to display all markers
                setMapBounds();
            };

            // Close any info windows that remain open
            infoWindow.close();

            // Scroll to the top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    };

    self.displayTitle = function (breakName, location) {
        var guideTitle = '<div class="col-xs-12 title-guide">' + '<p class="title">' + breakName + ',' + ' ' + location + '</p>' + '</div>';

        return guideTitle;
    };

    self.displayBigWaveIcon = function (obj, $iconContainer) {

        if(rollover) {
            if(obj.bigWave) {
                var icon = images.roIconMiscOneBigWave;
            } else {
                var icon = displaySuggestedAttireIcons(obj.avgWaterTemp);
            };
        } else {
            if(obj.bigWave) {
                var icon = '<div class=" big-wave card">' + '<img src="img/big_wave.svg" class="big-wave-guide" title="Big Wave Surfing">' + '</div>';

                $iconContainer.append(icon);

            } else {

                return;
            };
        };

        return icon;

    };

    self.displayWellKnownIcon = function (obj, $iconContainer) {

        if(rollover) {
            if(obj.wellKnown) {
                var icon = images.roIconMiscTwoWellknown;

            } else {
                var icon = displayHazardIcons(obj.hazards, $iconContainer);
            };
        } else {
            if(obj.wellKnown) {
                var icon = '<div class=" well-known card">' + '<img src="img/well_known.svg" class="well-known-guide" title="Well Known Wave">' + '</div>';

                $iconContainer.append(icon);

            } else {

                return;
            };
        };

        return icon;
    };

    self.displaySkillIcon = function (obj) {
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
                var skillLevelIcon = images.roIconSkillAll;
            } else {
                var skillLevelIcon = '<div class=" skill-level card">' + '<img src="img/skill_level_all.svg" class="skill-level-guide" title="Difficulty: All levels">' + '</div>';
            };
        } else if (beginner >= intermediate && beginner > advanced) {
            if(beginner === intermediate) {
                if(rollover){
                    var skillLevelIcon = images.roIconSkillBegInt;
                } else {
                    var skillLevelIcon = '<div class="skill-level card">' + '<img src="img/skill_level_beginner_intermediate.svg" class=" skill-level-guide" title="Difficulty: Beginner to Intermediate">' + '</div>';
                };
            } else {
                if(rollover){
                    var skillLevelIcon = images.roIconSkillBeg;
                } else {
                    var skillLevelIcon = '<div class="skill-level card">' + '<img src="img/skill_level_beginner.svg" class=" skill-level-guide" title="Difficulty: Beginner">' + '</div>';
                };
            };
        } else if (intermediate > beginner && intermediate >= advanced) {
            if(intermediate === advanced) {
                if(rollover){
                    var skillLevelIcon = images.roIconSkillIntAdv;
                } else {
                    var skillLevelIcon = '<div class=" skill-level card">' + '<img src="img/skill_level_intermediate_advanced.svg" class=" skill-level-guide" title="Difficulty: Intermediate to Advanced">' + '</div>';
                };
            } else {
                if(rollover){
                    var skillLevelIcon = images.roIconSkillInt;
                } else {
                    var skillLevelIcon = '<div class=" skill-level card">' + '<img src="img/skill_level_intermediate.svg" class=" skill-level-guide" title="Difficulty: Intermediate">' + '</div>';
                };
            };
        } else {
            if(rollover){
                var skillLevelIcon = images.roIconSkillAdv;
            } else {
                var skillLevelIcon = '<div class=" skill-level card">' + '<img src="img/skill_level_advanced.svg" class=" skill-level-guide" title="Difficulty: Advanced">' + '</div>';
            };
        };

        return skillLevelIcon;

    };

    self.displayDirectionIcon = function (obj) {
        switch(obj) {
          case 'left':
              if(rollover) {
                  var directionIcon = images.roIconDirectionLeft;
              } else {
                  var directionIcon = '<div class=" direction card">' + '<img src="img/direction_left.svg" class="wave-direction-guide" title="Wave Direction: Left">' + '</div>';
              };
          break;

          case 'right':
              if(rollover) {
                  var directionIcon = images.roIconDirectionRight;
              } else {
                  var directionIcon = '<div class=" direction card">' + '<img src="img/direction_right.svg" class="wave-direction-guide" title="Wave Direction: Right">' + '</div>';
              };
          break;

          case 'left & right':
              if(rollover) {
                  var directionIcon = images.roIconDirectionBoth;
              } else {
                  var directionIcon = '<div class=" direction card">' + '<img src="img/direction_both.svg" class="wave-direction-guide" title="Wave Direction: Left & Right">' + '</div>';
              };
          break;
        }

        return directionIcon;
    };

    self.displayBreakIcon = function (obj) {
        switch(obj) {
          case 'reef':
              if(rollover) {
                  var breakIcon = images.roIconBreakReef;
              } else {
                  var breakIcon = '<div class=" break card">' + '<img src="img/break_reef.svg" class="break-type-guide" title="Break Type: Reef">' + '</div>';
              };
          break;

          case 'beach':
              if(rollover) {
                  var breakIcon = images.roIconBreakBeach;
              } else {
                  var breakIcon = '<div class=" break card">' + '<img src="img/break_beach.svg" class="break-type-guide" title="Break Type: Beach">' + '</div>';
              };
          break;

          case 'point':
              if(rollover) {
                  var breakIcon = images.roIconBreakPoint;
              } else {
                  var breakIcon = '<div class=" break card">' + '<img src="img/break_point.svg" class="break-type-guide" title="Break Type: Point">' + '</div>';
              };
          break;

          case 'river mouth':
              if(rollover) {
                  var breakIcon = images.roIconBreakRiver;
              } else {
                  var breakIcon = '<div class=" break card">' + '<img src="img/break_river_mouth.svg" class="break-type-guide" title="Break Type: River Mouth">' + '</div>';
              };
          break;
        }

        return breakIcon;
    };

    self.displayCompassIcon = function (objSwell, objWind, $iconContainer, canvasWidth, canvasHeight) {

      if(objSwell) {
        var swell = true;
        buildCompass(objSwell);
      };

      function buildCompass(obj) {

          if(swell) {
              swell = false;
              drawBackground = true;

              $iconContainer.append('<div class=" small-compass-guide card" title="Best Swell & Best Wind"><canvas id="compass-small" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas></div>');

              var elementPointer = images.swellPointer;
              var img = images.smallCompass;

          } else if (wind) {
              wind = false;
              var elementPointer = images.windPointer;
          };

          var Canvas = document.getElementById('compass-small');
          var ctx = Canvas.getContext('2d');

          var pointer = elementPointer;

          if(drawBackground) {
              ctx.drawImage(img, 0, 0);
              ctx.save();
          };

          var centerX = canvasWidth / 2;
          var centerY = canvasHeight / 2;

          ctx.translate(centerX, centerY);

          var directions = obj.length;

          for (var i = directions; i--;) {

              switch (obj[i]) {
                  case 'N':
                      var direction = 0;
                  break;

                  case 'NNE':
                      var direction = 22.5;
                  break;

                  case 'NE':
                      var direction = 45;
                  break;

                  case 'ENE':
                      var direction = 67.5;
                  break;

                  case 'E':
                      var direction = 90;
                  break;

                  case 'ESE':
                      var direction = 112.5;
                  break;

                  case 'SE':
                      var direction = 135;
                  break;

                  case 'SSE':
                      var direction = 157.5;
                  break;

                  case 'S':
                      var direction = 180;
                  break;

                  case 'SSW':
                      var direction = 202.5;
                  break;

                  case 'SW':
                      var direction = 225;
                  break;

                  case 'WSW':
                      var direction = 247.5;
                  break;

                  case 'W':
                      var direction = 270;
                  break;

                  case 'WNW':
                      var direction = 292.5;
                  break;

                  case 'NW':
                      var direction = 315;
                  break;

                  case 'NNW':
                       var direction = 337.5;
                  break;
              }
                  var pointerAngle = direction * (Math.PI / 180);

                  ctx.rotate(pointerAngle);
                  ctx.drawImage(pointer, -centerX, -centerY);
                  ctx.rotate(-pointerAngle);
          }

          if(drawBackground) {
              drawBackground = false;
              ctx.restore();
          };
      };

      var wind = true;
      buildCompass(objWind);
    };

    self.displayTideIcon = function (obj) {

        // Set variables for each skill level at zero
        var low = 0;
        var mid = 0;
        var high = 0;

        var tideLength = obj.length;
        for (var i = tideLength; i--;) {
            switch (obj[i]) {
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

        if (low === mid && low === high) {
            var tideIcon = '<div class=" tide card">' + '<img src="img/tide_all.svg" class="tide-guide" title="Best Tide: All">' + '</div>';
        } else if (low >= mid && low >= high) {
              if(low === mid) {
                  var tideIcon = '<div class=" tide card">' + '<img src="img/tide_low_mid.svg" class="tide-guide" title="Best Tide: Low & Mid">' + '</div>';
              } else if (low === high) {
                  var tideIcon = '<div class=" tide card">' + '<img src="img/tide_low_high.svg" class="tide-guide" title="Best Tide: Low & High">' + '</div>';;
              } else {
                  var tideIcon = '<div class=" tide card">' + '<img src="img/tide_low.svg" class="tide-guide" title="Best Tide: Low">' + '</div>';
              };
        } else if (mid > low && mid >= high) {
              if(mid === high) {
                  var tideIcon = '<div class=" tide card">' + '<img src="img/tide_high_mid.svg" class="tide-guide" title="Best Tide: Mid & High">' + '</div>';
              } else {
                  var tideIcon = '<div class=" tide card">' + '<img src="img/tide_mid.svg" class="tide-guide" title="Best Tide: Mid">' + '</div>';
              };
        } else {
            var tideIcon = '<div class=" tide card">' + '<img src="img/tide_high.svg" class="tide-guide" title="Best Tide: High">' + '</div>';
        };

        return tideIcon;

    };

    self.displayBestSeasonIcon = function (obj) {

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
                var bestSeasonIcon = images.roIconBestSeasonAll;
            } else {
                var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_all.svg" class="best-season-guide" title="Best Season: All">' + '</div>';
            };
        } else if(winter >= spring && winter >= summer && winter >= autumn) {
              if(winter === spring) {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonWinSpr;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_winter_spring.svg" class="best-season-guide" title="Winter & Spring">' + '</div>';
                  };
              } else if (winter === summer) {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonWinSum;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_winter_summer.svg" class="best-season-guide" title="Best Season: Winter & Summer">' + '</div>';
                  };
              } else if (winter === autumn) {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonWinAut;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_winter_autumn.svg" class="best-season-guide" title="Best Season: Winter & Autumn">' + '</div>';
                  };
              } else {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonWin;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_winter.svg" class="best-season-guide" title="Best Season: Winter">' + '</div>';
                  };
              };
        } else if (spring >= summer && spring >= autumn && spring > winter) {
              if (spring === summer) {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonSpgSum;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_spring_summer.svg" class="best-season-guide" title="Best Season: Spring & Summer">' + '</div>';
                  };
              } else if (spring === autumn) {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonSpgAut;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_spring_autumn.svg" class="best-season-guide" title="Best Season: Spring & Autumn">' + '</div>';
                  };
              } else {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonSpg;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_spring.svg" class="best-season-guide" title="Best Season: Spring">' + '</div>';
                  };
              };
        } else if (summer >= autumn && summer > winter && summer > spring) {
              if(summer === autumn) {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonSumAut;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_summer_autumn.svg" class="best-season-guide" title="Best Season: Summer & Autumn">' + '</div>';
                  };
              } else {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonSum;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_summer.svg" class="best-season-guide" title="Best Season: Summer">' + '</div>';
                  };
              };
        } else {
                  if(rollover) {
                      var bestSeasonIcon = images.roIconBestSeasonAut;
                  } else {
                      var bestSeasonIcon = '<div class=" time card">' + '<img src="img/season_autumn.svg" class="best-season-guide" title="Best Season: Autumn">' + '</div>';
                  };
        };

        return bestSeasonIcon;
    };

    self.displaySuggestedAttireIcons = function (obj, canvasWidth, canvasHeight, $iconContainer) {

        if(!rollover) {
            $iconContainer.append('<div class=" water-temp spring card" title="Suggested Spring Attire">' + '<canvas id="spring" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>');

            $iconContainer.append('<div class=" water-temp summer card" title="Suggested Summer Attire">' + '<canvas id="summer" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>');

            $iconContainer.append('<div class=" water-temp autumn card" title="Suggested Autumn Attire">' + '<canvas id="autumn" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>');

            $iconContainer.append('<div class=" water-temp winter card" title="Suggested Winter Attire">' + '<canvas id="winter" width="' + canvasWidth + '" height="' + canvasHeight + '"></canvas>');

            var season = 0;
            /* Loop through the average water temps for each time of year. Designate specific water attire for each time of year */
            for (var temp in obj) {

                season++;
                var gear = determineGear(obj[temp]);

                drawSeasonIcon(gear, season);

            };

            function drawSeasonIcon(gear, season) {

                if(season === 1) {
                    var Canvas = document.getElementById('spring');
                    var seasonImg = images.attireSpring;
                } else if (season === 2) {
                    var Canvas = document.getElementById('summer');
                    var seasonImg = images.attireSummer;
                } else if (season === 3) {
                    var Canvas = document.getElementById('autumn');
                    var seasonImg = images.attireAutumn;
                } else {
                    var Canvas = document.getElementById('winter');
                    var seasonImg = images.attireWinter;
                };

                var ctx = Canvas.getContext('2d');
                var attire = gear;
                var seasonBackground = seasonImg;

                ctx.drawImage(seasonBackground, 0, 0);
                ctx.drawImage(attire, 0, 0);

            };

            // Highlight current season's attire
            var currentSeason = getCurrentSeason();

            if(currentSeason === 'winter') {
                $('.winter').addClass("highlight-attire");
            } else if (currentSeason === 'spring') {
                $('.spring').addClass("highlight-attire");
            } else if (currentSeason === 'winter') {
                $('.summer').addClass("highlight-attire");
            } else if (currentSeason === 'autumn') {
                $('.autumn').addClass("highlight-attire");
            };

        } else {

            var currentSeason = getCurrentSeason();

            if(currentSeason === 'winter') {
                var suggestedAttireIcon = determineGear(obj.winter);
            } else if (currentSeason === 'spring') {
                var suggestedAttireIcon = determineGear(obj.spring);
            } else if (currentSeason === 'winter') {
                var suggestedAttireIcon = determineGear(obj.summer);
            } else if (currentSeason === 'autumn') {
                var suggestedAttireIcon = determineGear(obj.autumn);
            };

            return suggestedAttireIcon;
        };

        function determineGear (temp) {
            if(temp > 59) {
                if(temp > 72) {
                    if(rollover) {
                      var gear = images.roIconMiscOneBoardies;
                    } else {
                      var gear = images.attireBoardies;
                    };
                } else if (temp > 66) {
                    if(rollover) {
                      var gear = images.roIconMiscOneWetSuitTwo;
                    } else {
                      var gear = images.attireWetsuitTwo;
                    };
                } else {
                    if(rollover) {
                      var gear = images.roIconMiscOneWetSuitThree;
                    } else {
                      var gear = images.attireWetsuitThree;
                    };
                };
            } else {
                if (temp > 54) {
                    if(rollover) {
                      var gear = images.roIconMiscOneWetSuitFour;
                    } else {
                      var gear = images.attireWetsuitFour;
                    };
                } else if (temp > 48) {
                    if(rollover) {
                      var gear = images.roIconMiscOneWetSuitFive;
                    } else {
                      var gear = images.attireWetsuitFive;
                    };
                } else {
                    if(rollover) {
                      var gear = images.roIconMiscOneWetSuitSix;
                    } else {
                      var gear = images.attireWetsuitSix;
                    };
                };
            };

            return gear;
        };
    };

    self.displayClimateIcon = function (obj) {

        var climateIcon = '<div class="climate card" title="Köppen Climate Classification">' + '<p>' + obj  + '</p>' + '</div>';

        return climateIcon;
    };

    self.displayCost = function (obj, $iconContainer) {

      if(rollover) {

          var costInfo = '<p class="rollover-info cost cost-hover">' + '$' + obj.budget + '</p>';

      } else {

          var midRange = Math.floor((obj.highEnd - obj.budget)/2 + obj.budget);

          var costInfo = $iconContainer.append('<div class="cost card">' + '<img src="img/cost.svg" class="cost-guide" title="Estimated Daily Cost: Low, Mid, High">' + '<p>' + obj.budget + '</p>' + '<p>' + midRange + '</p>' + '<p>' + obj.highEnd +'</p>' + '</div>');
      };

      return costInfo;

    };

    self.displayDistance = function (latDest,lngDest) {
        /* Get distance between both locations using
        the Haversine formula */
        /* Obtain current location from user */
        var latOrigin = currentLat;
        var lngOrigin = currentLng;

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
        var result = Math.round(d);

        /* If the distance is greater than 200 miles, calculate the
        average non-stop flight time in hours to the destination using
        an average cruising speed of 450mph */
        if(result > 200) {
            var hours = result/450;

            // If the time is below an hour, set the new time at one hour
            if(hours < 1) {
                var newTime = 1;
            } else {
                var newTime = Math.round(hours);
            };

            /* If distance is greater than avg distance of a direct flight,
            add two hours in layover time */
            if(newTime > 8 && newTime <= 12) {
                var layOver = newTime + 2;
                var flightTime = layOver;

            /* If distance is greater than avg distance of a 1+ connection
             flight, add four hours in layover time */
            } else if (newTime > 12) {
                var layOver = newTime + 4;
                var flightTime = layOver;
            } else {
                var flightTime = newTime;
            };
                var distanceFly = flightTime;

            if(rollover) {
                // Cache distance element with distance
                var distance = '<p class="rollover-info distance distance-hover">' + distanceFly + 'h' + '</p>';

                return distance;

            } else {

                var distanceIcon = '<img src="img/distance_plane.svg" class="icon distance-guide" title="Estimated flight duration from your location">' + '<p class="distance-guide-hours">' + distanceFly + 'h' +'</p>';

                return distanceIcon;
            };
        } else {

            var distanceDrive = result;

            if(rollover) {
                // Cache distance element with distance
                var distance = '<p class="rollover-info distance distance-hover">' + distanceDrive + 'mi' + '</p>';

                return distance;

            } else {

                var distanceIcon = '<img src="img/distance.svg" class="icon distance-guide" title="Estimated (straight line) distance in miles from your location (actual distance via roads will be greater) ">' + '<p class="distance-guide-miles">' + distanceDrive + 'mi' +'</p>';

                return distanceIcon;
            };
        };

        // Converts degrees to radians
        function deg2rad(deg) {
          return deg * (Math.PI/180)
        }
    }

    self.displayCurrentWaterTemp = function (obj) {

        var currentSeason = getCurrentSeason();

        switch(currentSeason) {
          case 'winter':
            var waterTemp = obj.winter;
          break;

          case 'spring':
            var waterTemp = obj.spring;
          break

          case 'summer':
            var waterTemp = obj.summer;
          break;

          case 'autumn':
            var waterTemp = obj.autumn;
          break
        };

        var waterTempInfo = '<p class="rollover-info water-temp-hover">' + waterTemp + '℉' + '</p>';

        return waterTempInfo;
    };

    self.displayWaveSize = function (obj) {
        /* Check if the average maximum wave size
        sometimes goes above the max. If it does, save a plus sign in a variable to add to the min/max wave height */
        if (obj.aboveMax) {
            var plus = '+';
        } else {
            var plus = '';
        };

        if(rollover) {
            /* Cache the average wave height */
            var waveSizeInfo = '<p class="rollover-info wave-size-hover">' + obj.min + "-" + obj.max + "'" +'</p>';
        } else {
            var waveSizeInfo = '<div class=" wave-size card">' + '<img src="img/wave_range.svg" class"wave-size-guide" title="Wave Size">' + '<p>' + obj.min + "-" + obj.max + plus + "ft" + '</p>' + '</div>';
        };

        return waveSizeInfo;
    };

    self.getCurrentSeason = function () {
        // Get today's date and month
        var today = new Date();
        var month = today.getMonth();

        switch (month) {
          case 11 :
          case 0 :
          case 1 :
              var currentSeason = 'winter';
          break;

          case 2:
          case 3:
          case 4:
              var currentSeason = 'spring';
          break;

          case 5:
          case 6:
          case 7:
              var currentSeason = 'summer';
          break;

          case 8:
          case 9:
          case 10:
              var currentSeason = 'autumn';
          break;
        };

        return currentSeason;
    };

    self.displayHazardIcons = function (obj, $iconContainer) {

        if(rollover) {
            /* Generate a number between min and max to
            render a random hazard in case wave is not
            well known */
            // Set a random number within a given range
            var min = 0;
            var max = obj.length;

            var randomArrayItem = Math.floor((Math.random() * (max - min)) + min);

            var randomHazard = obj[randomArrayItem];
            var miscInfoTwoIcon = hazards(randomHazard);

            return miscInfoTwoIcon;
        } else {

            var hazardsLength = obj.length;

            for (var i = hazardsLength; i--;) {
                hazards(obj[i], $iconContainer);
            }

        };

        function hazards (hazard, $iconContainer) {
            switch (hazard) {

                case 'beginners':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoBeginners;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_beginners.svg" class="hazard-guide" title="Hazard: Beginners">' + '</div>');
                    };
                break;

                case 'boats':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoBoats;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_boats.svg" class="hazard-guide" title="Hazard: Boats">' + '</div>');
                    };
                break;

                case 'crocs':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoCrocs;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_crocs.svg" class="hazard-guide" title="Hazard: Crocodiles">' + '</div>');
                    };
                break;

                case 'crowded':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoCrowded;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_crowded.svg" class="hazard-guide" title="Hazard: Crowded">' + '</div>');
                    };
                break;

                case 'dangerous break':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoDgrBreak;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_dangerous_break.svg" class="hazard-guide" title="Hazard: Dangerous Break">' + '</div>');
                    };
                break;

                case 'far from shore':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoFar;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_far_from_shore.svg" class="hazard-guide" title="Hazard: Far From Shore">' + '</div>');
                    };
                break;

                case 'pollution':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoPollution;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_pollution.svg" class="hazard-guide" title="Hazard: Pollution">' + '</div>');
                    };
                break;

                case 'rocky bottom':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoRocky;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_rocky_bottom.svg" class="hazard-guide" title="Hazard: Rocky Bottom">' + '</div>');
                    };
                break;

                case 'sea snakes':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoSnakes;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_sea_snakes.svg" class="hazard-guide" title="Hazard: Sea Snakes">' + '</div>');
                    };
                break;

                case 'seals':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoSeals;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_seals.svg" class="hazard-guide" title="Hazard: Seals">' + '</div>');
                    };
                break;

                case 'seaweed':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoSeaweed;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_seaweed.svg" class="hazard-guide" title="Hazard: Seaweed">' + '</div>');
                    };
                break;

                case 'sewage':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoSewage;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_sewage.svg" class="hazard-guide" title="Hazard: Sewage">' + '</div>');
                    };
                break;

                case 'shallow':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoShallow;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_shallow.svg" class="hazard-guide" title="Hazard: Shallow Break">' + '</div>');
                    };
                break;

                case 'sharks':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoSharks;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_sharks.svg" class="hazard-guide" title="Hazard: Sharks">' + '</div>');
                    };
                break;

                case 'strong currents':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoStrCurrent;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_strong_currents.svg" class="hazard-guide" title="Hazard: Strong Currents">' + '</div>');
                    };
                break;

                case 'strong rips':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoStrRips;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_strong_rips.svg" class="hazard-guide" title="Hazard: Strong Rips">' + '</div>');
                    };
                break;

                case 'theft':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoTheft;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_theft.svg" class="hazard-guide" title="Hazard: Theft">' + '</div>');
                    };
                break;

                case 'undertow':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoUndertow;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_undertow.svg" class="hazard-guide" title="Hazard: Strong Undertow">' + '</div>');
                    };
                break;

                case 'unfriendly':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoUnfriendly;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_unfriendly.svg" class="hazard-guide" title="Hazard: Unfriendly Locals">' + '</div>');
                    };
                break;

                case 'urchins':
                    if(rollover) {
                        var hazardIcon = images.roIconMiscTwoUrchins;
                    } else {
                        $iconContainer.append('<div class=" hazard card">' + '<img src="img/hazards_urchins.svg" class="hazard-guide" title="Hazard: Urchins">' + '</div>');
                    };
                break;

            }

              return hazardIcon;

        };
    };

    self.getMagicSeaweed = function (spotID, breakName, cl) {

        console.log('get current conditions');

        var $currentSurfGuide = $('.title-guide').text();
        var $surfGuideTitleContainer = $('.title-guide');

        /* Check for the location's spot ID. If there is no spot ID,
        immediately display an error message. This also prevents an API request
        from going through for a non-existing location*/
        if(spotID === 'none') {

            // Disable progress indicator by removing it
            $('#canvasLoader').remove();
            showError();

        } else {

            /* If the location object passes the above filter (has a location ID), but times out (no api data is returned), show an error
            message */
            var msRequestTimeout = setTimeout (function() {

                // Disable progress indicator by removing it
                $('#canvasLoader').remove();
                showError();

            }, 8000);

            // Load Magic Seaweed API data
            var msUrl = 'http://magicseaweed.com/api/d2983e394d07724e96404fba11c10485/forecast/?spot_id=' + spotID + '&units=us&fields=timestamp,fadedRating,solidRating,swell.minBreakingHeight,swell.maxBreakingHeight,swell.components.primary.*,wind.*,condition.*';

            $.ajax({
                url: msUrl,
                dataType: 'jsonp',
                // jsonp: "callback",
                success: function(response) {
                    console.log('MSW api request successful');
                    // Get current time & current time plus/minus three hours
                    var getTime = Date.now();
                    var currentTimeSecs = getTime / 1000;
                    var backThreeHours = currentTimeSecs - 10800;
                    var forwardThreeHours = currentTimeSecs + 10800;

                    /* Iterate through forecast objects to get the last forecast (i.e. within the last 3 hours)*/
                    var responseLength = response.length;

                    for (var i = responseLength; i--;) {

                        var forecastTime = response[i].timestamp;

                        if (forecastTime < currentTimeSecs && forecastTime > backThreeHours) {

                            // Save forecast for parsing other information in a variable
                            var forecastData = response[i];

                        /* if data is not available from within the previous three hours, get the nearest forecast up to 3 hours in the future*/
                        } else if (forecastTime > currentTimeSecs && forecastTime < forwardThreeHours) {

                            // Save forecast for parsing other information in a variable
                            var forecastData = response[i];

                        };
                    };

                    // Show forecast in the View
                    renderSurfConditions(forecastData);

                    // Disable error message
                    clearTimeout(msRequestTimeout);

                    // Disable progress indicator by removing it
                    $('#canvasLoader').remove();

                }
            });

        };

        function renderSurfConditions(forecastData) {
            /* Before rendering the surf conditions, check which surf guide is
            currently open and make sure it matches the API request and that
            there isn't an error already displayed. This ensures that an api
            request that takes time to download isn't injected into another
            surf guide if the user changed surf guides duringthe api request
            processing */
            var $surfGuideContainer = $('.surf-guide-container');

            if ($currentSurfGuide.indexOf(breakName) >= 0 && !$surfGuideContainer.is(":contains('unavailable')")) {

                // Save wave break height
                var minBreakHeight = forecastData.swell.minBreakingHeight;
                var maxBreakHeight = forecastData.swell.maxBreakingHeight;

                // If the min and max are the same, just save the min height
                if (minBreakHeight === maxBreakHeight) {
                    var waveHeight = minBreakHeight;

                // If the min and max are different, save both as a range
                } else {
                    var waveHeight = minBreakHeight + ' ' + '-' + ' ' + maxBreakHeight;
                };

                // Get and save swell height, direction, period
                var swellHeight = forecastData.swell.components.primary.height;
                var swellPeriod = forecastData.swell.components.primary.period;
                var direction = forecastData.swell.components.primary.direction;
                var swellCompassDirection = forecastData.swell.components.primary.compassDirection;

                // Get and sav wind speed and direction
                var windSpeed = forecastData.wind.speed;
                var windDirection = forecastData.wind.direction;
                var compassDirection = forecastData.wind.compassDirection;

                // Get and save current temperature and weather
                var temperature = forecastData.condition.temperature;
                var weather = forecastData.condition.weather;
                var weatherImg = 'http://cdnimages.magicseaweed.com/30x30/' + weather + '.png'
                var windImg = 'img/wind.svg'

                /* Get wave and conditions ratings */
                var rating = [];

                /* Add solid stars to the array equal to number value
                retrieved from MSW*/
                var solidRatingLength = forecastData.solidRating;
                var solidStar = '<img class="star" src="img/star_filled.svg"/>';

                for (var i = solidRatingLength; i--;) {
                    rating.push(solidStar);
                };

                /* Add faded stars to the array equal to number value
                retrieved from MSW*/
                var fadedRatingLength = forecastData.fadedRating;
                var fadedStar = '<img class="star" src="img/star_faded.svg"/>';

                for (var i = fadedRatingLength; i--;) {
                    rating.push(fadedStar);
                };

                /* Add empty stars to the array equal 5 minus the total amount of
                filled and faded stars */
                var fillEmptyStars = 5 - rating.length;
                var emptyStar = '<img class="star" src="img/star_empty.svg"/>';

                for (var i = fillEmptyStars; i--;) {
                    rating.push(emptyStar);
                };

                /* Combine the array into one line of stars to form the overall rating of both the surfing conditions and wave
                quality*/
                var waveRating = rating.join("");

                /* Render containers to hold the compass and live conditions
                containers */
                var liveConditionsElem = '<div class="col-xs-12 surf-conditions-container live-surf-conditions"></div>';
                var compassContainer = '<div class="col-xs-12 col-sm-4 col-md-6 live-surf-conditions live-compass" title="Live wind & swell conditions"><canvas id="compass" width="300" height="300"></canvas></div>';

                // Add compass container
                $surfGuideTitleContainer.after(compassContainer);

                // Change icon-frame size to accomodate compass container
                $('.icon-frame').addClass('col-sm-6 sm-icon-frame');

                // Move icon container left
                $('.icon-container').addClass('md-icon-container');

                // Add container to hold live conditions
                $surfGuideTitleContainer.after(liveConditionsElem);

                var $surfConditionsContainer = $('.surf-conditions-container');
                var waveStatsContainer = '<div class="col-xs-12 col-sm-6 surf-conditions-small surf-conditions-waves"></div>';
                var swellStatsContainer = '<div class="col-xs-6 col-sm-3 surf-conditions-small surf-conditions-swell"></div>';
                var windStatsContainer = '<div class="col-xs-6 col-sm-3 surf-conditions-small surf-conditions-wind"></div>';

                // Add live conditions containers
                $surfConditionsContainer.append(waveStatsContainer);
                $surfConditionsContainer.append(swellStatsContainer);
                $surfConditionsContainer.append(windStatsContainer);

                var $locationName = $('.title');
                var liveTemp = '<p class="live-temp live-surf-conditions" title="Live weather conditions">' + temperature + " ℉" + '<img class="live-weather" src="' + weatherImg + '" alt="Symbol for current weather">' + '</p>';
                var accreditMSW = '<a href="http://magicseaweed.com" target="_blank"><img src="img/msw_powered_by.png" class="live-surf-conditions msw-banner" title="Live conditions provided by MSW - Click to visit"></a>';

                /* Render MSW accreditation */
                $locationName.after(accreditMSW);

                /* Render the temperature and weather image in the left
                side of the newly created conditions window*/
                $locationName.after(liveTemp);

                // Cache references to each container
                var $surfConditionsWind = $('.surf-conditions-wind');
                var $surfConditionsSwell = $('.surf-conditions-swell');
                var $surfConditionsWaves = $('.surf-conditions-waves');

                var windSpeedInfo = '<p>' + windSpeed + "mph" + '</p>';
                var windIcon = '<img class="img-responsive" title="Wind direction & speed" src="' + windImg + '" alt="Symbol for wind">';
                var cardinalDirection = '<p>' + compassDirection + " " + "wind" + '</p>';

                /* Render the wind speed, direction, and wind image in the
                right side of the conditions window*/
                $surfConditionsWind.append(windSpeedInfo);
                $surfConditionsWind.append(windIcon);
                $surfConditionsWind.append(cardinalDirection);

                var swellHeightInfo = '<p>' + swellHeight + "ft" + '</p>';
                var primarySwellInfo = '<p title="The main swell generating waves">' + "primary" + '</p>';
                var swellPeriodInfo = '<p title="Live period between waves & current direction">' + "@" + ' ' + swellPeriod + 's' + ' ' + swellCompassDirection + '</p>';

                /* Render the swell height and period */
                $surfConditionsSwell.append(swellHeightInfo);
                $surfConditionsSwell.append(primarySwellInfo);
                $surfConditionsSwell.append(swellPeriodInfo);

                var waveHeightInfo = '<p class="live-wave-height" title="Live wave height">' + waveHeight + "ft" + '</p>';
                var waveRatingInfo = '<p class="star-rating" title="Magic Seaweed Rating: The more solid stars, the better. Unfavorable wind conditions change a solid star to a faded star">' + waveRating + '</p>';

                /* Render the breaking wave height, and wave rating from above
                in the center of the conditions window */
                $surfConditionsWaves.append(waveHeightInfo);
                $surfConditionsWaves.append(waveRatingInfo);

                // Render live swell and wind compass
                renderLiveCompass();

                function renderLiveCompass () {

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
                    var swellCompassRotation = direction * (Math.PI / 180);

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
                    };
                };

                var closeConditionsButton = '<button type="button" class="btn conditions-close-button">✖</button>';

                // Add button for closing the surf conditions window
                $surfConditionsWaves.prepend(closeConditionsButton);

                var $closeConditionsButton = $('.conditions-close-button');
                var $liveSurfConditions = $('.live-surf-conditions');
                var $showConditionsButton = $('.conditions-button');
                var $iconFrame = $('.icon-frame');
                var $iconContainer = $('.icon-container');

                /* When the surf conditions button is clicked the surf
                conditions window is closed */
                $closeConditionsButton.on('click', function(e) {

                    // Change icon-frame size to account for compass absence
                    $iconFrame.removeClass('col-sm-6 sm-icon-frame');

                    // Move icon back to original position
                    $iconContainer.removeClass('md-icon-container');

                    // Hide the live surf conditions
                    $liveSurfConditions.toggle();

                    // Hide the close conditions button
                    $closeConditionsButton.toggle();

                    // Make visible the show surf conditions button
                    $showConditionsButton.toggle();

                });

            } else {

              return;

            };

        };

        function showError (cl) {

            console.log('MSW api request unsuccessful');

            /* Before rendering the error message, check which surf guide is
            currently open and make sure it matches the API request. This ensures that an api request that takes time to download isn't injected into another surf guide if the user changed surf guides during the api request processing */

            if ($currentSurfGuide .indexOf(breakName) >= 0) {

                var errorElem = '<div class="col-xs-12 error-container"></div>';
                var errorMsg = '<p class="conditions-error">' + breakName + ' ' + "conditions unavailable =(" + '</p>';
                var errorCloseButton = '<button type="button" class="btn error-close-button">✖</button>';

                // Insert a new row above the surf guide icons
                $surfGuideTitleContainer.after(errorElem);

                var $errorContainer = $('.error-container');

                // Insert the error message
                $errorContainer.append(errorMsg);

                // Add a button for closing the error window
                $errorContainer.prepend(errorCloseButton);

                var $errorCloseButton = $('.error-close-button');
                var $closeConditionsButton = $('.conditions-close-button');
                var $showConditionsButton = $('.conditions-button');

                /* When the conditions close button is clicked remove the error
                message */
                $errorCloseButton.on('click', function(e) {

                    // Remove conditions row from DOM
                    $errorContainer.remove();

                    // Remove the close conditions button
                    $closeConditionsButton.remove();

                    // Make visible the show surf conditions button
                    $showConditionsButton.toggle();

                });

            } else {

                return;;
            };

        };
    };

    self.loadProgressBar = function () {

        var cl = new CanvasLoader('progressBarContainer');
        cl.setColor('#00b8e6'); // default is '#000000'
        cl.setShape('spiral'); // default is 'oval'
        cl.setDiameter(72); // default is 40
        cl.setDensity(33); // default is 40
        cl.setRange(1); // default is 1.3
        cl.setFPS(23); // default is 24
        cl.show(); // Hidden by default

        return cl;
    };
};

// Get current location
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

// Create Google Map
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
        mapTypeControl: true,
        scrollwheel: false
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

    addMapButton();
    addMapClickEvent();
}

function generateMarkers (locationData) {

    /* Loop through locationData and filter out the coordinates
    & break name for each break. Save the break's coordinates and name
    in their own variables for easy referencing*/
    var locationDataLength = locationData.length;

    for(var i = locationDataLength; i--;) {

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

    };

    // Display markers found in the markers array on the map
    showMarkers(map);

    // Set initial map bounds based on location of markers
    setMapBounds();
};

function addMarker(breakName, breakCoordinates, breakLocation, obj) {

    // Set a variable for custom map marker
    var markerImg = 'img/marker_small.svg';

    var marker = new google.maps.Marker({

        // Set position using the newly created variable
        position: breakCoordinates,
        map: map,
        icon: markerImg,

        /* Set the title for the break marker as the name of the wave/location
        of the break. This way it can be searched/filtered in the ViewModel*/
        title: breakName + ' ' + '(' + breakLocation + ')'
    });

    // Add a text box that displays the break name and location when clicked
    addListeners(marker, breakName, obj);
};

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
            };
        };

    /* Pass the relevant marker for the current iteration as an argument
    into the function*/
    })(marker));

    google.maps.event.addListener(marker, 'click', (function(marker, breakName, obj) {

        /* Create an inner function what will at the time of iteration save
        the individual break's name (breakName) within the infoWindow and
        attach it to the relevant marker */
        return function() {

            // Find last selected marker and make pin small again
            makeMarkerSmall();

            console.log('make ' + marker.title + "'" + 's marker big!');
            marker.setIcon('img/marker_selected.svg');

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
            };
        };

    /* Pass the relevant marker and break name (breakName) for the current
    iteration as an argument into the function*/
    })(marker, breakName, obj));

    // Add each marker to the markers array
    markers.push(marker);
};

function showMarkers(map) {

    // Loop through the markers array and display on the map
    var markersLength = markers.length;

    for (var i = markersLength; i--;) {
        markers[i].setMap(map);
    };
};

function setMapBounds () {

    /* Create map bounds rectangle using the most SW / NE locations
    to calculate the size*/
    var bounds = new google.maps.LatLngBounds();

    /* Loop through markers and extend bounds to only those markers
    that are visible*/
    var markersLength = markers.length;

    for (var i = markersLength; i--;) {
        if(markers[i].visible) {
            bounds.extend(markers[i].getPosition());
        };
    };

    // Fit the map to the bounds calcuated above
    map.fitBounds(bounds);

    /* If there's only one marker (i.e. zoom is very high/too close), reset
    zoom to lower level*/
    if(map.getZoom() > 12) {
        map.setZoom(12);
    };
};

function getInfoWindow (marker, breakName) {
    // Assign content to InfoWindow object
    infoWindow.setContent(breakName);

    // Assign the InfoWindow object the appropriate marker
    infoWindow.open(map, marker);
};

function animateMarker (marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    window.setTimeout(function() {
        marker.setAnimation(null);
    }, 730);
};

function addMapButton () {

    // Add button for hiding the map
    $('.map-container').prepend('<button type="button" class="btn hide-map-button">▼</button>');

    // When the map close symbol is clicked, hide or show the map
    $('.hide-map-button').on('click', function(e) {

        // Either hide or reveal the map depending the last click
        $('#map').toggle();

        /* If the map isn't visible after map toggle above (from closing it),
        replace the 'down' symbol with an up symbol  */
        if (!$('#map').is(":visible")) {
            // Replace the existing symbol
            $(this).text('▲');
        /* If the map is made visible after map toggle above (opening it),
        replace the 'up' symbol with a 'down' symbol & depending on the
        circumstances, set the map bounds and close any open infowindows */
        } else {
            // Replace the existing symbol.
            $(this).text('▼');

            /* If the surf guide isn't visible when opening the map, reset the
            map bounds and close any open info windows. Otherwise, do nothing.
            We do nothing because if the map bounds are reset while the surf
            guide is visible it creates a bug. When the map is eventually
            reopened, the map is skewed left and all of the infowindows are
            too small. All subsequent centering and map bounds setting results
            in the map being skewed to the left. This may be because setting
            the map bounds is called before the map is fully made visible ???
            It's also unecessary because each marker is zoomed in on upon clicking a specific location even while the map is hidden, so if the map is eventually made visible, it will be centered on the selected location anyway */
            if (!$('.surf-guide-container').length) {
                /* Reset the map bounds, so map is centered on markers that
                represent the currently unselected location frames */
                setMapBounds();
                // Close any open info windows
                infoWindow.close();
            };
        };
    });
};

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
        };
    });
};

function addMapClickEvent (marker) {

    /* When the map is clicked, location frames are made visible. This is useful if they were hidden as a result of a marker being clicked.
    In addition, all open info windows are closed */
    map.addListener('click', function() {

        // Find last selected marker and make pin small again
        makeMarkerSmall();

        /* If the surf guide isn't visible show the locations, otherwise
        do nothing (just close the info windows) */
        if (!$('.surf-guide-container').is(":visible")) {
            $('.location-frame').show();
        };
            infoWindow.close();
    });
};

// Find last selected marker and make pin small again
function makeMarkerSmall () {
    markers.forEach(function(marker) {
        if (marker.icon.indexOf('img/marker_selected.svg') >= 0) {
            console.log('make ' + marker.title + "'" + 's marker small!');
            marker.setIcon('img/marker_small.svg');
        };
    });
};

ko.applyBindings(new AppViewModel);