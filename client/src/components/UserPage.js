import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompetitions } from "../api";

const UserPage = () => {
  const { id } = useParams();
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetiton] = useState();

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
    console.log(selectedCompetition);
  }, [selectedCompetition]);

  const registerToCompetition = (e) => {
    e.preventDefault();
    const params = {
      compID: "",
      playerID: id,
    };
    registerToCompetition(params);
    console.log("first");
  };

  return (
    <>
      <form>
        <select
          multiple={false}
          value={selectedCompetition}
          onChange={(e) =>
            setSelectedCompetiton(competitions.includes(e.target.value))
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
        <button onClick={registerToCompetition}>Register to competition</button>
      </form>
      <h1>{`Du är inloggad som ${id}`}</h1>
    </>
  );
};

export default UserPage;
