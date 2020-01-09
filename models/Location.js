const mongoose = require("mongoose");

let LocationSchema = mongoose.Schema({
  name: {
    type: String,
    required: "Please complete the field."
  },
  address: {
    type: String,
    required: "Please complete the field."
  },
  rating: {
    type: Number,
    required: "Please complete the field."
  },
  description: {
    type: String,
    required: "Please complete the field."
  },
  category: {
    type: String,
    required: "Please complete the field."
  },
  lat: {
    type: Number,
    required: "Please complete the field."
  },
  lng: {
    type: Number,
    required: "Please complete the field."
  }
});
module.exports = mongoose.model("Location", LocationSchema);
