import React, { useState } from 'react';

import Card from '../../components/UI/Card';
import { loginAdmin } from '../../api';
import { Button, Input } from '../../styles';

const AdminLogin = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

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
          <div class="form-group mb-6">
            <label class="form-label inline-block mb-2 text-gray-700">
              Admin
            </label>
            <Input
              placeholder="Admin"
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div class="form-group mb-6">
            <label class="form-label inline-block mb-2 text-gray-700">
              Password
            </label>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <Button onClick={handleLogin}>Admin Login</Button>
        </form>
      </Card>
    </>
  );
};

export default AdminLogin;
