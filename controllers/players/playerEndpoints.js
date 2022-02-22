import Player from "../../models/player.js";

export const postPlayer = async (req, res) => {
  const name = req.body.name;

  Patient.findOne({ name: name }, async (err, doc) => {
    if (err) res.send(err);
    //om det inte finns en patient med samma namn så skapas patienten
    if (!doc) {
      const newPlayer = new Patient({
        name: name,
      });
      await newPlayer.save();
      //skickar det skapade namnet till klienten så det kan visas för personalen
      res.status(201).json("Success");
    }
  });
};

//hämta alla players
export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
