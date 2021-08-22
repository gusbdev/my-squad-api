const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const teamController = require("./Team/TeamController");
const playerController = require("./Player/PlayerController");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mysquad", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", teamController);
app.use("/", playerController);

app.listen(8080, () => {
  console.log("Running on port 8080.");
});
