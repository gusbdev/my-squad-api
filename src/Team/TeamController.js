const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const teamModel = require("./Team");
const Team = mongoose.model("Team", teamModel);

router.get("/team", (req, res) => {
  Team.find({})
    .then((teams) => {
      res.status(200).send({
        teams,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/team/save", (req, res) => {
  const { name } = req.body;
  if (name != undefined) {
    const team = new Team({
      name,
    });
    team
      .save()
      .then(() => {
        res.status(201).send({
          response: "Time criado.",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = router;
