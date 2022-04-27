import mongoose from 'mongoose';

const roundSchema = mongoose.Schema({
  points: Number,
  weather: String,
  course: String,
  mood: String,
  player: { type: mongoose.Types.ObjectId, required: true, ref: 'Player' },
});

const Round = mongoose.model('Round', roundSchema);

export default Round;
