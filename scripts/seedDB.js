const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/superlatives",
  {
    useMongoClient: true
  }
);

const superlativeSeed = [
  {
    person: 'John Doe',
    words: 'Most likely to eat a hamburger',
    count: 0
  },
  {
    person: 'Jane Doe',
    words: 'Most likely to consume a frozen beverage on a tropical beach',
    count: 10
  },
  {
    person: 'Sparky the Wonder Squirrle',
    words: 'Most likely to go nuts during the winter',
    count: 15
  }
];

db.Superlative
  .remove({})
  .then(() => db.Superlative.collection.insertMany(superlativeSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
