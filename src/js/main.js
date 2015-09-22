var viewModel = {
    locations: [{
        breakName: "Pipeline",
        place: "Oahu, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Sunset Beach",
        place: "Oahu, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Waimea Bay",
        place: "Oahu, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Turtle Bay",
        place: "Oahu, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Rocky Point",
        place: "Oahu, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Cannons",
        place: "Kauai, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Tunnels",
        place: "Kauai, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Hanalei",
        place: "Kauai, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Anahola",
        place: "Kauai, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }, {
        breakName: "Haleiwa",
        place: "Oahu, Hawaii",
        picture: '<img src="http://lorempixel.com/500/250/nature" class="location-image  img-responsive img-rounded">'
    }]
};

viewModel.Query = ko.observable("");

viewModel.locationList = ko.computed(function() {
    var q = viewModel.Query();
    return viewModel.locations.filter(function(e) {
        return e.breakName.toLowerCase().indexOf(q.toLowerCase()) >= 0
    })
});

ko.applyBindings(viewModel);