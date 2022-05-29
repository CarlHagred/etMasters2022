import Competition from "../../models/competition.js";
import Course from "../../models/course.js";
import Round from "../../models/round.js";

export const getCompetitions = async (req, res) => {
  let competition;
  try {
    competition = await Competition.find();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.json({
    competitions: competition.map((compet) =>
      compet.toObject({ getters: true })
    ),
  });
};

export const getCourses = async (req, res) => {
  let courses;
  try {
    courses = await Course.find();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.json({
    courses: courses.map((course) => course.toObject({ getters: true })),
  });
};

export const deleteRound = async (req, res) => {
  const compID = req.query.compID;
  const roundId = req.query.roundId;

  await Round.deleteOne({ _id: roundId }).then((round) => {
    if (!round) {
      return res.status(404).send({
        message: "Player not found with name: ",
      });
    }
    res.status(200).send({ message: "Round deleted successfully!" });
  });

  await Competition.updateOne({ _id: compID }, { $pull: { rounds: roundId } });
};
