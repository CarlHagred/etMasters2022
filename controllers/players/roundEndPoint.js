import Competition from '../../models/competition.js';
import Player from '../../models/player.js';
import Round from '../../models/round.js';
import mongoose from 'mongoose';

export const postRound = async (req, res) => {
  const points = 36;
  const weather = 'sol';
  const course = 'Reftele';
  const mood = 'glad as fuck';
  const playerId = '6267bb834df7634e3364cbcf';

  Round.findOne({ course: course }, async (err, doc) => {
    if (err) res.send(err);
    if (!doc) {
      const newRound = new Round({
        points: points,
        weather: weather,
        course: course,
        mood: mood,
        player: playerId,
      });

      let competition;

      try {
        competition = await Competition.findById('626908b9f30bd77383f8f935');
      } catch (err) {
        res.status(404).json({ message: error.message });
      }

      if (!competition) {
        console.log('Could not find player for provided id');
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
    }
  });

  //res.status(201).json('Success');
};
export const getRoundsPlayed = async (req,res)=>{
  let nbrOfRounds=0
  const playerId= "6267baede7c6e6b3c324c7b2"
  const course ="bögbanan"
  //const playerId="hej"
  Round.find({player:playerId}, async (err,doc)=>{
    console.log(doc);
    if(doc){
    for(let i=0;i<doc.length;i++){
      nbrOfRounds +=1
    }
    console.log(nbrOfRounds);
  }
  });
  res=nbrOfRounds;

}
