import React, { useState } from "react";
import Card from "../../components/UI/Card";

import { createPlayer, getPlayers } from "../../api";
import { Button, Input } from "../../styles";
import { deletePlayer } from "../../api";

const AdminPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [handicap, setHandicap] = useState("");
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

  const handleRemoveRound = (event, playerId) => {
    event.preventDefault();
    const params = {
      playerId: playerId,
    };
    deletePlayer(params);
    handleGetPlayers();
  };

  return (
    <>
      <Card>
        <h1>Hello Admin</h1>
      </Card>
      <Card>
        <form>
          <label className="form-label inline-block mb-2 text-gray-700">
            Name:
            <Input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="form-label inline-block mb-2 text-gray-700">
            password:
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="form-label inline-block mb-2 text-gray-700">
            handicap:
            <Input
              type="number"
              name="handicap"
              onChange={(e) => setHandicap(e.target.value)}
            />
          </label>
          <Button onClick={handleSubmit}>Add Player</Button>
        </form>
      </Card>
      <Card>
        <Button type="submit" value="Submit" onClick={handleGetPlayers}>
          Fetch all players
        </Button>
        <ul>
          {players.map((player) => (
            <li key={player.name}>
              {player.name}
              {player.handicap}
              <Button
                onClick={(e) => {
                  handleRemoveRound(e, player._id);
                }}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default AdminPage;
