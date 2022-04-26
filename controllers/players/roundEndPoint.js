import Player from '../../models/player.js';
import Round from '../../models/round.js';


export const postRound = async (req, res) => {
    const points= 36    
    const weather= "sol"
    const course = "PGA"
    const mood= "glad as fuck"
    const playerId= "13123123123"
    
    
      const newRound = new Round({
        points: points,
        weather: weather,
        course: course,
        mood: mood,
        playerId: playerId});
      
      await newRound.save();
      //res.status(201).json('Success');
    

};

