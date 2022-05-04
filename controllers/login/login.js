import Player from "../../models/player.js";

export const login = async (req, res) => {
  const name = req.query.name;
  const password = req.query.password;
  await Player.findOne({ name: name, password: password }).then((doc, err) => {
    if (doc) {
      res.json({
        player: doc,
      });
    }
    if (err) {
      console.log(err);
    }
  });
};
