const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const playerModel = require("./Player");
const Player = mongoose.model("Player", playerModel);

router.get("/player", (req, res) => {
  Player.find({})
    .then((players) => {
      res.status(200).send({
        players,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/player/save", (req, res) => {
  const { name, _team_id, birthday, photo, foot, position, character } =
    req.body;
  if (name != undefined) {
    const player = new Player({
      name,
      _team_id,
      birthday,
      photo,
      foot,
      position,
      character,
      date: { type: Date, default: Date.now },
    });
    player
      .save()
      .then(() => {
        res.status(201).send({
          response: "Jogador cadastrado.",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.delete("/player/delete", (req, res) => {
  const { _id } = req.body;
  Player.findByIdAndDelete(_id)
    .then(() => {
      res.status(200).send({
        response: "Jogador removido com sucesso!",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
