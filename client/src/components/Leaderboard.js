import React, { useEffect, useState } from 'react';
import { getCompetitions, getRoundsNPlayers } from '../api';

import './Leaderboard.css';

const LeaderBoard = () => {
  const [playerNames, setPlayerNames] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetiton, setSelectedCompetition] = useState([]);
  useEffect(() => {
    const fetchComp = async () => {
      const comp = await getCompetitions();
      setCompetitions(comp.data.competitions);
    };

    fetchComp();
  }, []);

  const handleGetLeaderBoard = async (e) => {
    e.preventDefault();
    const params = {
      compId: selectedCompetiton._id,
    };
    const leaderBoardData = await getRoundsNPlayers(params);
    console.log(leaderBoardData);
    JSON.stringify(leaderBoardData.data);
    const result = Object.keys(leaderBoardData.data).map((key) => [
      key,
      leaderBoardData.data[key],
    ]);
    setPlayerNames(result);
  };
  console.log(selectedCompetiton);
  return (
    <React.Fragment>
      <form>
        <select
          multiple={false}
          value={selectedCompetiton.name}
          onChange={(e) =>
            setSelectedCompetition(
              competitions.find((element) => element.name === e.target.value)
            )
          }
        >
          <option>Select Competition</option>
          {competitions.map((e, key) => {
            return (
              <option key={key} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <button onClick={handleGetLeaderBoard}>
          Get leaderboard for competition
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {playerNames.map((playerName, index) => {
            return (
              <tr key={index}>
                <td>{playerName[0]}</td>
                <td>{playerName[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default LeaderBoard;
