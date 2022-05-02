import express from "express";

import { postPlayer } from "../controllers/admin/adminEndpoints.js";
//import { login } from '../controllers/login/login.js';

const router = express.Router();

router.post("/newplayer/", postPlayer);
//:name:password:handicap

export default router;
