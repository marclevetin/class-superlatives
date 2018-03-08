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
    person: 'Ben Baumann',
    words: "Most likely to (code) => (with) => code + with + 'ES6'",
    count: 0
  },
  {
    person: 'Lauren Wilson',
    words: 'Most likely to say "ta da!" when you least expect it',
    count: 0
  },
  {
    person: 'Chase Leinart',
    words: 'Most likely to dispute the pronunciation of JSON',
    count: 0
  },
  {
    person: 'Pat Sarsen',
    words: 'Most likely to accidentally. Yes, that is a complete thought.',
    count: 0
  },
  {
    person: 'Kris Pelchat',
    words: 'Most likely to wonder what happened.',
    count: 0
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
