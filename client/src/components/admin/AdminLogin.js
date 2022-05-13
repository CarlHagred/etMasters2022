import React, { useState } from "react";

import Card from "../../components/UI/Card";
import { loginAdmin } from "../../api";

const AdminLogin = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const postData = {
      name: name.trim(),
      password: password.trim(),
    };
    const response = await loginAdmin(postData);

    if (
      response.data.admin.name === name &&
      response.data.admin.password === password
    ) {
      console.log(response.data.player);
      window.location.href = `/admin/${response.data.admin._id.toString()}`;
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

export default AdminLogin;
