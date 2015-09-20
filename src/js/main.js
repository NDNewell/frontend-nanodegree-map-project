var viewModel = {
    locations: [{
          place: 'Manly',
          wetsuit: '2mm',
          skillLevel: 'beginner'
        },
        {
          place: 'Santa Monica',
          wetsuit: '3mm',
          skillLevel: 'intermediate'
        },
        { place: 'Haliewa',
          wetsuit: 'boardshorts',
          skillLevel: 'expert'
        },
        {
          place: 'Bali',
          wetsuit: 'naked',
          skillLevel: 'expert'
        },
        {
          place: 'Chile',
          wetsuit: '5mm',
          skillLevel: 'expert'
        },
        { place: 'New Zealand',
          wetsuit: '4mm',
          skillLevel: 'intermediate'
        }]
};

viewModel.Query = ko.observable('');

viewModel.locationList = ko.computed(
    function() {
        var q = viewModel.Query();
        return viewModel.locations.filter(function(i) {
        return i.place.toLowerCase().indexOf(q.toLowerCase()) >= 0;
    });
});

// Activates knockout.js
ko.applyBindings(viewModel);