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
  const compID = req.query.compID;
  const playerID = req.query.playerID;
  console.log(compID);
  console.log(playerID);
  const player = await Player.findById(playerID);
  console.log(player);
  Competition.findById(compID, async (err, doc) => {
    if (doc && !doc.players.includes(playerID)) {
      try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        doc.players.push(player);
        await doc.save({ session: sess });
        await sess.commitTransaction();
      } catch (err) {
        console.log(err);
      }
    }
  });

  registerCompetitionToPlayer(req);
};

export const registerCompetitionToPlayer = async (req) => {
  const compID = req.query.compID;
  const playerID = req.query.playerID;
  //Temporär lösning för att inte göra fler av samma competition för samma spelare
  const competition = await Competition.findById(compID);
  Player.findOne({ competition: competition }, async (err, doc) => {
    //if (err) res.send(err);
    if (!doc) {
      const player = await Player.findById(playerID);
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
  const playerId = req.query.playerId;
  const handicap = req.query.handicap;
  Player.findOneAndUpdate(
    { _id: playerId },
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
