import Player from "../../models/player.js";
import mongoose from "mongoose";
import Competition from "../../models/competition.js";

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
  const player = await Player.findById(playerID);
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
  const competition = await Competition.findById(compID);
  Player.findOne({ competition: competition }, async (err, doc) => {
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
        res.status(200).send("Handicap changed");
      }
    }
  );
};

export const getListOfPlayedRounds = async (req, res) => {
  //competition: req.params osv
  const compId = req.query.compId;

  const competition = await Competition.findById(compId)
    .populate("players", "name")
    .populate({
      path: "rounds",
      populate: { path: "player", model: "Player" },
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

  // Här kan vi få in mer data för att göra leaderboarden mer spännande
  res.json(scoreList);
};

export const getRoundsForPlayer = async (req, res) => {
  //competition: req.params osv
  const compId = req.query.compId;

  const competition = await Competition.findById(compId)
    .populate("players", "name")
    .populate({
      path: "rounds",
      populate: { path: "player", model: "Player" },
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

  // Här kan vi få in mer data för att göra leaderboarden mer spännande
  res.json(scoreList);
};

export const getRoundsPlayedPerPlayer = async (req, res) => {
  const compID = req.query.compId;
  const playerID = req.query.playerID;
  const player = await Player.findById(playerID);
  const competition = await Competition.findById(compID)
    .populate("players", "name")
    .populate({
      path: "rounds",
      populate: { path: "player", model: "Player" },
    });

  let roundsPerPlayer = [];
  competition.rounds.forEach((round) => {
    if (player.name === round.player.name) {
      roundsPerPlayer.push(round);
    }
  });

  res.json({
    rounds: roundsPerPlayer,
  });
};
