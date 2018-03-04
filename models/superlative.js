const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const superlativeSchema = new Schema({
  person: { type: String, required: [true, 'Person is required'] },
  words: { type: String, required: [true, 'Words are required'] },
  count: { type: Number, default: 1 }
});

const Superlative = mongoose.model("Superlative", superlativeSchema);

module.exports = Superlative;
