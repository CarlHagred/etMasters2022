import React, { useState } from "react";

import { createPlayer } from "../api";

const Users = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [handicap, setHandicap] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      name: name.trim().toLowerCase(),
      password: password.trim().toLowerCase(),
      handicap: handicap.trim().toLowerCase(),
    };

    createPlayer(postData);
  };

  return (
    <React.Fragment>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          handicap:
          <input
            type="text"
            name="handicap"
            onChange={(e) => setHandicap(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </React.Fragment>
  );
};

export default Users;
