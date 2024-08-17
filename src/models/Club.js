const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    genre: {
      type: String,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    meetings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Meeting" }],
    discussions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Discussion" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Club", clubSchema);
