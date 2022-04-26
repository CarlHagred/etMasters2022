import mongoose from 'mongoose';

const playerSchema = mongoose.Schema({
  name: String,
  password: String,
  handicap: String,
  competition: [{ type: mongoose.Types.ObjectId }],
});

const Player = mongoose.model('Player', playerSchema);

export default Player;
