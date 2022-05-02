import Competition from "../../models/competition.js";
import Course from "../../models/course.js";
import Round from "../../models/round.js";

export const getCompetitions = async (req, res) => {
  const competition = await Competition.find();
  competition.forEach((comp) => {
    console.log(comp.name);
  });
};

export const getSpecificCompetition = async (req, res) => {
  const competition = await Competition.findById("626908b9f30bd77383f8f935");
  console.log(competition.name);
};

export const postRounds = async (req, res) => {};

export const getCourses = async (req, res) => {
  const course = await Course.find();
  course.forEach((cours) => {
    console.log(cours.name, cours.place);
  });
};

export const deleteRound = async (req, res) => {
  const roundId = "6269090804f278b9065548c1"; //req.body.roundId;
  const competitionId = "626908b9f30bd77383f8f935"; //req.body.competitionId;

  await Round.deleteOne({ _id: roundId }).then((round) => {
    if (!round) {
      /* return res.status(404).send({
        message: "Player not found with name: " + name,
      });*/
    }
    //res.status(200).send({ message: "Patient deleted successfully!" });
  });

  await Competition.updateOne(
    { _id: competitionId },
    { $pull: { rounds: roundId } }
  );
};

export const getCompetitionRoundsForSpecificPlayer = async (req, res) => {
  const competitionID = "626908b9f30bd77383f8f935"; //req.body.competitionID;
  const playerID = "6267baede7c6e6b3c324c7b2"; //req.body.playerID;
  const playerRounds = [];

  const competition = await Competition.findById(competitionID)
    .populate("players")
    .populate("rounds");

  competition.rounds.forEach((round) => {
    if (playerID === round.player._id.toString()) {
      playerRounds.push(round);
    }
  });
  //res.status(200).json(playerRounds);
};
