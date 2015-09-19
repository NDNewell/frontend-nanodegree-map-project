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
}

// Activates knockout.js
ko.applyBindings(new ViewModel());


