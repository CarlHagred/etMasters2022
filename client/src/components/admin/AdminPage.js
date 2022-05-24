import React, { useState, useEffect } from "react";
import Card from "../../components/UI/Card";

import {
  createPlayer,
  getPlayers,
  getCompetitions,
  getRoundsNPlayers,
} from "../../api";
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

  const handleRemovePlayer = (event, playerId) => {
    event.preventDefault();
    const params = {
      playerId: playerId,
    };
    deletePlayer(params);
    setSelectedPlayer();
    handleGetPlayers();
  };

  const [playerNames, setPlayerNames] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetiton, setSelectedCompetition] = useState([]);
  const [newHandicap, setNewHandicap] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState();

  useEffect(() => {
    const fetchComp = async () => {
      const comp = await getCompetitions();
      setCompetitions(comp.data.competitions);
    };

    fetchComp();
  }, []);

  const handleGetLeaderBoard = async (e) => {
    e.preventDefault();
    if (!selectedCompetiton.name.length) return;

    const params = {
      compId: selectedCompetiton._id,
    };
    const leaderBoardData = await getRoundsNPlayers(params);

    //console.log(leaderBoardData);
    JSON.stringify(leaderBoardData.data);
    const result = Object.keys(leaderBoardData.data).map((key) => [
      key,
      leaderBoardData.data[key],
    ]);
    result.sort(function (player, nextPlayer) {
      return nextPlayer[1] - player[1];
    });
    setPlayerNames(result);
  };

  const handleSelectPlayer = async (e, player) => {
    e.preventDefault();
    setSelectedPlayer(player);
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
              <Button
                onClick={(e) => {
                  handleSelectPlayer(e, player);
                }}
              >
                Select
              </Button>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        {selectedPlayer && selectedPlayer.name}{" "}
        {selectedPlayer && selectedPlayer.handicap}{" "}
        {selectedPlayer && (
          <Button
            onClick={(e) => {
              handleRemovePlayer(e, selectedPlayer._id);
            }}
          >
            Remove
          </Button>
        )}
        <form>
          <div className="flex justify-center">
            <select
              className="
          flex justify-center

w-96
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding bg-no-repeat
border border-solid border-gray-300
rounded
transition
ease-in-out
mt-2
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`"
              multiple={false}
              value={selectedCompetiton.name}
              onChange={(e) =>
                setSelectedCompetition(
                  competitions.find(
                    (element) => element.name === e.target.value
                  )
                )
              }
            >
              {competitions.map((e, key) => {
                return (
                  <option key={key} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
              <option>Select Competition</option>
            </select>
          </div>
          <div className="flex justify-center pt-3 mb-5 pb-8">
            <Button onClick={handleGetLeaderBoard}>
              Get leaderboard for competition
            </Button>
          </div>
        </form>
        <div className="flex justify-center">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 border">
              <div className="overflow-hidden">
                <table className="overflow-hidden ">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Position
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Points
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Change Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {playerNames.map((playerName, index) => {
                      return (
                        <tr
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                          key={index}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {playerName[0]}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {playerName[1]}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <form>
                              <label className="form-label inline-block mb-2 text-gray-700">
                                <Input
                                  type="number"
                                  name="name"
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </label>
                              <Button onClick={handleSubmit}>Commit</Button>
                            </form>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AdminPage;
