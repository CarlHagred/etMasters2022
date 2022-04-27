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
  let competition;
  let player = await Player.findById('6267baede7c6e6b3c324c7b2');

  try {
    competition = await Competition.findById('6268dee44da1bf35c03268fa');
  } catch (err) {
    res.status(404).json({ message: error.message });
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
};
