import React, { useState } from "react";

import Card from "../../components/UI/Card";
import { login } from "../../api";

const PlayerLogin = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const postData = {
      name: name.trim().toLowerCase(),
      password: password.trim().toLowerCase(),
    };
    const response = await login(postData);
    console.log(`${response}`);
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
