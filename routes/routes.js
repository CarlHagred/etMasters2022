import express from 'express';

import { postPlayer } from '../controllers/admin/adminEndpoints.js';
import { getPlayers } from '../controllers/players/playerEndpoints.js';
import { login, loginAdmin } from '../controllers/login/login.js';
import { getCompetitions } from '../controllers/shared/sharedEndpoints.js';

const router = express.Router();

router.post('/newplayer/', postPlayer);

router.get('/getplayers/', getPlayers);

router.get('/loginplayer/', login);

router.get('/loginadmin', loginAdmin);

router.get('/getcompetitions', getCompetitions);

export default router;
