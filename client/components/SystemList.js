import React from 'react';
import SystemListItem from './SystemListItem';

const SystemList = (props) => {
  return (
    <div>
      <ul>
        {props.systems.map((system, idx) => {
          return <li><SystemListItem key={idx} system={system}/></li>
        })}
      </ul>
    </div>
  )
};


export default SystemList;
