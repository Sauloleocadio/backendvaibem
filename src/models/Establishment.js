const mongoose = require("mongoose");

const EstablishmentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Establishment", EstablishmentSchema);
