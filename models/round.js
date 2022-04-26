import mongoose from "mongoose";

const roundSchema = mongoose.Schema({
  points: Number,
  weather: String,
  course: String,
  mood: String,
  playerID: String
});

const Round = mongoose.model("Round", roundSchema);

export default Round;