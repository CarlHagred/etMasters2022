import express from 'express';

import {
  postPlayer,
  deletePlayer,
  changeRoundPoint,
  postCourse,
} from '../controllers/admin/adminEndpoints.js';
import {
  changePlayerHandicap,
  getPlayers,
  getRoundsPlayedPerPlayer,
  registerPlayerToCompetition,
  getListOfPlayedRounds,
} from '../controllers/players/playerEndpoints.js';
import { login, loginAdmin } from '../controllers/login/login.js';
import {
  deleteRound,
  getCompetitions,
  getCourses,
} from '../controllers/shared/sharedEndpoints.js';
import { postRound } from '../controllers/players/roundEndPoint.js';

const router = express.Router();

router.post('/newplayer/', postPlayer);

router.post('/postcourse', postCourse);

router.get('/getLeaderboard/', getListOfPlayedRounds);

router.get('/getplayers/', getPlayers);

router.get('/getcourses', getCourses);

router.get('/loginplayer/', login);

router.get('/loginadmin', loginAdmin);

router.get('/getcompetitions', getCompetitions);

router.get('/getplayerrounds', getRoundsPlayedPerPlayer);

router.post('/registertocompetition', registerPlayerToCompetition);

router.post('/changePointsOnRound', changeRoundPoint);

router.post('/postround', postRound);

router.post('/deleteround', deleteRound);

router.patch('/changehandicap', changePlayerHandicap);

router.patch('/changehandicap', changePlayerHandicap);

router.post('/deleteplayer', deletePlayer);

export default router;
