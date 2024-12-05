const excursion = {
  id: 101,
  name: "Island Adventure",
  price: 149.99,
  ratings: {
    average: 4.7,
    totalReviews: 234,
  },
  destinations: [
    {
      location: "Tropical Beach",
      activities: ["Snorkeling", "Beach Volleyball", "Kayaking"],
    },
    {
      location: "Rainforest Trail",
      activities: ["Hiking", "Bird Watching", "Photography"],
    },
  ],
  guide: {
    name: "Sam Carter",
    experience: "5 years",
    languages: ["English", "Spanish"],
  },
};

// Access the name of the excursion.
console.log(excursion.name);
// Get the average rating.
console.log(excursion.ratings.average);
// Retrieve the location of the second destination.
console.log(excursion.destinations[1].location);
// List all activities available at the Tropical Beach.
console.log(excursion.destinations[0].activities);
// Find out what languages the guide speaks.
console.log(excursion.guide.languages);
// Access the price of the excursion.
console.log(excursion.price);