import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCompetitions } from '../api';

const UserPage = () => {
  const { id } = useParams();
  const [competitions, setCompetitions] = useState(['']);

  useEffect(() => {
    const fetchComp = async () => {
      const comp = await getCompetitions();
      console.log(comp.data);
      const list = comp.data.competitions.map((comp) => comp.name);
      setCompetitions(list);
    };

    fetchComp();
  }, []);

  useEffect(() => {
    console.log(competitions[0]);
  }, [competitions]);

  console.log(competitions);
  return (
    <>
      <select value={competitions} readOnly multiple={false}>
        {competitions.map((e, key) => {
          return (
            <option key={key} value={e}>
              {e}
            </option>
          );
        })}
      </select>

      {`Du är inloggad som ${id}`}
    </>
  );
};

export default UserPage;
