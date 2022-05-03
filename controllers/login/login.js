import mongoose from "mongoose";
import Player from "../../models/player.js";

export const login = async (req, res) => {
  const name = req.query.name;
  const password = req.query.password;

  console.log(name);
  console.log(password);

  Player.findOne({ name: name, password: password }, async (err, doc) => {
    if (err) res.send(err);
    if (doc) {
      res.json({
        user: doc,
      });
    }
  });
};
