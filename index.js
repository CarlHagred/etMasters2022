import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { dirname } from 'path';
import * as path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import routes from './routes/routes.js';
import cors from 'cors';
import {
  postPlayer,
  deletePlayer,
  postCompetition,
  changeRoundPoint,
  getSpecificPlayer,
} from './controllers/admin/adminEndpoints.js';
import {
  getCompetitions,
  deleteRound,
  getCourses,
  getSpecificCompetition,
  getCompetitionRoundsForSpecificPlayer,
} from './controllers/shared/sharedEndpoints.js';
import {
  getRoundsPlayed,
  postRound,
} from './controllers/players/roundEndPoint.js';
import {
  changePlayerHandicap,
  getListOfPlayedRounds,
  getPlayers,
  getTotalScoreForPlayer,
  registerCompetitionToPlayer,
  registerPlayerToCompetition,
} from './controllers/players/playerEndpoints.js';
import { login } from './controllers/login/login.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.static('public')); //osäker om nödvändig
app.use('/api', routes);
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const databaseConnection = async () => {
  try {
    mongoose.connect(process.env.CONNECTION_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server upp and running, and connected to database`);
    });
  } catch (error) {
    //denna console-loggen är bra om man får fel vid serverstart
    console.log(error.message);
  }
};
databaseConnection();

// registerPlayerToCompetition();
// registerCompetitionToPlayer();
//postPlayer();
//deletePlayer();
// getCompetitions();
// getSpecificCompetition();
// postRound();
//setPatientInactive();
//login();
// getRoundsPlayed();
//getPlayers();
//getSpecificPlayer();
//postCourse();
// getCourses();
// //postPlayer();
// //deletePlayer();
// postCompetition();
// //getCompetitions();
//postRound();
// //setPatientInactive();
// //login();
// getRoundsPlayed();
// deleteRound();
// getTotalScoreForPlayer();
//getCompetitionRoundsForSpecificPlayer();

export default app;
