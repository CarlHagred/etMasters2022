import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  changeHandicap,
  deleteRound,
  getCompetitions,
  getCourses,
  getPlayerRounds,
  registerRound,
  registerToCompetition,
} from '../api';
import { Button, Input, Select } from '../styles';
import Card from './UI/Card';

const UserPage = () => {
  const { id } = useParams();
  const [competitions, setCompetitions] = useState([]);
  const [selectedRegComp, setSelectedRegComp] = useState({});
  const [selectedGetComp, setSelectedGetComp] = useState({});
  const [selectedRegRound, setSelectedRegRound] = useState({});
  const [courses, setCourses] = useState([]);

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

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await getCourses();
      console.log(course.data);
      setCourses(course.data.courses);
    };

    fetchCourse();
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
      courseId: course._id,
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
  console.log(playerRounds);

  return (
    <>
      <h1>{`Du är inloggad som ${id}`}</h1>
      <Card>
        <form>
          <Select
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
            <option>Select Competition</option>
          </Select>
          <Button onClick={handleRegisterToCompetition}>
            Register to competition
          </Button>

          {/* HÄR KOMMER REGISTER TO ROUND */}
        </form>
      </Card>
      <Card>
        <form>
          <label class="form-label inline-block mb-2 text-gray-700">
            Points:
            <Input
              type="number"
              name="points"
              onChange={(e) => {
                setPoints(e.target.value);
              }}
            />
          </label>
          <label class="form-label inline-block mb-2 text-gray-700">
            {/* ska egentligen vara SELECT */}
            Course:
            <Select
              multiple={false}
              value={courses.name}
              onChange={(e) =>
                setCourse(
                  courses.find((element) => element.name === e.target.value)
                )
              }
            >
              {courses.map((e, key) => {
                return (
                  <option key={key} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
              <option>Select Course</option>
            </Select>
          </label>
          <label class="form-label inline-block mb-2 text-gray-700">
            Weather:
            <Input
              type="text"
              name="weather"
              onChange={(e) => {
                setWeather(e.target.value);
              }}
            />
          </label>
          <label class="form-label inline-block mb-2 text-gray-700">
            Mood:
            <Input
              type="text"
              name="mood"
              onChange={(e) => {
                setMood(e.target.value);
              }}
            />
          </label>
          {/* Fusk programmerat, kolla på alternativ lösning, om tid finns */}
          <Select
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
            <option>Select Competition</option>
          </Select>
          <Button onClick={handlePostRound}> Register round </Button>
        </form>

        {/* HÄR KOMMER CHANGE HANDICAP */}
      </Card>
      <Card>
        <form>
          <label class="form-label inline-block mb-2 text-gray-700">
            Submit new handicap
          </label>
          <Input
            type="number"
            name="points"
            onChange={(e) => {
              setHandicap(e.target.value);
            }}
          ></Input>
          <Button onClick={handleChangeHandicap}>Change Handicap</Button>
        </form>
      </Card>
      <Card>
        <form>
          <Select
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
            <option>Select Competition</option>
          </Select>
          <Button type="submit" onClick={handleGetRounds}>
            Get rounds
          </Button>
          <div class="flex justify-center mt-6">
            <div class="  w-1/3 bg-white rounded-lg shadow">
              <ul class="divide-y-2 divide-gray-100 text-gray-700 ">
                {playerRounds.map((round) => (
                  <li
                    class="p-3 hover:bg-gray-600 hover:text-gray-200"
                    key={round._id}
                  >
                    Course: {round.course} | Points: {round.points} | Weather:
                    {round.weather} | Mood: {round.mood}
                    <Button
                      onClick={(e) => {
                        handleRemoveRound(e, round._id);
                      }}
                    >
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};

export default UserPage;
