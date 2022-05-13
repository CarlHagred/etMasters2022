import express from 'express';

import { getListOfPlayedRounds } from '../controllers/players/playerEndpoints.js';
//import { login } from '../controllers/login/login.js';

import { postPlayer } from '../controllers/admin/adminEndpoints.js';
import {
  changePlayerHandicap,
  getPlayers,
  getRoundsPlayedPerPlayer,
  registerPlayerToCompetition,
} from '../controllers/players/playerEndpoints.js';
import { login, loginAdmin } from '../controllers/login/login.js';
import {
  deleteRound,
  getCompetitions,
} from '../controllers/shared/sharedEndpoints.js';
import { postRound } from '../controllers/players/roundEndPoint.js';

const router = express.Router();

router.post('/newplayer/', postPlayer);

router.get('/getLeaderboard/', getListOfPlayedRounds);

router.get('/getplayers/', getPlayers);

router.get('/loginplayer/', login);

router.get('/loginadmin', loginAdmin);

router.get('/getcompetitions', getCompetitions);

router.get('/getplayerrounds', getRoundsPlayedPerPlayer);

router.post('/registertocompetition', registerPlayerToCompetition);

router.post('/postround', postRound);

router.post('/deleteround', deleteRound);

router.patch('/changehandicap', changePlayerHandicap);

export default router;
