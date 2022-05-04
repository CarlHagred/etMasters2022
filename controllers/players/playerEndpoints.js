import Player from '../../models/player.js';
import mongoose from 'mongoose';
import Competition from '../../models/competition.js';
import Round from '../../models/round.js';

export const getPlayers = async (req, res) => {
  let players;
  try {
    players = await Player.find();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.json({
    players: players.map((player) => player.toObject({ getters: true })),
  });
};

export const registerPlayerToCompetition = async (req, res) => {
  const player = await Player.findById('6267baede7c6e6b3c324c7b2');
  Competition.findOne({ players: player }, async (err, doc) => {
    //if (err) res.send(err);
    if (!doc) {
      const competition = await Competition.findById(
        '626908b9f30bd77383f8f935'
      );

      try {
        // competition = await Competition.findById('6268dee44da1bf35c03268fa');
      } catch (err) {
        // res.status(404).json({ message: error.message });
      }

      try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        competition.players.push(player);
        await competition.save({ session: sess });
        await sess.commitTransaction();
      } catch (err) {
        console.log(err);
      }
    }
  });
};

export const registerCompetitionToPlayer = async (req, res) => {
  //Temporär lösning för att inte göra fler av samma competition för samma spelare
  const competition = await Competition.findById('626908b9f30bd77383f8f935');
  Player.findOne({ competition: competition }, async (err, doc) => {
    //if (err) res.send(err);
    if (!doc) {
      const player = await Player.findById('6267baede7c6e6b3c324c7b2');

      try {
        //competition = await Competition.findById('6268dee44da1bf35c03268fa');
      } catch (err) {
        // res.status(404).json({ message: error.message });
      }
      try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        player.competition.push(competition);
        await player.save({ session: sess });
        await sess.commitTransaction();
      } catch (err) {
        console.log(err);
      }
    }
  });
};

export const changePlayerHandicap = async (req, res) => {
  const playerName = 'gustav'; //req.params.playerName;
  const handicap = 20; //req.params.handicap;
  Player.findOneAndUpdate(
    { name: playerName },
    { $set: { handicap: handicap } },
    { new: true },
    (err, doc) => {
      if (doc) {
        //res.status(200).send("Success");
      }
    }
  );
};

export const getListOfPlayedRounds = async (req, res) => {
  //competition: req.params osv
  const competition = await Competition.findById('626908b9f30bd77383f8f935')
    .populate('players', 'name')
    .populate({
      path: 'rounds',
      populate: { path: 'player', model: 'Player' },
    });

  let scoreList = {};

  competition.rounds.forEach((round) => {
    if (scoreList.hasOwnProperty(round.player.name)) {
      scoreList[round.player.name] =
        scoreList[round.player.name] + round.points;
    } else {
      scoreList[round.player.name] = round.points;
    }
  });
  
  console.log(scoreList);
  res.json(scoreList)
  
  
};

export const getTotalScoreForPlayer = async (req, res) => {
  const playerName = 'Jucke';
  const competition = await Competition.findById('626908b9f30bd77383f8f935')
    .populate('players', 'name')
    .populate({
      path: 'rounds',
      populate: { path: 'player', model: 'Player' },
    });
  let totalScore = [];

  competition.rounds.forEach((round) => {
    //console.log(round.player._id.toString());
    if (playerName === round.player.name) {
      if (totalScore.hasOwnProperty(round.player.name)) {
        totalScore[round.player.name] =
          totalScore[round.player.name] + round.points;
      } else {
        totalScore[round.player.name] = round.points;
      }
    } else {
      /* return res.status(404).send({
        message: "Player not found with name: " + playerName,
      });*/
    }
  });
  console.log(totalScore);
};
