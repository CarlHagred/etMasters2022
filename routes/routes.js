import express from "express";

import { postPlayer } from "../controllers/admin/adminEndpoints.js";
import { getListOfPlayedRounds } from "../controllers/players/playerEndpoints.js";
//import { login } from '../controllers/login/login.js';

const router = express.Router();

router.post("/newplayer/", postPlayer);

router.get("/getLeaderboard/", getListOfPlayedRounds);


export default router;
