import Competition from '../../models/competition.js';
import Player from '../../models/player.js';
import Round from '../../models/round.js';

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

export const deletePlayer = async (req, res) => {
  const name = 'joel'; //req.body.name;
  await Player.deleteOne({ name: name }).then((player) => {
    if (!player) {
      /* return res.status(404).send({
        message: "Player not found with name: " + name,
      });*/
    }
    //res.status(200).send({ message: "Patient deleted successfully!" });
  });
};


export const changeRoundPoint = async (req, res) => {
  const roundID = "6268dfc4a5a0770b88aa7bca"; //req.params.roundID;
  const points = 34; //req.params.points;
  Round.findOneAndUpdate(
    { _id: roundID },
    { $set: { points: points } },
    { new: true },
    (err, doc) => {
      if (doc) {
        //res.status(200).send("Success");
      }
    }
  );
};
