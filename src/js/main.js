function ViewModel() {
    this.locations =
        [{
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
        }]
}

// Activates knockout.js
ko.applyBindings(new ViewModel());


