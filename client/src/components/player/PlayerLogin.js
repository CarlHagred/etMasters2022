import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Card from "../../components/UI/Card";
import { login } from "../../api";

const PlayerLogin = () => {
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
      console.log(response.data.player);
      //skicka med id : /users?title=${ response.data.player_id}
      window.location.href = `/user/${response.data.player._id.toString()}`;
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
