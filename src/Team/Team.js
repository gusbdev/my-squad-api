const mongoose = require("mongoose");

const teamModel = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now },
});

module.exports = teamModel;
