const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SavedPublicationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  publicationId: {
    type: Schema.Types.ObjectId,
    ref: "publications",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("savedPublications", SavedPublicationSchema);
