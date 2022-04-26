import mongoose from 'mongoose';

const competitionSchema = mongoose.Schema({
  name: String,
  rounds: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Round' }],
  players: [{ type: String }],
});

const Competition = mongoose.model('Competition', competitionSchema);

export default Competition;
