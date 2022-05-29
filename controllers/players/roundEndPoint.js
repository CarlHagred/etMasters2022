import Competition from "../../models/competition.js";
import Round from "../../models/round.js";
import mongoose from "mongoose";

export const postRound = async (req, res) => {
  const points = req.query.points;
  const weather = req.query.weather;
  const course = req.query.courseId;
  const mood = req.query.mood;
  const playerId = req.query.playerId;
  const competitonId = req.query.compId;

  const newRound = new Round({
    points: points,
    weather: weather,
    course: course,
    mood: mood,
    player: playerId,
  });

  let competition;

  try {
    competition = await Competition.findById(competitonId);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }

  if (!competition) {
    console.log("Could not find competition for provided id");
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newRound.save({ session: sess });
    competition.rounds.push(newRound);
    await competition.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
  }
};
