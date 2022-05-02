import axios from "axios";

const serverUrl = "http://localhost:8000/api";

/* ===== Login calls ===== */

export const createPlayer = (params) => {
  axios({
    method: "POST",
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
