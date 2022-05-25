import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

import Card from '../../components/UI/Card';
import { login } from '../../api';
import { Button, Input } from '../../styles';

const PlayerLogin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

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
        console.log(response.data.player);
        toast.success('Login succeeded');
        window.location.href = `/user/${response.data.player._id.toString()}`;
      }
    } catch (err) {
      console.error(err.message);
      toast.error('Failed to login, check your credentials');
    }
  };

  return (
    <>
      <Card>
        <form>
          <div class="form-group mb-6">
            <label class="form-label inline-block mb-2 text-gray-700">
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
          <div class="form-group mb-6">
            <label class="form-label inline-block mb-2 text-gray-700">
              Password
            </label>
            <Input
              placeholder="Enter password"
              type="password"
              name="password"
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
