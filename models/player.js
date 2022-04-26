import mongoose from 'mongoose';

const playerSchema = mongoose.Schema({
  name: String,
  password: String,
  statistics: {
    score: Number,
    rounds: Number,
  },
});

const Player = mongoose.model('Player', playerSchema);

export default Player;
