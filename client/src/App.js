import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeaderBoard from "./components/Leaderboard";
import MainNav from "./components/Navigation/MainNav";
import "./App.css";
import RoundList from "./components/RoundList";
import PlayerLogin from "./components/player/PlayerLogin";
import UserPage from "./components/UserPage";
import AdminPage from "./components/admin/AdminPage";
import AdminLogin from "./components/admin/AdminLogin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const App = () => {
  let routes;

  const rounds = [
    {
      id: 1,
      title: "BonusGolfen",
      descript:
        "Runda 1. Börjar som förra året med en runda Bonusgolf - Varje spelare får 2 st hål som han eller hon väljer ut som sitt bonushål, en per 9a. Valet sker på tee på det hålet spelarenkänner sig het på, valet måste ske innan spelaren slår ut. Detta hål blir då värt dubbel poäng. Det kommer även lottas ut 2 extra hål som blir dubbelt för alla spelare. — Annars vanlig poängbogey där inga puttar är klara - allt måste hålas ut.",
    },
    {
      id: 2,
      title: "GulaBollen",
      descript:
        "Runda 2. Denna tävling kallas Gula bollen. Varje spelare får en gul boll att spela med av spelledaren. Denna boll ger dubbla poäng per hål som den används på. Man får lov att välja att inte spela den. Försvinner denna gula boll så tappar man möjligheten att få dubbla poäng på resten av rundan. Går inte att byta ut mot annan gul boll. Detta är ett ypperligt tillfälle att samla massa poäng om man spelar konservativt. Annars vanlig poängbogey där inga puttar är klara - allt måste hålas ut.",
    },
    {
      id: 3,
      title: "DamTee",
      descript:
        "Runda 3. Runda 3 kommer vi alla spela på det tee som ligger längst fram. Det så kallade “Dam-tee”. Twisten med detta är att vinnaren på hålet innan får blockera en klubba per person på nästa hål. Putter får inte blockeras. Vinner samma person hålet därefter kvarstår den blockerade klubban som blockerad och vinnaren får blockera en ytterligare klubba. Annars resetas klubborna och den nya vinnaren får blockera en ny valfri klubba.",
    },
  ];

  routes = (
    <>
      <Routes>
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route exact path="/playerLogin" element={<PlayerLogin />} />
        <Route exact path="/user/:id" element={<UserPage />} />
        <Route exact path="/admin/:id" element={<AdminPage />} />
        <Route
          exact
          path="/rounds"
          element={
            <React.Fragment>
              <RoundList rounds={rounds} />
            </React.Fragment>
          }
        />
        <Route exact path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </>
  );
  return (
    <Router>
      <MainNav />
      <main>{routes}</main>
    </Router>
  );
};

export default App;
