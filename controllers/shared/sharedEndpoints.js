import Competition from "../../models/competition.js";
import Round from "../../models/round.js";

export const getCompetitions = async (req, res) => {
  let competition = await Competition.findById("6267cc1557687630f07262ed");
  console.log(competition);
};

export const postRounds = async (req, res) => {};

export const getCourses = async (req, res) => {};

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
