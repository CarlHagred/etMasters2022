import mongoose from 'mongoose';

const playerSchema = mongoose.Schema({
  name: String,
  password: String,
  handicap: Number,
  competition: [{ type: mongoose.Types.ObjectId, ref: 'Competition' }],
});

const Player = mongoose.model('Player', playerSchema);

export default Player;
