import express from "express";

import { postPlayer } from "../controllers/players/playerEndpoints.js";

const router = express.Router();

router.get("/newplayer", postPlayer);

export default router;
