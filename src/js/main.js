var viewModel = {
    locations: [{
          place: 'Manly',
          wetsuit: '2mm',
          skillLevel: 'beginner',
          picture: '<img src="https://api.fnkr.net/testimg/500x250/0eafff/FFF/?text=img">'
        },
        {
          place: 'Santa Monica',
          wetsuit: '3mm',
          skillLevel: 'intermediate',
          picture: '<img src="https://api.fnkr.net/testimg/500x250/0eafff/FFF/?text=img">'
        },
        { place: 'Haliewa',
          wetsuit: 'boardshorts',
          skillLevel: 'expert',
          picture: '<img src="https://api.fnkr.net/testimg/500x250/0eafff/FFF/?text=img">'
        },
        {
          place: 'Bali',
          wetsuit: 'naked',
          skillLevel: 'expert',
          picture: '<img src="https://api.fnkr.net/testimg/500x250/0eafff/FFF/?text=img">'
        },
        {
          place: 'Chile',
          wetsuit: '5mm',
          skillLevel: 'expert',
          picture: '<img src="https://api.fnkr.net/testimg/500x250/0eafff/FFF/?text=img">'
        },
        { place: 'New Zealand',
          wetsuit: '4mm',
          skillLevel: 'intermediate',
          picture: '<img src="https://api.fnkr.net/testimg/500x250/0eafff/FFF/?text=img">'
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