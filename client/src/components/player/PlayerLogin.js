import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import Card from "../../components/UI/Card";
import { login } from "../../api";
import { Button, Input } from "../../styles";

const PlayerLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        name: name.trim(),
        password: password.trim(),
      };

      const response = await login(postData);

      if (
        response.data.player.name === name &&
        response.data.player.password === password
      ) {
        //console.log(response.data.player);
        window.location.href = `/user/${response.data.player._id.toString()}`;
      }
      toast.success("login succeeded");
    } catch (err) {
      console.error(err.message);
      toast.error("failed to login");
    }
  };

  return (
    <>
      <Card>
        <form>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Name
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <Input
              placeholder="Enter password"
              type="password"
              className="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
        </form>
      </Card>
    </>
  );
};

export default PlayerLogin;
