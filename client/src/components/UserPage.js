import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  changeHandicap,
  deleteRound,
  getCompetitions,
  getPlayerRounds,
  registerRound,
  registerToCompetition,
} from '../api';
import Card from './UI/Card';

const UserPage = () => {
  const { id } = useParams();
  const [competitions, setCompetitions] = useState([]);
  const [selectedRegComp, setSelectedRegComp] = useState({});
  const [selectedGetComp, setSelectedGetComp] = useState({});
  const [selectedRegRound, setSelectedRegRound] = useState({});

  const [points, setPoints] = useState();
  const [course, setCourse] = useState();
  const [weather, setWeather] = useState();
  const [mood, setMood] = useState();
  const [handicap, setHandicap] = useState();

  const [playerRounds, setPlayerRounds] = useState([]);

  useEffect(() => {
    const fetchComp = async () => {
      const comp = await getCompetitions();
      console.log(comp.data);
      const list = comp.data.competitions.map((comp) => comp.name);
      setCompetitions(comp.data.competitions);
    };

    fetchComp();
  }, []);

  const handleRegisterToCompetition = (e) => {
    e.preventDefault();
    const params = {
      compID: selectedRegComp._id,
      playerID: id,
    };
    registerToCompetition(params);
  };

  const handlePostRound = async (e) => {
    e.preventDefault();

    const params = {
      points: points,
      course: course,
      weather: weather,
      mood: mood,
      playerId: id,
      compId: selectedRegRound._id,
    };

    registerRound(params);
  };
  console.log(selectedGetComp);

  const handleChangeHandicap = (e) => {
    e.preventDefault();

    const params = {
      playerId: id,
      handicap,
    };
    changeHandicap(params);
  };

  const handleGetRounds = async (e) => {
    e.preventDefault();
    const params = {
      compId: selectedGetComp._id,
      playerID: id,
    };
    const rounds = await getPlayerRounds(params);
    setPlayerRounds(rounds.rounds);
  };

  //Check what happens when we remove a round, why it doesnt work to rerender
  const handleRemoveRound = (event, roundId) => {
    event.preventDefault();
    const params = {
      compID: selectedGetComp._id,
      roundId: roundId,
    };
    deleteRound(params);
    handleGetRounds();
  };

  return (
    <>
      <h1>{`Du är inloggad som ${id}`}</h1>

      <form>
        <select
          multiple={false}
          value={selectedRegComp.name}
          onChange={(e) =>
            setSelectedRegComp(
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
        </select>
        <button onClick={handleRegisterToCompetition}>
          Register to competition
        </button>

        {/* HÄR KOMMER REGISTER TO ROUND */}
      </form>
      <Card>
        <form>
          <label>
            Points:
            <input
              type="number"
              name="points"
              onChange={(e) => {
                setPoints(e.target.value);
              }}
            />
          </label>
          <label>
            {/* ska egentligen vara SELECT */}
            Course:
            <input
              type="text"
              name="course"
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            />
          </label>
          <label>
            Weather:
            <input
              type="text"
              name="weather"
              onChange={(e) => {
                setWeather(e.target.value);
              }}
            />
          </label>
          <label>
            Mood:
            <input
              type="text"
              name="mood"
              onChange={(e) => {
                setMood(e.target.value);
              }}
            />
          </label>
          {/* Fusk programmerat, kolla på alternativ lösning, om tid finns */}
          <select
            multiple={false}
            value={selectedRegRound.name}
            onChange={(e) =>
              setSelectedRegRound(
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
          </select>
          <input
            type="submit"
            value="Register round"
            onClick={handlePostRound}
          />
        </form>

        {/* HÄR KOMMER CHANGE HANDICAP */}
      </Card>
      <Card>
        <form>
          <input
            type="number"
            name="points"
            onChange={(e) => {
              setHandicap(e.target.value);
            }}
          ></input>
          <input
            type="submit"
            value="Change Handicap"
            onClick={handleChangeHandicap}
          />
        </form>
      </Card>
      <Card>
        <form>
          <select
            multiple={false}
            value={selectedGetComp.name}
            onChange={(e) =>
              setSelectedGetComp(
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
          </select>
          <button type="submit" onClick={handleGetRounds}>
            Get rounds
          </button>
          <ul>
            {playerRounds.map((round) => (
              <li key={round._id}>
                {round.course}
                {round.points}
                <button
                  onClick={(e) => {
                    handleRemoveRound(e, round._id);
                  }}
                >
                  Ta bort
                </button>
              </li>
            ))}
          </ul>
        </form>
      </Card>
    </>
  );
};

export default UserPage;
