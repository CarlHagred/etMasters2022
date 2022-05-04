import axios from 'axios';

const serverUrl = 'http://localhost:8000/api';

/* ===== Login calls ===== */

export const createPlayer = (params) => {
  axios({
    method: 'POST',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/newplayer`,
  })
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const getPlayers = async () => {
  return await axios({
    method: 'GET',
    withCredentials: true,
    url: `${serverUrl}/getplayers`,
  })
    .then((response) => {
      return response.data.players;
    })
    .catch((error) => {
      return error.response;
    });
};

export const login = async (params) => {
  return await axios({
    method: 'GET',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/loginplayer`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const loginAdmin = async (params) => {
  return await axios({
    method: 'GET',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/loginadmin`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getCompetitions = async () => {
  return await axios({
    method: 'GET',
    withCredentials: true,
    url: `${serverUrl}/getcompetitions`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
