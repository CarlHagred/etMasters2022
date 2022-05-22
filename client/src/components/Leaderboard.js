import React, { useEffect, useState } from 'react';
import { getCompetitions, getRoundsNPlayers } from '../api';
import { Button, Select } from '../styles';

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
        <div class="flex justify-center">
          <select
            class="
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
                competitions.find((element) => element.name === e.target.value)
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
        <div class="flex justify-center pt-3 mb-5 pb-8">
          <Button onClick={handleGetLeaderBoard}>
            Get leaderboard for competition
          </Button>
        </div>
      </form>
      <div class="flex justify-center">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="overflow-hidden ">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {playerNames.map((playerName, index) => {
                    return (
                      <tr
                        class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        key={index}
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {playerName[0]}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {playerName[1]}
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
    </React.Fragment>
  );
};

export default LeaderBoard;
