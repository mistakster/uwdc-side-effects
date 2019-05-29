import React from 'react';
import './Info.css';

const Info = (props) => {
  const { ready, isPlaying, time } = props;

  return (
    <dl className="Info">
      <p>Ready: {ready ? 'Yes' : 'No'}</p>
      <p>Is playing: {isPlaying ? 'Yes' : 'No'}</p>
      <p>Time: {time}</p>
    </dl>
  );
};

export default Info;
