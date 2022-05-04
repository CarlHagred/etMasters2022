import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCompetitions, registerRound, registerToCompetition } from '../api';
import Card from './UI/Card';

const UserPage = () => {
  const { id } = useParams();
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetiton] = useState({});

  const [points, setPoints] = useState();
  const [course, setCourse] = useState();
  const [weather, setWeather] = useState();
  const [mood, setMood] = useState();

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
      compID: selectedCompetition._id,
      playerID: id,
    };
    registerToCompetition(params);
  };

  const handlePostRound = (e) => {
    e.preventDefault();

    const params = {
      points: points,
      course: course,
      weather: weather,
      mood: mood,
      playerId: id,
      compId: selectedCompetition._id,
    };

    registerRound(params);
  };

  return (
    <>
      <h1>{`Du är inloggad som ${id}`}</h1>

      <form>
        <select
          multiple={false}
          value={selectedCompetition.name}
          onChange={(e) =>
            setSelectedCompetiton(
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
            value={selectedCompetition.name}
            onChange={(e) =>
              setSelectedCompetiton(
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
      </Card>
    </>
  );
};
/*
 points: points,
        weather: weather,
        course: course,
        mood: mood,
        player: playerId,
        */
export default UserPage;
