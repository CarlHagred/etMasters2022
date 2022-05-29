import Competition from "../../models/competition.js";
import Player from "../../models/player.js";
import Round from "../../models/round.js";
import Course from "../../models/course.js";

export const postCompetition = async (req, res) => {
  const name = "Major";
  Competition.findOne({ name: name }, async (err, doc) => {
    if (err) res.send(err);
    if (!doc) {
      const newCompetition = new Competition({
        name: name,
        rounds: [],
        players: [],
      });
      await newCompetition.save();
    }
  });
};

export const postPlayer = async (req, res) => {
  const name = req.query.name;
  const password = req.query.password;
  const handicap = req.query.handicap;

  Player.findOne({ name: name }, async (err, doc) => {
    if (err) res.send(err);
    if (!doc) {
      const newPlayer = new Player({
        name: name,
        password: password,
        handicap: handicap,
        competition: [],
      });
      await newPlayer.save();
      res.status(201).json("Success");
    }
  });
};

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    players.forEach((player) => {
      //console.log(player.name, player.handicap);
    });
    // console.log(players);
    // res.status(200).json(players);
  } catch (error) {
    //res.status(404).json({ message: error.message });
  }
};
export const getSpecificPlayer = async (req, res) => {
  const playerId = "6267baede7c6e6b3c324c7b2";
  const player = await Player.findById(playerId).populate("competition");

  //console.log(player.name, player.password, player.competition[0].name);
};

export const deletePlayer = async (req, res) => {
  const playerId = req.query.playerId;
  await Player.deleteOne({ _id: playerId }).then((player) => {
    if (!player) {
      return res.status(404).send({
        message: "Player not found",
      });
    }
    res.status(200).send({ message: "PLayer deleted successfully!" });
  });
};

export const changeRoundPoint = async (req, res) => {
  const roundID = req.query.roundId;
  const points = req.query.points;
  //const roundID = "6268dfc4a5a0770b88aa7bca"; //req.params.roundID;
  //const points = 34; //req.params.points;
  Round.findOneAndUpdate(
    { _id: roundID },
    { $set: { points: points } },
    { new: true },
    (err, doc) => {
      if (doc) {
        //res.status(200).send("Success");
      }
    }
  );
};

export const postCourse = async (req, res) => {
  const name = req.query.courseName;
  const place = req.query.coursePlace;

  Course.findOne({ name: name }, async (err, doc) => {
    if (err) res.send(err);
    if (!doc) {
      const newCourse = new Course({
        name: name,
        place: place,
      });
      await newCourse.save();
      //res.status(201).json('Success');
    }
  });
};
