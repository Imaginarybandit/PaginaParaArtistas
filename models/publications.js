//create a mongoose schema for publications
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PublicationSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: "groups",
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("publications", PublicationSchema);
