import React from 'react';
import SystemListItem from './SystemListItem';

const SystemList = (props) => {
  return (
    <div>
      <ul>
        {props.systems.map((system) => {
          return <li><SystemListItem key={system._id} system={system}/></li>
        })}
      </ul>
    </div>
  )
};


export default SystemList;
