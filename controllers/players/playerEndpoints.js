import Player from '../../models/player.js';

export const postPlayer = async (req, res) => {
  const name = 'Jucke';
  const password = 'gedenGeden';
  const handicap = 34; // req.body.handicap;

  Player.findOne({ name: name }, async (err, doc) => {
    if (err) res.send(err);
    if (!doc) {
      const newPlayer = new Player({
        name: name,
        password: password,
        handicap: handicap,
        competition: [],
      });
      await newPlayer.save();
      //res.status(201).json('Success');
    }
  });
};

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
