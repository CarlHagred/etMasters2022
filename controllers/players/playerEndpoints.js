import Player from '../../models/player.js';
import mongoose from 'mongoose';
import Competition from '../../models/competition.js';

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
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
