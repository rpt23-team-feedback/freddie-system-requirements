import React from 'react';

const SystemListItem = (props) => {
  return (
    <div>
      <div className='system-spacing'>
        <p><strong><u>{props.system.name}</u></strong></p>
        <p><strong>OS:</strong> {props.system.os}</p>
        <p><strong>Processor:</strong> {props.system.processor}</p>
        <p><strong>Memory:</strong> {props.system.memory}</p>
        <p><strong>Graphics:</strong> {props.system.graphics}</p>
        <p><strong>Storage:</strong> {props.system.storage}</p>
      </div>
    </div>
  )
};

export default SystemListItem;
