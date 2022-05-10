
import React, { useEffect, useState } from "react";
import {getRoundsNPlayers} from "../api";

const LeaderBoard = () => {
  const [rounds, setRounds]= useState({
  });
  const [playerName, setPlayers]=useState([]);

  useEffect(()=>{
    handleGetPlayers()
  },[])
  useEffect(()=>{
    console.log(playerName);
  },[playerName])

  const handleGetPlayers = async () => {
    const PlayersNROunds = await getRoundsNPlayers();
    JSON.stringify(PlayersNROunds.data);
    const result = Object.keys(PlayersNROunds.data).map((key) => [key, PlayersNROunds.data[key]]);
    console.log(result);
    setPlayers(result);
    
    
  };
  return (
    <React.Fragment>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Rounds</th>
      </tr>
    </thead>
    <tbody>
      {playerName.map((playerName,index)=>{
      return(
        <tr key={index}>
          <td>{playerName}</td>

        </tr>
      )  
      })}
     <td>Tjena</td>
      
    </tbody>
  </table>
  </React.Fragment>
  )
};

export default LeaderBoard;
