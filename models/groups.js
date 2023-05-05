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
    url: String,
    filename: String,
  },

  images: [
    {
      url: String,
      filename: String,
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
