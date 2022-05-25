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

export const createCourse = (params) => {
  axios({
    method: 'POST',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/postcourse`,
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

//inte LOGIN CALLS, omfg
export const getRoundsNPlayers = async (params) => {
  return await axios({
    method: 'GET',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/getLeaderboard`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const changePointsOnRound = async (params) => {
  return await axios({
    method: 'POST',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/changePointsOnRound`,
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

export const getCourses = async () => {
  return await axios({
    method: 'GET',
    withCredentials: true,
    url: `${serverUrl}/getcourses`,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const registerToCompetition = (params) => {
  axios({
    method: 'POST',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/registertocompetition`,
  })
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const registerRound = (params) => {
  axios({
    method: 'POST',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/postround`,
  })
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const deleteRound = (params) => {
  axios({
    method: 'POST',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/deleteround`,
  })
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const deletePlayer = (params) => {
  axios({
    method: 'POST',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/deleteplayer`,
  })
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      console.log(`${serverUrl}/deleteplayer`);
    });
};

export const changeHandicap = (params) => {
  axios({
    method: 'PATCH',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/changehandicap`,
  })
    .then((response) => {
      //console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const getPlayerRounds = async (params) => {
  return await axios({
    method: 'GET',
    params: params,
    withCredentials: true,
    url: `${serverUrl}/getplayerrounds`,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });
};
