//create a model for groups
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GroupSchema = new Schema({
  name: {
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
    default: Date.now,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "admins",
  },
  posterimage: {
    type: String,
    required: false,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  website: {
    type: String,
    required: false,
  },
  publications: [
    {
      type: Schema.Types.ObjectId,
      ref: "publications",
    },
  ],
});

module.exports = mongoose.model("groups", GroupSchema);
