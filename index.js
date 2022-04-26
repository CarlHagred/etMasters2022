import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { dirname } from "path";
import * as path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import routes from "./routes/routes.js";
import { postPlayer } from "./controllers/admin/adminEndpoints.js";
import { postCompetition } from "./controllers/admin/adminEndpoints.js";
import { getCompetitions } from "./controllers/shared/sharedEndpoints.js";
import { postRound } from "./controllers/players/roundEndPoint.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/api", routes);
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
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

postPlayer();
postCompetition();
getCompetitions();
postRound();

export default app;
