import Competition from '../../models/competition.js';
import Player from '../../models/player.js';

export const postCompetition = async (req, res) => {
  const name = 'Masters';
  Competition.findOne({ name: name }, async (err, doc) => {
    if (err) res.send(err);
    if (!doc) {
      const newCompetition = new Competition({
        name: name,
        rounds: [],
        players: [],
      });
      await newCompetition.save();
    }
  });
};

export const postPlayer = async (req, res) => {
  const name = 'joel'; //req.body.name;
  const password = 'trassel1'; //req.body.password;
  const handicap = 5.9; //req.body.handicap;

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
