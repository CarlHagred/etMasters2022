import express from 'express';

import { postPlayer } from '../controllers/admin/adminEndpoints.js';
import {
  changePlayerHandicap,
  getPlayers,
  getRoundsPlayedPerPlayer,
  registerPlayerToCompetition,
} from '../controllers/players/playerEndpoints.js';
import { login, loginAdmin } from '../controllers/login/login.js';
import { getCompetitions } from '../controllers/shared/sharedEndpoints.js';
import { postRound } from '../controllers/players/roundEndPoint.js';

const router = express.Router();

router.post('/newplayer/', postPlayer);

router.get('/getplayers/', getPlayers);

router.get('/loginplayer/', login);

router.get('/loginadmin', loginAdmin);

router.get('/getcompetitions', getCompetitions);

router.get('/getplayerrounds', getRoundsPlayedPerPlayer);

router.post('/registertocompetition', registerPlayerToCompetition);

router.post('/postround', postRound);

//Ska det vara put/alter??
router.patch('/changehandicap', changePlayerHandicap);

export default router;
