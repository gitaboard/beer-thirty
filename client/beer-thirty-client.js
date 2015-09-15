if (Meteor.isClient) {
  // This code only runs on the client
  Template.addBeer.helpers({
    beers: function () {
      return Beer.find({});
    }
  });

  Template.addBeer.events({
    "submit .add-a-beer": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var beerName = event.target.beerName.value;
      var brewery = event.target.brewery.value;
      var beerType = event.target.beerType.value;

      console.log(beerName + " " + beerType + " " + brewery);
      // Insert a task into the collection
      Beer.insert({
        beerName: beerName,
        brewery: brewery,
        beerType: beerType,
        createdAt: new Date() // current time
      });

      event.target.beerName.value = "";
      event.target.brewery.value = "";
      event.target.beerType.value = "";
    }
  });
}
