import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompetitions, registerToCompetition } from "../api";

const UserPage = () => {
  const { id } = useParams();
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetiton] = useState({});

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

  return (
    <>
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
      <h1>{`Du är inloggad som ${id}`}</h1>
    </>
  );
};

export default UserPage;
