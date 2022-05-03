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
