

var imagesLoaded,
    locationsLoaded,
    favoritesUpdated = false,
    images = {};

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
                images[src].className = "rollover-info skill-level-rollover skill-level-hover-default-style";
            break;

            case roIconsBreak:
                images[src].className = "rollover-info break-type-rollover break-type-hover-default-style";
            break;

            case roIconsDirection:
                images[src].className = "rollover-info wave-direction-rollover wave-direction-hover-default-style";
            break;

            case roIconsBestSeason:
                images[src].className = "rollover-info best-season-rollover best-season-hover-default-style";
            break;

            case roIconsMiscOne:
                images[src].className = "rollover-info misc-info-one-rollover misc-info-one-hover-default-style";
            break;

            case roIconsMiscTwo:
                images[src].className = "rollover-info misc-info-two-rollover misc-info-two-hover-default-style";
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
        success: function(data) {
          console.log('get location data successful');

          // Invoke function to parse the location data
          self.parseLocationData(data);

          // Make sure Google maps api has loaded
          if (typeof google === 'object' && typeof google.maps === 'object') {

              // When loaded, set up Google map
              setUpGoogleMap();

          // If it hasn't loaded, keep checking until it is
          // When it is loaded, generate map markers
          } else {
              var checkGoogle = setInterval(function() {

                  console.log('error: Google maps api NOT loaded');
                  console.log('load Google maps api again');

                  // Check if Google maps api has loaded
                  if(typeof google === 'object' && typeof google.maps === 'object') {

                      // When loaded, set up Google map
                      setUpGoogleMap();

                      // Stop checking if Google maps api is loaded
                      clearInterval(checkGoogle);
                  };
              },1000);
          };

          // Sets up markers and listeners for Google map
          function setUpGoogleMap () {

              console.log('Google maps api loaded');
              console.log('generate map markers');

              // Populate Google map with markers based on location data
              self.generateMarkers(data);
          };
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

        console.log("primary locations array (locationArray) loaded");
        console.log("locations list (locationGrid) rendered");
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

    /* When the map is in view on a screen larger than 767px, the height is
    adjusted*/
    self.adjustMapSize = function () {

        // Save references to DOM elements and heights
        var $locationGridHeight = $('.location-grid').outerHeight(),
        $navbarHeight = $('#myNavbar').outerHeight(),
        $windowHeight = $(window).height(),
        $mapContainer = $('.map-container'),
        $searchContainer = $('.search-container');

        /* If the search container is visible, set a new map height that
        accounts for the search container height */
        if($searchContainer.is(":visible")) {

            // Save the search container height and set a new map height
            var $searchContainerHeight = $searchContainer.outerHeight(),
            $newMapHeight = $windowHeight - ($locationGridHeight + $searchContainerHeight + $navbarHeight);

        /* If the search container isn't visible, set a new map height without
        accounting for the search container height */
        } else {
            var $newMapHeight = $windowHeight - ($locationGridHeight + $navbarHeight);
        };

        // Adjust the height of the map container
        $mapContainer.css("height", $newMapHeight);

        // If the Google map and its locations have loaded and the frame
        // and marker managers aren't disabled, set the map bounds
        if(markers.length !== 0 && $('#map').is(":visible") && !resizeInProgress) {
            google.maps.event.trigger(map, 'resize');
            setMapBounds();
        };
    };

    /* In screen sizes greater than 767px horizontal scrolling is enabled
    during map view */
    self.enableHorizontalScrolling = function () {

        // Set a ref to the location grid that holds all of the locations
        var $locationGrid = $('.location-grid');

        /* Remove any previous event handlers, so multiples of same handler
        aren't added */
        $locationGrid.off();

        // Create event for when mouse scroll wheel is activated
        $locationGrid.mousewheel(function(e, delta) {
            this.scrollLeft -= (delta * 1);
            e.preventDefault();
        });
    };

    /* When the screen width crosses 768px, alter the layout of the page to
    accommodate the appearence of a horizontal scroll bar for screen widths
    >= 768px and reverse these effects when the screen width falls below 768px
     */
    self.toggleLayout = function () {

        // Cache DOM refs to key elements
        var $locationGrid = $('.location-grid'),
            $locationFrame = $('.location-frame'),
            $container = $('#container'),
            $mapContainer = $('.map-container'),
            $map = $('#map'),
            $favoriteSymbol = $('.favorite'),
            $breakName = $('.break-name'),
            $locationName = $('.location-name'),
            $searchForm = $('.search-form'),
            $clearSymbol = $('.clear'),
            $clearFavsBtn = $('.clear-favorites-button');

        /* If the screen width signals a 'mobile' view, alter the layout
        accordingly*/
        if(mobileView || gridView || guideView) {

            console.log('update mobile/grid/guide view layout');

            // Set the map to default
            $mapContainer.removeClass("map-container-map-view-style").addClass("map-container-default-style");

            // In the mobile view, set the map container away from 100%
            $mapContainer.css("height", "245px");

            // If map icon is selected, set the map to visible instead of
            // default display:none
            if($('.map-selected').length) {
                $mapContainer.show();
            };

            $searchForm.removeClass("search-form-map-view-style").addClass("search-form-default-style");

            $clearSymbol.removeClass("clear-map-view-style").addClass("clear-default-style");

            $clearFavsBtn.removeClass("clear-favorites-button-map-view-style").addClass("clear-favorites-button-default-style");

            $locationGrid.removeClass("location-grid-map-view-style");

            $locationFrame.removeClass("location-frame-map-view-style").addClass("location-frame-default-style");

            // Change the container away from Bootstrap's 'fluid' class
            $container.removeClass("container-fluid").addClass("container");

            // Remove Bootstrap's 'fluid' row
            $locationGrid.removeClass("row-fluid").addClass("row");

            // Re-add the Bootstrap settings
            $locationFrame.addClass("col-xs-12 col-sm-6 col-md-4");

            // Change break name style back to default
            $breakName.removeClass("break-name-map-view-style").addClass("break-name-default-style");

            // Change location name style back to default
            $locationName.removeClass("location-name-map-view-style").addClass("location-name-default-style");

            /* Change 'favorite' symbol style back to default *must change
            via attr in order to change the class of an inline svg */
            $favoriteSymbol.attr("class", "favorite favorite-default-style");

            /* Remove any listeners attached to the location grid (horiz.
              scroll) */
            $locationGrid.off();

            /* If the Google map and its locations have loaded, the frame
            and marker managers aren't disabled, and the surf guide is hidden,
            set the map bounds */
            if(markers.length !== 0 && $map.is(":visible") && !guideView && !resizeInProgress) {
                console.log('map is visible');
                setMapBounds();

            /* If the surf guide is open, reset the map size, then center the map on the selected location's marker */
            } else if (guideView && $map.is(":visible")) {
                google.maps.event.trigger(map, 'resize');
                centerOnGuideMarker();
            };

        /* If the screen width is larger than a 'mobile' view, alter the
        layout accordingly*/
        } else {

            console.log('update map view layout');

            $mapContainer.removeClass("map-container-default-style").addClass("map-container-map-view-style");

            $searchForm.addClass("search-form-map-view-style").removeClass("search-form-default-style");

            $clearSymbol.addClass("clear-map-view-style").removeClass("clear-default-style");

            $clearFavsBtn.removeClass("clear-favorites-button-default-style").addClass("clear-favorites-button-map-view-style");

            $locationGrid.addClass("location-grid-map-view-style");

            // Change the container to Bootstrap's 'fluid' class
            $container.removeClass("container").addClass("container-fluid");

            // Add Bootstrap's 'fluid' class setting to the row
            $locationGrid.removeClass("row").addClass("row-fluid");

            // Reset location frame's elements
            self.resetLocationFrames();

            // Adjust the map height
            self.adjustMapSize();

            // Enable horizontal scrolling
            self.enableHorizontalScrolling();
        };
    };

    /* When screen size is larger than mobile and map is in view, adjust the
    rollover icons' positioning/size when hovering over a location frame */
    self.toggleRolloverClasses = function () {

        // Cache refs to selected DOM elements
        var $skillLevelIcon = $('.skill-level-rollover'),
            $breakTypeIcon = $('.break-type-rollover'),
            $waveDirectionIcon = $('.wave-direction-rollover')
            $bestSeasonIcon = $('.best-season-rollover'),
            $miscInfoOneIcon = $('.misc-info-one-rollover'),
            $miscInfoTwoIcon = $('.misc-info-two-rollover'),
            $distanceInfo = $('.distance-rollover'),
            $waterTempInfo = $('.water-temp-rollover'),
            $waveSizeInfo = $('.wave-size-rollover'),
            $costInfo = $('.cost-rollover');

        /* Whilst hovering over a location add/remove the appropriate classes
        in order to change the icons' styling */
        if(rollover) {

            console.log('adjust hover icons and info to map view style');

            $skillLevelIcon.addClass("skill-level-hover-map-view-style").removeClass("skill-level-hover-default-style");

            $breakTypeIcon.addClass("break-type-hover-map-view-style").removeClass("break-type-hover-default-style");

            $waveDirectionIcon.addClass("wave-direction-hover-map-view-style").removeClass("wave-direction-hover-default-style");

            $bestSeasonIcon.addClass("best-season-hover-map-view-style").removeClass("best-season-hover-default-style");

            $miscInfoOneIcon.addClass("misc-info-one-hover-map-view-style").removeClass("misc-info-one-hover-default-style");

            $miscInfoTwoIcon.addClass("misc-info-two-hover-map-view-style").removeClass("misc-info-two-hover-default-style");

            $distanceInfo.addClass("distance-hover-map-view-style").removeClass("distance-hover-default-style");

            $waterTempInfo.addClass("water-temp-hover-map-view-style").removeClass("water-temp-hover-default-style");

            $waveSizeInfo.addClass("wave-size-hover-map-view-style").removeClass("wave-size-hover-default-style");

            $costInfo.addClass("cost-hover-map-view-style").removeClass("cost-hover-default-style");


        /* When hovering over a location is finished, add/remove the appropriate classes in order to change the icons' styling back to the
        default style */
        } else {

            console.log('revert hover icons and info back to default style');

            $skillLevelIcon.addClass("skill-level-hover-default-style").removeClass("skill-level-hover-map-view-style");

            $breakTypeIcon.addClass("break-type-hover-default-style").removeClass("break-type-hover-map-view-style");

            $waveDirectionIcon.addClass("wave-direction-hover-default-style").removeClass("wave-direction-hover-map-view-style");

            $bestSeasonIcon.addClass("best-season-hover-default-style").removeClass("best-season-hover-map-view-style");

            $miscInfoOneIcon.addClass("misc-info-one-hover-default-style").removeClass("misc-info-one-hover-map-view-style");

            $miscInfoTwoIcon.addClass("misc-info-two-hover-default-style").removeClass("misc-info-two-hover-map-view-style");

            $distanceInfo.addClass("distance-hover-default-style").removeClass("distance-hover-map-view-style");

            $waterTempInfo.addClass("water-temp-hover-default-style").removeClass("water-temp-hover-map-view-style");

            $waveSizeInfo.addClass("wave-size-hover-default-style").removeClass("wave-size-hover-map-view-style");

            $costInfo.addClass("cost-hover-default-style").removeClass("cost-hover-map-view-style");
        };
    };

    // Set the style on the location frames for map view
    self.resetLocationFrames = function () {

        // Cache DOM elements
        var $allLocationFrames = $('.location-frame'),
            $locationName = $('.location-name'),
            $breakName = $('.break-name'),
            $favorite = $('.favorite');

        // Change all location frames style to map view
        $allLocationFrames.addClass("location-frame-map-view-style").removeClass("location-frame-default-style");

        // Loop through all of the location frames
        $allLocationFrames.each(function() {

            // Cache the current location frame's reference and text
            var $locationFrame = $(this);

            // If the location frame is visible, format it for map view
            // If not, keep it hidden
            if($locationFrame.is(":visible")) {

                // Make sure display is inline
                $locationFrame.css("display", "inline-block");
            };
        });

        // Remove the Bootstrap settings
        $allLocationFrames.removeClass("col-xs-12 col-sm-6 col-md-4");

        // Change break name style to map view style
        $breakName.removeClass("break-name-default-style").addClass("break-name-map-view-style");

        // Change location name style to map view style
        $locationName.removeClass("location-name-default-style").addClass("location-name-map-view-style");

        /* Change 'favorite' symbol style to map view style *must change
        via attr in order to change the class of an inline svg */
        $favorite.attr("class", "favorite favorite-map-view-style");
    };

    // Set intitial variables for map, grid, guide, and mobile views
    var mobileView,
        mapView,
        gridView,
        guideView;

    // Check the width of the screen
    self.checkView = function () {

        // Set refs to DOM elems
        var $winWidth = window.outerWidth;

        if($('.surf-guide-container').is(":visible") && $winWidth < 768) {

            mapView = false;
            gridView = false;

            mobileView = true;
            guideView = true;

            console.log('view is surf guide/mobile');

        // If the screen width is the same size as mobile, set to true
        } else if($('.surf-guide-container').is(":visible") && $winWidth >= 768) {

            mapView = false;
            gridView = false;
            mobileView = false;

            guideView = true;

            console.log('view is surf guide');

        // If the screen width is the same size as mobile, set to true
        } else if($winWidth < 768) {

            mapView = false;
            gridView = false;
            guideView = false;

            mobileView = true;
            console.log('view is mobile');

        // If the screen width is larger than a mobile device, set to false
        } else {

            mobileView = false;
            guideView = false;

                if($('.map-selected').length) {

                    gridView = false;

                    mapView = true;
                    console.log('view is map');

                } else {

                    mapView = false;

                    gridView = true;
                    console.log('view is grid');
                };
        };

        // Change the site's current layout depending on the above's outcome
        toggleLayout();
    };

    // Check the width of the window
    self.checkView();

    // Set variables for resizing
    var resizeTimer,
        resizeInProgress;

    // Whenever the window is resized, check the view (size of the window)
    // Also, disable the marker and frame managers. Not doing so will result
    // in a blank map and location grid.
    // Once resizing has stopped, set the map bounds
    $(window).resize(function() {

        // Check the current view and update the page's styling
        self.checkView();

            console.log('resize window');

        // Only execute if the map is visible
        if($("#map").is(":visible")) {

            // Disable the frame and marker managers
            resizeInProgress = true;

            console.log('disable frame and marker managers');

            // Clear the last time out and start new
            // Once resizing is stopped, the timer will be allowed to
            // fully count down to zero
            clearTimeout(resizeTimer);

            // When this timer reaches zero, the map's bounds are set
            // using the visible markers except during guide view
            // If in guide view, the map will be centered on the selected
            // marker. This is executed in the toggle layout function.
            resizeTimer = setTimeout(function() {

                self.checkView();

                if(!guideView) {
                    setMapBounds();
                };

                // enable the frame and marker managers
                resizeInProgress = false;
                console.log('enable frame and marker managers');
            }, 100);
        };
    });

    // Modifiy navbar to sticky navbar upon scrolling down
    self.stickyNavBar = function() {
        var $navbar = $('#navbar-main'),
            $distance = $navbar.offset().top,
            $window = $(window),
            $body = $('body');

        $window.scroll(function () {
            if($window.scrollTop() > $distance) {
                $navbar.addClass('navbar-fixed-top');
                $body.css("padding-top", "50px");
            } else {
                $navbar.removeClass('navbar-fixed-top');
                $body.css("padding-top", "0px");
            };
        });
    };

    self.stickyNavBar();

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

    /* Cache Firebase database references to all and user data */
    var allData = new Firebase("https://dazzling-torch-4012.firebaseio.com");
    var users = new Firebase('https://dazzling-torch-4012.firebaseio.com/users');

    /* Create write/read error messages to be used as callbacks */
    var fireBaseWriteError = function(error) {
        if (error) {
          console.log("data could not be saved." + error);
        } else {
          console.log("data saved successfully.");
        };
    };
    var fireBaseReadError = function (errorObject) {
      console.log("the read failed: " + errorObject.code);
    };

    // Make the 'favorite' symbol an inline img for easy styling via CSS
    self.makeSVGInline($('.favorite'));

    /* Iterate through the location frame displayed and fill in any locations
    that match the user's favorites */
    self.renderFavoriteOnLocationFrame = function () {

        console.log("display 'favorite' icons on relevant location frames");

        $('.location-frame').each(function () {

            // Cache references to location frame, favorite symbol, & break name
            var $locationFrame = $(this);
            var $favoriteWrapper = $(this).find('.favorite-wrapper');
            var $breakName = $(this).find('.break-name')[0].innerText;

            // Filter locations that match the user's favorites
            // When a match is found, add a class to style it as 'selected'
            if(userFavorites.indexOf($breakName) > -1) {
                $favoriteWrapper.removeClass('not-a-favorite');
                $favoriteWrapper.addClass('is-a-favorite');
            } else {
                if($favoriteWrapper.hasClass('is-a-favorite')) {
                    $favoriteWrapper.addClass('not-a-favorite');
                    $favoriteWrapper.removeClass('is-a-favorite');
                };
            };
        });
    };

    /* Create an empty local array (globally accessible for use with the
      Google API) to hold the user's favorites collected from the firebase's
      database */
    userFavorites = [];

    self.getFavorites = function (authData) {

        // If there are no users logged in, authData will be null
        if(authData === null) {
            console.log('cannot find favorites because there are no logged in users');
        } else {

            /* Get the user's favorites */
            users.child(authData.uid).child("favorites").on("value", function(snapshot) {

                // Save the Firebase snapshot of the user's favorites
                var favorites = snapshot.val();

                /* Clear any existing favorites in the local favorites array
                so it can be filled with updated information. */
                userFavorites = [];

                // If the user has no favorites, log msg in console
                if(favorites === null) {

                    console.log('user has no favorites');

                    // Cache an empty array to replace 'null'
                    var favorites = [];

                    /* Reset all of the marker images using the empty array*/
                    updateFavMarkers(favorites);
                } else {

                    /* Update the marker image of any markers that match the
                    user's favorites */
                    updateFavMarkers(favorites);

                    /* Push each favorite found in the Firebase array into the
                    local favorites array */
                    favorites.forEach(function(obj) {
                      userFavorites.push(obj);
                    });
                    console.log("the user's favorite(s) is/are: " + userFavorites.join(', '));

                    // Update DOM elements (location frames)
                    /* Fill in the hearts of any locations which are the user's
                    favorites */
                    self.renderFavoriteOnLocationFrame();
                };

                console.log('favorites updated');
                favoritesUpdated = true;

            }, fireBaseReadError);
        };
    };

    // Set variable for determining if a user is new or not
    var isNewUser;

    // Create a callback which logs the current auth state
    self.checkAuthentication = function (authData) {

        if(authData) {
        /* When user is already logged in, notify in console and update
           favorites */
            console.log("user " + authData.uid + " is logged in with " + authData.provider);
            isNewUser = false;
            self.getFavorites(authData);

        // If user is logged in notify via console and set new user to true
        } else {
            console.log("user is logged out");
            isNewUser = true;
        };
    };

    /* Monitor user authentication state, when there is a change check
       which user is logged in / logged out */
    allData.onAuth(self.checkAuthentication);

    /* If the visiter is a new user, get details and write data to Firebase */
    if(isNewUser) {

      // Log new user in anonymously (tokens last 5 years)
      allData.authAnonymously(function(error, authData) {
        if (error) {
              console.log("login Failed!", error);
        } else {

          // Save the user's favorites and name in the database
          allData.child("users").child(authData.uid).set({
              favorites: [],
              name: prompt("Please enter your name")
          });
        };
      });
    };


    self.showUser = function () {

          // cache user data
          var authData = allData.getAuth();

          // get the user's name saved in the Firebase database and log in console
          users.child(authData.uid).child("name").on("value", function(snapshot) {
          var name = snapshot.val();
            console.log(name + " is currently logged in");
      }, fireBaseReadError);
    };

    // Display which user is logged in the console every minute
    setInterval(self.showUser, 60000);

    // Add a location to the local favorites array and update Firebase version
    self.addFavorite = function (newFav) {

        // Add location to local array
        userFavorites.push(newFav);

        // Update Firebase
        users.child(allData.getAuth().uid).update({"favorites":userFavorites}, fireBaseWriteError);
    };


    // Remove a location from the local favorites array and update Firebase version
    self.removeFavorite = function (removeFav) {

        /* Create a temporary array to hold any locations that do not match the
        array that is to be removed */
        var updatedFavs = [];

        /* Filter any matching locations to the deleted location out of the local
        favorites array */
        userFavorites.forEach(function(keepFav) {
            if(removeFav !== keepFav) {
                updatedFavs.push(keepFav);
            };
        });

        // Update Firebase with the locations from the temporary array above
        // When Firebase updates, the local favorites array will be replaced
        users.child(allData.getAuth().uid).update({"favorites":updatedFavs}, fireBaseWriteError);
    };

    // Delete all locations from the local favorites array and update Firebase
    self.removeAllFavorites = function () {

        // Clear the user's existing favorites
        userFavorites = [];

        // Update Firebase
        users.child(allData.getAuth().uid).update({"favorites":userFavorites}, fireBaseWriteError);
    };

    /* self.Query is bound to the input on the View. Because it is an
     observable variable, it's value will be updated whenever the input on the
     View is altered*/
    self.Query = ko.observable("");

    /* Convert the imgs to inline svgs so hover effects my be applied
    through css styling */
    self.makeSVGInline($('.search-symbol-desktop'));
    self.makeSVGInline($('.search-symbol-mobile'));
    self.makeSVGInline($('.favorite-filter-symbol-desktop'));
    self.makeSVGInline($('.favorite-filter-symbol-mobile'));
    self.makeSVGInline($('.map-symbol-desktop'));
    self.makeSVGInline($('.map-symbol-mobile'));


    // Set variables to be used in the functions to follow
    var $clear = $('.clear'),
        $searchForm = $('.search-form'),
        $searchSymbol = $('.search-symbol'),
        $searchContainer = $('.search-container');


    // Toggle the appearance of the search container
    self.toggleSearch = function () {

        // Make the search container visible or hidden
        $searchContainer.slideToggle(500);

        // Delay focusing on the search field until it has fully expanded
        setTimeout(function() {

            console.log('toggle search');

            /* Sometimes the search container is toggled by pressing the
            filter favorites button. If so, resetting the locations would
            erase the favorites generated by clicking the button; therefore,
            if it is selected, we don't reset the locations */
            if(!$('.favorite-filter-selected').length) {

                // Reset the search
                self.resetPage();
            };

            // If 'clear search' button is visible, hide it
            if ($clear.is(":visible")) {
                $clear.toggle();
            };

            /* If the search container is visible, focus on search form and change class to indicate search is selected */
            if($searchContainer.is(":visible") && !$('.search-selected').length) {
                $searchForm.focus();
                $searchSymbol.removeClass("search-default");
                $searchSymbol.addClass("search-selected");
            } else {

                // Remove class to change img's fill back to default
                $searchSymbol.removeClass("search-selected");
                $searchSymbol.addClass("search-default");
            };

        }, 600);
    };

    /* When the search symbol is clicked, the search field is displayed with
    sliding animation */
    $searchSymbol.on("click", function () {

        /* Sometimes the filters container is toggled by pressing the
        search button. If the favorites are in view at the time of pressing
        the search button, the filters container is hidden and the favorite
        filter symbol is 'deselected' */
        if($('.favorite-filter-selected').length) {

            // Cache reference to DOM elements
            var $favoriteSymbol = $('.favorite-filter-symbol'),
                $filtersContainer = $('.filters-container');

            // Hide the filters container
            $filtersContainer.slideUp(500);

            console.log('hide filters container and favorites');

            // Add remove relevant classes
            $favoriteSymbol.removeClass("favorite-filter-selected");
            $favoriteSymbol.addClass("favorite-filter-default");
        };

        // Set variables
        var $window = $(window);

        /* Enable toggling of the search container if the user's scroll position is at the top of the page. If the user's scroll position is
        below this, only enable toggling of the search container if the search
        container is not already visible. If the search container is visible,
        instead of hiding it, the search form is brought into focus so the
        user can make further searches */
        if($window.scrollTop() < 56 || $window.scrollTop() >= 56 && $searchContainer.is(":hidden")) {

            // Scroll to top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // Show/hide the search container
            self.toggleSearch();

        } else {
            $searchForm.focus();
        };
    });

    /* When a search is made, create a 'clear search' button for clearing
    searches. Also reset search when search field is clicked */
    $searchForm.on( "click", function () {
          self.resetPage();
    }).on( "focus", function() {
        if(!$($searchForm).val()){
          $clear.toggle();
        };
    }).on( "blur", function () {
        if(!$($searchForm).val()){
          $clear.toggle();
        };
    });

    /* When the 'clear search' button is selected, close any existing text
    or searches in the search field, close the surf guide if open, show
    searchable locations, close any open info windows and hide the 'clear
    search' button */
    $clear.on( "click", function() {
        $clear.toggle();
        self.resetPage();
        $searchForm.focus();
    });

    /* Call the jQuery-UI auto complete widget.*/
    $searchForm.autocomplete({
        /* All keywords come from the above array */
        source: searchKeywords,
        /* Highlight the pop-up menu item that matches what is currently in
         the search input field */
        autoFocus: true,
        /* A search must be at least two characters long before the pop-up
        window shows */
        minLength: 2,
        // Delay the pop-up window from displaying for (x) milliseconds
        delay: 250,
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
            if (obj.breakName.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "").indexOf(search) > -1) {

              self.locationGrid.push(obj);

            // Convert locations (remove spaces, commas, apostrophes etc.)
            } else if (obj.location.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "").indexOf(search) > -1) {

              self.locationGrid.push(obj);
            }
        });

        /* Compare each marker's title, which holds the break and location name, to the search terms. If it matches, set the marker as visible.
        If it doesn't match, make setVisible false*/
        markers.forEach(function(marker) {

            // Convert marker titles (remove spaces, commas, apostrophes etc.)
            if (marker.title.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "").indexOf(search) > -1) {

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

        /* On each search new versions of the location frames are added. If the
        map is visible, the layout must be adjusted */
        if($('.map-container').is(":visible")) {
            // Update layout
            self.toggleLayout();
        };

        /* After a search, there are new objects in the locationGrid, so the
        rollover effects that were added before need to be re-added */
        self.addRolloverEffect();

        // Update DOM elements (location frames)
        /* Fill in the hearts of any locations which are the user's
        favorites */
        self.renderFavoriteOnLocationFrame();

    };

    // Display only favorites from the locations array
    self.filterFavorites = function () {

        // Cache reference to DOM
        var $favoriteSymbol = $('.favorite-filter-symbol');

        // If map is hidden do not execute. This is task is already performed
        // in the manageFrames function for the map view
        // If not in map view, execute this function
        if($('#map').is(":hidden")) {

            // Clear the observable array
            self.locationGrid.removeAll();

            /* Iterate through the locations array and update the location grid
            with any matching locations to the user's favorites */
            locationArray.forEach(function(obj) {
                var breakName = obj.breakName;

                if(userFavorites.indexOf(breakName) > -1) {
                    self.locationGrid.push(obj);
                };
            });
        };

        // Close open info windows
        infoWindow.close();

        // Find last selected marker and make pin small again
        makeMarkerSmall();

        /* Iterate through the markers array and update the map markers
        with any matching locations to the user's favorites */
        markers.forEach(function(marker) {

            // Shorten the marker title to just the break name
            var markerTitle = marker.title.replace(/ *\([^)]*\) */g, "");

            if (userFavorites.indexOf(markerTitle) > -1) {
                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            };
        });

        console.log('update map with favorites');

        // Set map bounds
        if ($('#map').is(":visible")) {
            // Set the map bounds & map position
            setMapBounds();
        };
    };

    // Bind click event to the 'favorite' icon on the navbar
    $('.favorite-filter-symbol').on( "click", function() {

        // Cache reference to DOM elements
        var $favoriteSymbol = $('.favorite-filter-symbol'),
            $filtersContainer = $('.filters-container');

            /* If favorites are already visible close the filters container
            and show all locations */
            if($('.favorite-filter-selected').length) {

                console.log("show all locations");

                // Hide the filters container
                // If the map is visible, fade out the filters container
                // If it isn't visible, slide the filters container up
                if($('.map-container-map-view-style').length) {
                    $filtersContainer.fadeOut(500);
                } else {
                    $filtersContainer.slideUp(500);
                };

                // Add & remove relevant classes
                $favoriteSymbol.removeClass("favorite-filter-selected").addClass("favorite-filter-default");

                // Reset the locations etc.
                self.resetPage();

            /* If the favorites are not visible, show them only if the user
            has favorites in the user favorites array */
            } else if (!$('.favorite-filter-selected').length && userFavorites.length > 0) {

                console.log("show favorites only");

                // If the search container is visible, hide it
                if($('.search-container').is(":visible")) {
                    self.toggleSearch();
                };

                // If the surf guide is open, close it
                if($('.surf-guide-container').length) {
                    self.closeSurfGuide();
                };

                // Add & remove relevant classes
                $favoriteSymbol.removeClass("favorite-filter-default").addClass("favorite-filter-selected");

                /* After filtering the favorites, there are new versions of
                the location frames and they need to be updated */
                /* If the map and search container are visible, adjust the
                layout after the search container has been toggled. Toggling
                the layout before the search container has been toggled
                results in a styling error. Toggling the layout after the
                search container has completely disappeared, adjusts the
                layout appropriately */
                /* Also, filter favorites after the search container
                has been toggled and before adjusting the layout. Filtering
                the favorites before results in a flash of unstyled content*/
                /* There is no need to add rollover effects or render favs
                on the location frames for the first two options because
                in these cases the manage frames function will take care
                if it*/
                if($('#map').is(":visible") && $('.search-container').is(":visible")) {

                    // Toggle the layout after the search container is hidden
                    setTimeout( function () {

                        // Filter the locations to find favorites
                        self.filterFavorites();

                        // Adjust the layout
                        self.toggleLayout();

                    }, 600);

                } else if ($('#map').is(":visible")) {

                        // Filter the locations to find favorites
                        self.filterFavorites();

                        // Adjust the layout
                        self.toggleLayout();

                // If the search container is hidden, toggle layout normally
                } else {

                        // Filter the locations to find favorites
                        self.filterFavorites();

                        // Adjust the layout
                        self.toggleLayout();

                        // Add rollover effects to the new list of objects
                        self.addRolloverEffect();

                        // Display 'favorite' icons on the relevant location frames
                        self.renderFavoriteOnLocationFrame();
                };

                // Show the filters container
                // If the map is visible, fade in the filters container
                // If it isn't visible, slide the filters container down
                if($('#map').is(":visible")) {
                    $filtersContainer.fadeIn(500);
                } else {
                    $filtersContainer.slideDown(500);
                };

            // If the user has no favorites, simply return the function
            } else {
                console.log('user has no favorites');
                return
            };

            // Scroll to the top of the page only if 'map view' not enabled
            if(!$('.map-container-map-view-style').length) {
                // Scroll to top of the page
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            };
    });


    // Bind click event to button
    /* When button's clicked, hide the filters container, remove/add
    the necessary classes, delete the user's favorites and reset the
    page (closes surf guide) */
    $('.clear-favorites-button').on( "click", function () {

        // Cache references to DOM elements
        var $filtersContainer = $('.filters-container'),
            $favoriteFilterSymbol = $('.favorite-filter-symbol');

        // Hide the filters container
        // If the map is visible, fade only the button out
        // If it isn't visible, slide the filters container up
        if($('.map-container-map-view-style').length) {
            $filtersContainer.fadeOut(500);
        } else {
            $filtersContainer.slideUp(500);
        };

        // Add/remove the classes
        $favoriteFilterSymbol.removeClass("favorite-filter-selected");
        $favoriteFilterSymbol.addClass("favorite-filter-default");

        // Clear the user's favorites
        self.removeAllFavorites();

        // Close the surf guide and reset the page
        self.resetPage();

    });

    // Resets the the page
    self.resetPage = function () {

        console.log('reset locations & map, clear search, and close surf guide');

        // If the surf guide is open, close it
        if($('.surf-guide-container').length) {
            self.closeSurfGuide();
        };

        // Clear search field
        $searchForm.val("");

        // Clear any searches
        self.Query("");

        // Close open info windows
        infoWindow.close();

        // Find last selected marker and make pin small again
        makeMarkerSmall();

        // Clear the objects in the array
        locationGrid.removeAll();

        // Repopulate the objects in the location grid
        locationArray.forEach(function (obj) {
            locationGrid.push(obj);
        });

        // If the location grid is hidden, show it
        if($('.location-grid').is(":hidden")) {
            // Show the locations
            $('.location-grid').show();
        };

        /* On each reset new versions of the location frames are added, so the view must be checked in case layout needs adjusting */
        self.checkView();

        // Make all map markers visible
        markers.forEach(function(marker) {
              marker.setVisible(true);
        });

        // If the map is visible, reset the bounds
        if (!$('#map').is(":hidden")) {
            // Set the map bounds & map position
            setMapBounds();
        };

        // Add the hover effects for each location frame
        self.addRolloverEffect();

        /* If the user has favorites, show a favorite symbol on each
        relevant location frame */
        if(userFavorites.length > 0) {
            self.renderFavoriteOnLocationFrame();
        };
    };

    /* When the cursor hovers over a location, remove the text and add
    a gaussian blur. Wait until the locations have been loaded */
    var rollover;

    self.addRolloverEffect = function () {

        console.log('enable hover effect');

        // For each location set variables and add hover effects
        $('.location-frame').each(function () {
            var $locationFrame = $(this),
                $breakName = $(this).find('.break-name'),
                $location = $(this).find('.location-name'),
                $img = $(this).find('img.location-image'),
                $favoriteWrapper = $(this).find('.favorite-wrapper'),
                $mapContainer = $('.map-container');

            $locationFrame.on('mouseenter', function (e) {

                // Enable rollover effects
                rollover = true;

                /* Get identifying information from the hovered over
                locaton frame */
                var frameBreakName = e.currentTarget.children[1].innerText;

                console.log('hover over ' + frameBreakName);

                /* If gridView is not enabled, activate the location frame's
                 associated marker and info window */
                if($mapContainer.is(":visible")) {
                    activateMarker(frameBreakName);
                };

                // Iterate through the location array
                self.locationArray.forEach(function(obj) {

                    // Filter locations that match the location frame
                    // Bounce the location frame's associated marker
                    if (frameBreakName === obj.breakName) {
                        importInfo(obj);
                    };
                });

                /* When the mouse is hovering over a location frame
                show unique information about that location */
                function importInfo(obj) {

                    $img.css('-webkit-filter', 'blur(4px) brightness(80%)' );
                    $location.hide()
                    $breakName.hide();
                    $favoriteWrapper.hide();

                    /* Display icon associated with the skill level
                    needed to surf the break */
                    var skillLevelIcon = displaySkillIcon(obj.skillLevel);
                    $locationFrame.append(skillLevelIcon);

                    /* Display the icon associated with the type of
                    break it is (i.e. what kind of surface is beneath
                    it */
                    var breakIcon = displayBreakIcon(obj.breakDetails);
                    $locationFrame.append(breakIcon);

                    /* Display the icon associated with the direction
                    the wave breaks */
                    var directionIcon = displayDirectionIcon(obj.waveDirection);
                    $locationFrame.append(directionIcon);

                    /* Display the icon for the best month in which to
                    surf at the specific break*/
                    var bestSeasonIcon = displayBestSeasonIcon(obj.optimalTime);
                    $locationFrame.append(bestSeasonIcon);

                    /* If there is big wave surfing at this break
                    display big wave icon. If not, display the
                    suggested swim attire icon for current season */
                    var miscIconOne = displayBigWaveIcon(obj);
                    $locationFrame.append(miscIconOne);

                    /* If the wave is well known display the well
                    known icon, otherwise display a random hazard
                    icon */
                    var miscIconTwo = displayWellKnownIcon(obj);
                    $locationFrame.append(miscIconTwo);

                    /* Display the budget cost for the location */
                    var costInfo = displayCost(obj.cost);
                    $locationFrame.append(costInfo);

                    /* Check if current location is available, if it is
                    render the distance to the hovered over location in
                    the top right corner of the picture */
                    if(typeof currentLat !== 'undefined') {
                        var distanceInfo = displayDistance(obj.lat, obj.lng);
                        $locationFrame.append(distanceInfo);
                    };

                    // Display average water temp for current season
                    var waterTempInfo = displayCurrentWaterTemp(obj.avgWaterTemp);
                    $locationFrame.append(waterTempInfo);

                    // Display avg wave height for the break
                    var waveSizeInfo = displayWaveSize(obj.avgSize);
                    $locationFrame.append(waveSizeInfo);
                };

                /* If screen is larger than mobile view adjust the icons'
                styling for the map view if enabled */
                if(!mobileView && !gridView) {
                    self.toggleRolloverClasses();
                };
            });

            /* Remove all imported info when the mouse stops hovering */
            $locationFrame.on('mouseleave', function () {

                // Set rollover to false
                rollover = false;

                /* If screen is larger than mobile view adjust the icons'
                styling back to default if the the map view is enabled */
                if(!mobileView && !gridView) {
                    self.toggleRolloverClasses();
                };

                $img.css('-webkit-filter', 'blur(0px) brightness(100%)');
                $location.show();
                $breakName.show();
                $favoriteWrapper.show();

                /* If gridView is not enabled, deactivate the location frame's
                associated marker. Make its pin small again only if its
                info window isn't open. If it's info window were open, that
                would mean that it is selected, which for the purposes of
                selection, should stay big. If a marker is selected, it also
                prevents the locaiton frames from being managed (keeps only
                one location frame visible) */
                if(!$('.surf-guide-container').length && !isInfoWindowOpen(infoWindow) && !gridView) {
                    makeMarkerSmall();
                };

                $('.rollover-info').remove();
            });
        });
    };

    /* Go to specific marker and open the surf guide */
    self.clickLocationFrame = function(obj) {

        // Disable rollover effects so the correct icon loads in surf guide
        rollover = false;

        // Highlight the location's marker if the map is visible
        if($('.map-container').is(":visible")) {
            self.goToMarker(obj.breakName);
        };

        // Open the surf guide
        self.renderSurfGuide(obj);

        // Check view to change the layout for the surf guide
        self.checkView();
    };

    /* Select each marker related to a location object from
    the View. This is accomplished using ko's click binding*/
    self.goToMarker = function(breakName) {

        // Find last selected marker and make it small
        makeMarkerSmall();

        // Iterate through the markers array
        markers.forEach(function(marker) {

            // Cache the title of the marker not including the location
            var markerName = marker.title.replace(/ *\([^)]*\) */g, "");

            /* Filter markers that match the location object. When a match is
            found, zoom in and display the relevant info window*/
            if (markerName === breakName) {

                // Make the matching marker's icon big
                makeMarkerBig(marker, markerName);

                // Open info window
                getInfoWindow(marker, breakName);

                // Animate marker
                animateMarker(marker);
            };
        });
    };

    /* When a location frame is hovered over, the associated marker and
    info window is activated */
    self.activateMarker = function(breakName) {

        // Iterate through the markers array
        markers.forEach(function(marker) {

            // Cache the title of the marker not including the location
            var markerName = marker.title.replace(/ *\([^)]*\) */g, "");

            // Filter markers that match the location frame
            if (markerName === breakName) {

                makeMarkerBig(marker, markerName);

            };
        });
    };

    /* Set up boolean variables for wind and swell compasses in local
    scope */
    var wind, swell;

    /* Display detailed information about the location */
    self.renderSurfGuide = function (obj) {

        // Hide the filters section if favorites are in view
        if($('.favorite-filter-selected').length) {
            $('.filters-container').toggle();
        };

        // Scroll to top of the page
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        /* Check if the surf guide window is open already from a previous
        click. If it isn't, hide the location grid. If it is, the location
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

        // Add the 'favorite' icon to the beginning of the location name
        var favoriteIcon = displayFavoriteIcon(obj.breakName);
        $('.title').prepend(favoriteIcon);
        self.makeSVGInline($('.favorite-guide'));
        addFavoriteListener(obj.breakName);

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
        $('.guide-header').append('<button type="button" class="btn conditions-button">Current Conditions</button>');

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
                        $('.guide-header').append('<div id="progressBarContainer"></div>');
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

            if($('.favorite-filter-selected').length) {

                // Show the filters container
                $('.filters-container').toggle();
                self.filterFavorites();
                self.addRolloverEffect();
                self.renderFavoriteOnLocationFrame();
            };

            self.closeSurfGuide();
        });
    };

    self.closeSurfGuide = function () {

        // Cache the markers array length
        var markersLength = markers.length;

        // Iterate through the markers array
        // It's important to show the markers again so that when the map
        // bounds are set, the whole map is shown instead of the previously
        // viewed markers provided in the surf guide
        for(var i = markersLength; i--;) {

            // Show all markers
            // If a search has been made, show only markers that match the
            // current search
            self.showMarkers(markers[i]);
        };

        // Find last selected marker and make pin small again
        makeMarkerSmall();

        // Remove both surf conditions and surf guide from DOM
        $('.surf-guide-container').remove();

        // Adjust the layout
        self.checkView();

        /* Make both the location grid and the location frames
        within it visible. The location frames need to be made
        visible again in case a marker has been selected. */
        $('.location-frame').show();
        $('.location-grid').toggle();

        // Close any info windows that remain open
        infoWindow.close();

        // Scroll to the top of the page
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };

    self.addFavoriteListener = function (breakName) {
        $('.favorite-wrapper-guide').on("click", function () {

            var $this = $(this);

            if($('.is-a-favorite-guide').length) {

                $this.removeClass("is-a-favorite-guide").addClass("not-a-favorite-guide");
                console.log("unfavorite " + breakName);
                $this.attr("title", "Add to favorites");
                removeFavorite(breakName);
                $this.blur();

            } else {

                $this.removeClass("not-a-favorite-guide").addClass("is-a-favorite-guide");
                console.log("favorite " + breakName);
                $this.attr("title", "Remove from favorites");
                addFavorite(breakName);
            };
        });
    };

    self.displayTitle = function (breakName, location) {
        var guideTitle = '<div class="col-xs-12 guide-header">' + '<p class="title">' + '<span id="guide-break-name">' + breakName +'</span>' + ',' + ' ' + location + '</p>' + '</div>';
        return guideTitle;
    };

    self.displayFavoriteIcon = function(breakName) {

        if(userFavorites.indexOf(breakName) > -1) {
            var favorite = true;
        };

        if(favorite) {
            var icon = '<span class="favorite-wrapper-guide is-a-favorite-guide" title="Remove from favorites"><img class="favorite-guide"  src="img/heart.svg"></span>';
        } else {
            var icon = '<span class="favorite-wrapper-guide not-a-favorite-guide" title="Add to favorites"><img class="favorite-guide" src="img/heart.svg"></span>';
        };

        return icon;
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

          var costInfo = '<p class="rollover-info cost-rollover cost-hover-default-style ">' + '$' + obj.budget + '</p>';

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
                var distance = '<p class="rollover-info distance-rollover distance-hover-default-style">' + distanceFly + 'h' + '</p>';

                return distance;

            } else {

                var distanceIcon = '<img src="img/distance_plane.svg" class="icon distance-guide" title="Estimated flight duration from your location">' + '<p class="distance-guide-hours">' + distanceFly + 'h' +'</p>';

                return distanceIcon;
            };
        } else {

            var distanceDrive = result;

            if(rollover) {
                // Cache distance element with distance
                var distance = '<p class="rollover-info distance-rollover distance-hover-default-style">' + distanceDrive + 'mi' + '</p>';

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

        var waterTempInfo = '<p class="rollover-info water-temp-rollover water-temp-hover-default-style ">' + waterTemp + '℉' + '</p>';

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
            var waveSizeInfo = '<p class="rollover-info wave-size-rollover wave-size-hover-default-style ">' + obj.min + "-" + obj.max + "'" +'</p>';
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

        var $currentSurfGuide = $('#guide-break-name').text();
        var $surfGuideTitleContainer = $('.guide-header');

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
            surf guide if the user changed surf guides during the api request
            processing */
            var $surfGuideContainer = $('.surf-guide-container');

            if ($currentSurfGuide === breakName && !$('.conditions-error').length) {

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

            if ($currentSurfGuide === breakName) {

                var errorFrame = '<div class="col-xs-12 error-frame"></div>',
                    errorElem = '<div class="error-container"></div>',
                    errorMsg = '<p class="conditions-error">' + breakName + ' ' + "conditions unavailable =(" + '</p>',
                    errorCloseButton = '<button type="button" class="btn error-close-button">✖</button>';

                // Insert a frame to hold the error container
                $surfGuideTitleContainer.after(errorFrame);

                var $errorFrame = $('.error-frame');

                // Insert the error container
                $errorFrame.append(errorElem);

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
                    $errorFrame.remove();

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

    // When the map close symbol is clicked, hide or show the map
    $('.map-symbol').on('click', function(e) {

        // Cache refs to DOM
        var $mapSymbol = $('.map-symbol'),
            $mapContainer = $('.map-container'),
            $map = $('#map'),
            $surfGuide = $('.surf-guide-container'),
            $searchContainer = $('.search-container'),
            $topOfWindow = $(window).scrollTop(),
            $bottomOfMap = $('.map-section').height(),
            $locationFrames = $('.location-frame'),
            $numLocations = $('.location-frame:visible').length;

        /* If clicking the button from map view, close the map and show the
         grid view of the location frames */
        if(mapView) {

            // Select/deselect the map symbol
            $mapSymbol.toggleClass("map-default map-selected");

            // Hide the map immediately
            // When view is checked the map bounds won't be set
            // Map must be hidden immediately to avoid this
            $map.hide();

            /* Update the layout (do this after toggling the map symbol)
             because 'checkView' uses it to determine if map view is
             enabled */
            self.checkView();

            // After checking view, map container is set back to default
            // Default is display:none, which means the slide toggle below
            // will have the opposite effect (it will reopen the map) unless
            // the map is reshown beforehand
            $mapContainer.show();

            /* Show all location frames if only one is visible.
               However, if only one frame is visible due to a search, then do
               nothing */
            if($numLocations == 1 && $locationFrames.length > 1) {
                $locationFrames.show();
            };

            /* Close the map container. Once fully closed, make all markers
            small & close any open info windows */
            $mapContainer.slideToggle(200, function() {

                console.log('close map & any open infowindows');

                makeMarkerSmall();
                infoWindow.close();
            });

        /* If clicking the button from grid view, close the grid and show the map view of the locations */
        } else if(gridView) {

            // Scroll to top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // Select/deselect the map symbol
            $mapSymbol.toggleClass("map-default map-selected");

            // Show the map immediately if it was hidden in map view
            if($map.is(":hidden")) {
                $map.show();
            };

            /* Update the layout (do this after toggling the map symbol)
             because 'checkView' uses it to determine if map view is
             enabled */
            self.checkView();

            console.log('open map');

            // Opens the map view by slowly fading into view
            $mapContainer.fadeIn(1000);

            console.log('resize map');

            // Resize the map immediately after it begins to fade in
            // Sometimes the window size is toggled while the map is hidden
            // Or the map size may change between different views
            // This resizes the map to adjust to the windows new dimensions
            google.maps.event.trigger(map, 'resize');

            // Set the map bounds after map size has been adjusted
            setMapBounds();

        /* The guide view toggling of the map handles both opening and closing
        the map */
        } else if (guideView && !mobileView) {

            // Scroll to top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // Select/deselect the map symbol
            $mapSymbol.toggleClass("map-default map-selected");

            // Show the map immediately if it was hidden in map view
            if($map.is(":hidden")) {
                $map.show();
            };

            // Toggle the map
            $mapContainer.slideToggle(200, function() {
                if($map.is(":visible")) {

                    console.log('open map');
                    console.log('resize map');

                    // Resize the map to adapt to new window size
                    google.maps.event.trigger(map, 'resize');

                    // Center the map over the relevant marker
                    centerOnGuideMarker();

                } else {

                    console.log('close map & any open infowindows');

                    // Close open info window and make marker small
                    makeMarkerSmall();
                    infoWindow.close();
                };
            });

        /* The mobile view toggling of the map view handles both opening
        and closing of the map.
        ** If the user's scroll position is above the
        bottom of the map container, map toggling is enabled.
        ** If the user's scroll position is below this, only enable
        toggling of the map if it's not already visible.
        ** If it is visible, instead of hiding it, the window is scrolled
        to the top of the page so the user can make use of the map */
        } else if (mobileView && $topOfWindow < $bottomOfMap || $topOfWindow >= $bottomOfMap && $mapContainer.is(":hidden")) {

            // Scroll to top of the page
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            // Select/deselect the map symbol
            $mapSymbol.toggleClass("map-default map-selected");

            // Show the map immediately if it was hidden in map view
            if($map.is(":hidden")) {
                $map.show();
            };

            /* Show all location frames if only one is visible.
               However, ff only one frame is visible due to a search, then do
               nothing */
            if($numLocations == 1 && $locationFrames.length > 1) {
                $locationFrames.show();
            };

            // Toggle the map.
            $mapContainer.slideToggle(200, function() {
                if($map.is(":visible")) {

                  console.log('open map');

                  // When map is open and surf guide is visible:
                    if($surfGuide.is(":visible")) {

                        console.log('resize map');

                        // Resize the map to adapt to new window size
                        google.maps.event.trigger(map, 'resize');

                        // Center the map over the relevant marker
                        centerOnGuideMarker();

                    // When map is opened and the surf guide is hidden:
                    } else {

                        console.log('resize map');

                        // Resize map and set bounds to adapt to window size
                        google.maps.event.trigger(map, 'resize');
                        setMapBounds();
                    };

                // When map is closed and surf guide is visible/hidden:
                } else {

                    console.log('close map & any open infowindows');

                    // Close open info window and make marker small
                    makeMarkerSmall();
                    infoWindow.close();
                };
            });
        } else {

            console.log('scroll to map');

            /* Scroll to top of the page if the map is already open in
            mobile view */
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        };
    });

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

    self.generateMarkers = function(locationData) {

        /* Loop through locationData and filter out the coordinates
        & break name for each break. Save the break's coordinates and name
        in their own variables for easy referencing */
        var locationDataLength = locationData.length;

        for(var i = locationDataLength; i--;) {

            var obj = locationData[i];

            // Create a variable to hold each break's coordinates
            var breakCoordinates = ({lat: obj.lat, lng: obj.lng});

            // Create a variable to hold the name of the break
            var breakName = obj.breakName;

            // Create a variable to hold the name of the break location
            var breakLocation = obj.location;

            /* Create a marker and set its position. Pass the variables
            created above as arguments*/
            self.addMarker(breakName, breakCoordinates, breakLocation, obj);
        };

        // Add map event listener the detects when the map is idle
        // Make markers within the viewport/map bounds visible and those
        // that aren't invisible
        // Show only the location frames and markers whose markers are within
        // view port's map bounds
        google.maps.event.addListener(map, 'idle', function() {

            // Only execute the following code if the map is visible and
            // managers aren't disabled (window isn't being resized)
            if($('#map').is(":visible") && !resizeInProgress) {
                self.manageFrames();
                self.manageMarkers();
            };
        });

        // When the map is clicked, location frames are made visible.
        // This is useful if they were hidden as a result of a marker being
        // clicked.
        // In addition, all open info windows are closed and any selected
        // markers are made small again
        google.maps.event.addListener(map, 'click', self.clickMap);

        // Display markers found in the markers array on the map
        displayMarkers(map);

        // Set initial map bounds based on location of markers
        if($('#map').is(":visible")) {
            setMapBounds();
        };
    };

    self.addMarker = function(breakName, breakCoordinates, breakLocation, obj) {

        /* If markers load after updateMarkers function has run, update
        markers' imgs that match the user's favorites */
        if(favoritesUpdated) {

            console.log('error: marker favorites not updated! --update again');

            if(userFavorites.indexOf(breakName) > -1) {
                var markerImg = 'img/marker_smallFav.svg';
            } else {
                var markerImg = 'img/marker_small.svg';
            };
        } else {
            var markerImg = 'img/marker_small.svg';
        };

        var marker = new google.maps.Marker({

            // Set position using the newly created variable
            position: breakCoordinates,
            map: map,
            icon: markerImg,

            /* Set the title for the break marker as the name of the
            wave/location of the break. This way it can be searched/filtered
            in the ViewModel*/
            title: breakName + ' ' + '(' + breakLocation + ')'
        });

        // Add a text box that displays the break name and location when
        // clicked
        self.addListeners(marker, breakName, obj);
    };

    self.addListeners = function(marker, breakName, obj) {

        google.maps.event.addListener(marker, 'dblclick', (function(marker) {

            /* Create an inner function what will at the time of iteration save
            a double-click event to the relevant marker. When the user double-
            clicks, the map will zoom in on the marker*/
            return function() {

                // Center the map
                map.setCenter(marker.getPosition());

                /* Set zoom if marker is clicked and not already zoomed in at
                14 or above*/
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

                // Update the visible frames
                self.manageFrames();

                // Cache the title of the marker not including the location
                var markerName = marker.title.replace(/ *\([^)]*\) */g, "");

                if (marker.icon === 'img/marker_small.svg') {
                    console.log('make ' + markerName + "'" + 's marker big');
                    marker.setIcon('img/marker_selected.svg');
                } else if (marker.icon === 'img/marker_smallFav.svg') {
                    console.log('make ' + markerName + "'" + 's marker big');
                    marker.setIcon('img/marker_selectedFav.svg');
                };

                getInfoWindow(marker, breakName);

                // Bounce marker upon clicking
                animateMarker(marker);

                /* Show surf guide (only if surf guide is already open) when
                the marker is clicked */
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

        // Location frame pulsates when it's corresponding marker is hovered
        // over
        google.maps.event.addListener(marker, 'mouseover', (function(breakName) {

            /* Create an inner function what will at the time of iteration save
            the breakName and any behavior to the current marker */
            return function() {

                var $numFramesVisible = $('.location-frame:visible').length;

                // If the surf guide is open do nothing
                if (!$('.surf-guide-container').length) {

                    // Pulsate the associated location frame
                    pulsateLocationFrame(breakName);

                    // If more than one location frame is in view and
                    // not in mobile view, execute code
                    if($numFramesVisible !== 1 && window.outerWidth >= 768) {

                        // Scroll to specific location frame
                        scrollToFrame(breakName);
                    };
                };
            };

        /* Pass the relevant marker and break name (breakName) for the current
        iteration as an argument into the function*/
        })(breakName));

        google.maps.event.addListener(marker, 'mouseout', (function(breakName) {

            /* Create an inner function what will at the time of iteration save
            the breakName and any behavior to the current marker */
            return function() {

                // If the surf guide is open do nothing
                if (!$('.surf-guide-container').length) {

                    // Reverse pulstate the associated location frame
                    pulsateLocationFrame(breakName);
                };
            };

        /* Pass the relevant marker and break name (breakName) for the current
        iteration as an argument into the function*/
        })(breakName));

        // Add each marker to the markers array
        markers.push(marker);
    };

    self.clickMap = function () {

        // Find last selected marker and make pin small again
        makeMarkerSmall();

        /* If the surf guide isn't visible show the locations, otherwise
        do nothing (just close the info windows) */
        if (!$('.surf-guide-container').is(":visible")) {
            $('.location-frame').show();
        };

        // Close any open info windows
        infoWindow.close();

        // Update visible frames
        self.manageFrames();
    };

    // Update visible markers depending on which ones fall within the current
    // map bounds
    self.manageMarkers = function () {

        console.log('manage markers');

        // Cache the length of the markers array
        var markersLength = markers.length,
            numMarkersVisible = 0;

        // Iterate through the markers array to check which markers fall
        // within the current map bounds
        for(var i = markersLength; i--;) {

            var marker = markers[i];

            // Get map bounds and determine which markers are within them
            if(map.getBounds().contains(marker.getPosition())) {

                // Show any markers that fall within the current map bounds
                // If a search has been made, show only those markers that
                // not only fall within the map bounds, but also match the
                // search query
                self.showMarkers(marker);

            // If the markers are not within the current map bounds,
            // hide them
            } else {

                // If a marker is selected, don't hide it
                if(marker.icon === "img/marker_selected.svg" || marker.icon === "img/marker_selectedFav.svg") {
                    marker.setVisible(true);
                } else {
                    marker.setVisible(false);
                };
            };
        };
    };

    // Update visible frames depending on markers visible in the view port
    self.manageFrames = function () {

        // Cache the length of the markers array
        var markersLength = markers.length;

        // Check if any markers are selected, if so do not adjust visible
        // frames. Otherwise, the selected marker's frame will not be the
        // only frame visible as others would be added whenever the map is
        // adjusted
        for(var i = markersLength; i--;) {

            // If any of the marker's images matches a 'selected' image
            // End the function
            if(markers[i].icon === "img/marker_selected.svg" || markers[i].icon === "img/marker_selectedFav.svg") {
                return;
            };
        };

        console.log('manage location frames');

        // Clear the visible location frames
        self.locationGrid.removeAll();

        // Iterate backwards through the markers array, so that their
        // location frames when matched are add back to the location grid
        // in the same order
        for(var i = markersLength; i--;) {


            // Cache the title of the marker not including the location
            var markerName = markers[i].title.replace(/ *\([^)]*\) */g, "");

            // Get map bounds and determine which markers are within them
            // Display the location frames of only those markers found
            // within the maps boundaries
            if(map.getBounds().contains(markers[i].getPosition())) {

                // If the search container is visible, only display the
                // frames of those markers that match the current search
                // query
                if ($('.search-container').is(":visible")) {

                    // Cache the current search query
                    var search = self.Query().toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "");

                    // Compare the search query with the title of the
                    // markers found within the map's boundaries
                    if (markers[i].title.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "").indexOf(search) > -1) {

                        // If there is a match, make the frame visible
                        updateFrames(markerName);
                    };

                // If the favorites filter button is selected, only display
                // the frames of those markers that are within the user's
                // favorites
                } else if ($('.favorite-filter-selected').length) {

                    // Compare the marker title to the user's favs
                    if (userFavorites.indexOf(markerName) > -1) {

                        // If there is a match, make the frame visible
                        updateFrames(markerName);
                    };

                // If the search container isn't visible and the favorites
                // filter isn't selected, display only the location
                // frame's of the markers that fall within the map's
                // current boundaries
                } else {

                    // Update the visible frames
                    updateFrames(markerName);
                };
            };
        };

        // Remove or display the location frames of those markers found
        // within the map's current boundaries
        function updateFrames (markerName) {

            // Iterate through the array of locations
            self.locationArray.forEach(function(obj) {

                // If a marker within the map's boundaries matches a
                // location, display it
                if (markerName === obj.breakName) {
                      self.locationGrid.push(obj);
                };
            });
        };

        // If in mobile view, do not reset the location frame's styling
        // Otherwise, alter their styling for map view
        if(!mobileView) {
            self.resetLocationFrames();
        };

        // Re-add rollover effects
        self.addRolloverEffect();

        // Re-render the location frame's 'favorite' status
        self.renderFavoriteOnLocationFrame();
    };

    // Show all of the map's markers
    // If a search has been made, show only those markers that match the search
    // query
    // If the favorites filter is selected, show only those markers that match
    // the user's favorites
    self.showMarkers = function (marker) {

        // Shorten the marker title to just the break name
        var markerTitle = marker.title.replace(/ *\([^)]*\) */g, "");

        // If the search container is visible, only display the
        // markers that match the current search query
        if ($('.search-container').is(":visible")) {

            // Cache the current search query
            var search = self.Query().toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "");

            // Compare the search query with the title of the marker
            if (marker.title.toLowerCase().replace(/ /g, "").replace(/'/g, "").replace(/,/g, "").indexOf(search) > -1) {

                // If there is a match, make the marker visible
                marker.setVisible(true);
            };

        // If the favorites button is selected, only display the markers
        // that are within the users's favorites
        } else if ($('.favorite-filter-selected').length) {

            // Compare the marker title to the user's favs
            if (userFavorites.indexOf(markerTitle) > -1) {

                // If there is a match, make the marker visible
                marker.setVisible(true);
            };

        // If the search container isn't visible, show all markers
        } else {

            // Make all markers visible
            marker.setVisible(true);
        };
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

}

function displayMarkers(map) {

    // Loop through the markers array and display on the map
    var markersLength = markers.length;

    for (var i = markersLength; i--;) {
        markers[i].setMap(map);
    };
};

function setMapBounds () {

    console.log('set map bounds');

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

// Center the map on the selected marker
function centerOnGuideMarker () {

    console.log('center map to relevant marker');

    // Cache DOM ref
    var breakName = $('#guide-break-name').text();

    // Iterate through the markers array
    markers.forEach(function(marker) {

        // Cache the title of the marker not including the location
        var markerName = marker.title.replace(/ *\([^)]*\) */g, "");

        // If the currently selected surf guide's break name matches
        // a marker's break name:
        if (breakName === markerName) {

            // If info window isn't open
            // Also, make the marker big if it isn't
            // If the info window/marker are already open/big, do nothing
            // This avoids repeating these tasks everytime window is resized
            if (!isInfoWindowOpen(infoWindow)){

                console.log('info window & marker not activated');

                // Make the relevant marker big
                makeMarkerBig(marker, markerName);

                // Open info window
                getInfoWindow(marker, breakName);
            };

            // Center the map over the marker
            map.setCenter(marker.getPosition());

            // Zoom in on the relevant marker
            map.setZoom(10);
        };
    });
};

// Activate the info window for the selected marker
function getInfoWindow (marker, breakName) {

    console.log('show ' + breakName + "'s info window");

    // Assign content to InfoWindow object
    infoWindow.setContent(breakName);

    // Assign the InfoWindow object the appropriate marker
    infoWindow.open(map, marker);
};

// Check to see if the info window object is already open
function isInfoWindowOpen(infoWindow){
    var map = infoWindow.getMap();
    return (map !== null && typeof map !== "undefined");
};

// Set the animation for the selected marker
function animateMarker (marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    window.setTimeout(function() {
        marker.setAnimation(null);
    }, 730);
};

function showLocationFrame (breakName) {

    // Cache DOM reference to all location frames
    var $allLocationFrames = $('.location-frame');

    // Hide all location frames
    $allLocationFrames.hide();

    // Loop through all of the location frames
    $allLocationFrames.each(function() {

        // Cache the current location frame's reference and text
        var $locationFrame = $(this);
        var $locationFrameText = $locationFrame.text();

        /* If a specific location frame's text matches the currenlty selected
        break, show it*/
        if($locationFrameText.indexOf(breakName) > -1) {

            console.log('show only ' + breakName + "'s location frame");
            $locationFrame.show();
        };
    });
};

function pulsateLocationFrame (breakName) {

    // Cache DOM references
    var $allLocationFrames = $('.location-frame'),
        $numFramesVisible = $('.location-frame:visible').length;

    // If more than one location frame is in view and not in mobile view,
    // execute code
    if($numFramesVisible !== 1 && window.outerWidth >= 768) {

        // Loop through all of the location frames
        $allLocationFrames.each(function() {

            // Cache the current location frame's reference and text
            var $locationFrame = $(this),
                $locationFrameText = $locationFrame.text();

            /* If a specific location frame's text matches the currently hovered/unhovered marker, pulsate or reverse pulsate it */
            if($locationFrameText.indexOf(breakName) > -1) {

                /* If hovering away from the marker, reverse pulsate its
                location frame */
                if($('.pulse-location-frame').length) {

                    console.log("make " + breakName + "'s location frame small");

                    // Add/remove necessary classes to animate
                    $locationFrame.removeClass("pulse-location-frame").addClass("reverse-pulse");

                    // Remove the reverse pulse effect
                    removePulse($locationFrame);

                // If hovering over the marker, pulsate its location frame
                } else {

                    console.log("make " + breakName + "'s location frame big");

                    // Add necessary class to animate
                    $locationFrame.removeClass("reverse-pulse").addClass("pulse-location-frame");
                };
            };
        });

    /* If only one location is in view, do nothing unless hovering away from
    its marker */
    } else if ($numFramesVisible === 1 && $('.pulse-location-frame').length) {

        // Cache DOM refs to the visible location frame
        // Capture the location name of the visible location frame
        var $locationFrame = $('.location-frame:visible'),
            $locationName = $locationFrame[0].children[1].innerText;

        console.log("make " + $locationName + "'s location frame small");

        // Add/remove necessary classes to animate
        $locationFrame.removeClass("pulse-location-frame").addClass("reverse-pulse");

        // Remove the reverse pulse effect
        removePulse($locationFrame);
    };

    // Remove the reverse pulse effect
    function removePulse ($locationFrame) {

        /* Set a time to remove the effect just after the reverse pulse effect
         finishes its animation on the previous marker's location frame */
        var timer = setTimeout (function() {
            $locationFrame.removeClass("reverse-pulse");
        }, 400);
    };
};

// Automatically scroll to the location frame whose marker is being hovered
// over
function scrollToFrame(breakName) {

    // Cache DOM refs
    var $locationsContainer = $('.location-grid'),
        $locationFrame = $('.location-frame'),
        $pulsatingLocation = $('.pulse-location-frame'),
        $oldPosition = $locationsContainer.scrollLeft();

    // Check if autoscroll is already engaged
    // If it is, clear the interval
    if (typeof scrollRightRunning !== 'undefined' && scrollRightRunning) {
        console.log('clear right scrolling in progress');
        clearInterval(scrollRight);
    } else if (typeof scrollLeftRunning !== 'undefined' && scrollLeftRunning) {
        console.log('clear left scrolling in progress');
        clearInterval(scrollLeft);
    };

    // Cache the width of the outer container for the locations
    var $locationsCountainerWidth = $locationsContainer.width();

    // Get and cache the outer width of the location frame
    var $frameWidth = $locationFrame.outerWidth(true);

    // Get the space needed on both sides of a location frame to center it
    var spaceLeftNRight = ($locationsCountainerWidth - $frameWidth)/2;

    // Get and cache a ref to the position (index) of frame that is being
    // hovered over
    var $targetIndex = $pulsatingLocation.index();

    // Calculate the amount of space preceding the location being hovered over
    // This is done by multiplying the number of the frames preceding the said
    // location by the location frame width
    var spacePreceding = $frameWidth * $targetIndex;

    // Subtract the space needed on the left/right of the frame
    // from the space that preceeds the targeted frame
    var newPosition = spacePreceding - spaceLeftNRight;

    console.log("auto scroll to " + breakName + "'s location frame");

    // Scroll to the new location using the new position
    // Scroll right if the new scrollLeft position is greater than current pos.
    if(newPosition > $oldPosition) {

      // Set the beginning scollLeft position on which to iterate
      var transitionRight = $oldPosition;

      // Create a loop that moves the scroll bar from left to right
      var scrollRight = setInterval(function() {

          // Create a global variable to indicate the scrolling is in progress
          scrollRightRunning = true;

          // Increase the scrollLeft position 30px for each 1/1000 of second
          transitionRight+=50;

          // If the scrollLeft position is less than the new position
          // move the scrollLeft position incrementally closer to it
          if(transitionRight < newPosition) {
              $locationsContainer.scrollLeft(transitionRight);

          // If the scrollLeft position is greater/equal to the new position,
          // stop the loop
          } else {
              stopScrolling();
          };

      }, 1);

    // Scroll left if the new scrollLeft position is less than current position
    } else {

      // Set the beginning scollLeft position on which to iterate
      var transitionLeft = $oldPosition;

      // Create a loop that moves the scroll bar from right to left
      var scrollLeft = setInterval(function() {

          // Create a global variable to indicate the scrolling is in progress
          scrollLeftRunning = true;

          // Increase the scrollLeft position 30px for each 1/1000 of second
          transitionLeft-=50;

          // If the scrollLeft position is greater than the new position
          // move the scrollLeft position incrementally closer to it
          if(transitionLeft >  newPosition) {
              $locationsContainer.scrollLeft(transitionLeft);

          // If the scrollLeft position is less/equal to the new position,
          // stop the loop
          } else {
              stopScrolling();
          };

      }, 1);

    };

    // Stop auto scrolling
    function stopScrolling () {

        // If scrolling left or right, stop the loop
        if(typeof scrollLeftRunning !== 'undefined' && scrollLeftRunning) {
            clearInterval(scrollLeft);
            scrollLeftRunning = false;
        } else if (typeof scrollRightRunning !== 'undefined' && scrollRightRunning) {
            clearInterval(scrollRight);
            scrollRightRunning = false;
        };

        // Since each iteration towards the new position increments by 30px
        // each time, it will never quite reach the exact goal, which leaves
        // the location frame off center. To avoid this, set the scrollLeft
        // position to the new position at the end of scrolling
        $locationsContainer.scrollLeft(newPosition);

        console.log('move scroll position from ' + $oldPosition + ' toward ' + newPosition);
        console.log('stop scrolling');
        console.log('scroll position at: ' + $locationsContainer.scrollLeft());
    };
};

// Find last selected marker and make pin small again
function makeMarkerSmall () {
    markers.forEach(function(marker) {

        // Cache the title of the marker not including the location
        var markerName = marker.title.replace(/ *\([^)]*\) */g, "");

        if (marker.icon === 'img/marker_selected.svg') {
            console.log('make ' + markerName + "'" + 's marker small');
            marker.setIcon('img/marker_small.svg');
        } else if (marker.icon === 'img/marker_selectedFav.svg') {
            console.log('make ' + markerName + "'" + 's marker small');
            marker.setIcon('img/marker_smallFav.svg');
        };
    });
};

function makeMarkerBig (marker, markerName) {

    /* If marker wasn't previously activated, make it big for
    normal and fav icons */
    if (marker.icon === 'img/marker_small.svg') {

        console.log('make ' + markerName + "'" + 's marker big');

        // Change the marker's image
        marker.setIcon('img/marker_selected.svg');

    } else if (marker.icon === 'img/marker_smallFav.svg') {

        console.log('make ' + markerName + "'" + 's marker big');

        // Change the marker's image
        marker.setIcon('img/marker_selectedFav.svg');

    };
};

// Change any map markers that match/don't match the user's favorites
function updateFavMarkers (favorites) {
    markers.forEach(function(marker) {

        // Cache the title of the marker not including the location
        var markerName = marker.title.replace(/ *\([^)]*\) */g, "");

        /* If the name matches a user's favorite, change the image */
        /* Any markers that don't match the user's favs or were never a
        fav remain unaltered */
        if (favorites.indexOf(markerName) > -1) {
            if(marker.icon === 'img/marker_small.svg') {
                console.log("make " + markerName + "'s marker a favorite!");
                marker.setIcon('img/marker_smallFav.svg');
            } else if (marker.icon === 'img/marker_selected.svg') {
                console.log("make " + markerName + "'s marker a favorite!");
                marker.setIcon('img/marker_selectedFav.svg');
            };
        // If the name doesn't match, but was a fav, change the img back
        } else if (marker.icon === 'img/marker_smallFav.svg') {
            console.log("unfavorite " + markerName + "'s marker!");
            marker.setIcon('img/marker_small.svg');
        } else if (marker.icon === 'img/marker_selectedFav.svg') {
            console.log("unfavorite " + markerName + "'s marker!");
            marker.setIcon('img/marker_selected.svg');
        };
    });
};



ko.applyBindings(new AppViewModel);