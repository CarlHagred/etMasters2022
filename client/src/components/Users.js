import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { createPlayer, getPlayers } from '../api';
import Card from '../components/UI/Card';

const Users = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [handicap, setHandicap] = useState('');
  const [players, setPlayers] = useState([]);

  const handleGetPlayers = async () => {
    const play = await getPlayers();
    setPlayers(play);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      name: name.trim().toLowerCase(),
      password: password.trim().toLowerCase(),
      handicap: handicap.trim().toLowerCase(),
    };

    createPlayer(postData);
  };

  //console.log(players);

  return (
    <>
      <Card>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            password:
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            handicap:
            <input
              type="number"
              name="handicap"
              onChange={(e) => setHandicap(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </Card>
      <Card>
        <button type="submit" value="Submit" onClick={handleGetPlayers}>
          Get players
        </button>
        <ul>
          {players.map((player) => (
            <li key={player.name}>
              {player.name}
              {player.handicap}
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default Users;
