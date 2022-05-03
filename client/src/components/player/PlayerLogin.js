import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Card from "../../components/UI/Card";
import { login } from "../../api";

const PlayerLogin = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const postData = {
      name: name.trim(),
      password: password.trim(),
    };
    const response = await login(postData);

    if (
      response.data.player.name === name &&
      response.data.player.password === password
    ) {
      //skicka med id : /users?title=${ response.data.player_id}
      window.location.href = `/users`;
    }
  };

  return (
    <>
      <Card>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            password:
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <input type="submit" value="login" onClick={handleLogin} />
        </form>
      </Card>
    </>
  );
};

export default PlayerLogin;
