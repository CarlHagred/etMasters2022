import Competition from '../../models/competition.js';

export const postCompetition = async (req, res) => {
  const name = 'Masters';

  const newCompetition = new Competition({
    name: name,
    rounds: [],
    players: [],
  });
  await newCompetition.save();
};
