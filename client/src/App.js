import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import LeaderBoard from './components/Leaderboard';
import MainNav from './components/Navigation/MainNav';
import Rounds from './components/Rounds';
import Users from './components/Users';

const App = () => {
  let routes;

  routes = (
    <React.Fragment>
      <Routes>
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/rounds" element={<Rounds />} />

        <Route exact path="/leaderboard" element={<LeaderBoard />} />
      </Routes>
    </React.Fragment>
  );
  return (
    <Router>
      <MainNav />
      <main>{routes}</main>
    </Router>
  );
};

export default App;
