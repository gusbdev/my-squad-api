const mongoose = require("mongoose");

const playerModel = new mongoose.Schema({
  name: String,
  _team_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
  birthday: String,
  photo: String,
  foot: String,
  position: String,
  character: String,
});

module.exports = playerModel;
