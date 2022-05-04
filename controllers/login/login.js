import Player from '../../models/player.js';
import Admin from '../../models/admin.js';

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

export const loginAdmin = async (req, res) => {
  const name = req.query.name;
  const password = req.query.password;
  await Admin.findOne({ name: name, password: password }).then((doc, err) => {
    if (doc) {
      res.json({
        admin: doc,
      });
    }
    if (err) {
      console.log(err);
    }
  });
};
