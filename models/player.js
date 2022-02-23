import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
  name: String,
});

const Player = mongoose.model("Player", playerSchema);

export default Player;
