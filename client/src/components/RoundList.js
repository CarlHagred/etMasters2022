import React from 'react';
import Round from './Round';

const RoundList = (props) => {
  return (
    <React.Fragment>
      <Round
        id={props.rounds[0].id}
        title={props.rounds[0].title}
        descript={props.rounds[0].descript}
      ></Round>
      <Round
        id={props.rounds[1].id}
        title={props.rounds[1].title}
        descript={props.rounds[1].descript}
      ></Round>
      <Round
        id={props.rounds[2].id}
        title={props.rounds[2].title}
        descript={props.rounds[2].descript}
      ></Round>
    </React.Fragment>
  );
};
export default RoundList;
