import React from 'react';

const Info = (props) => {
  const { ready, isPlaying, time } = props;

  return (
    <div className="text-light">
      <p>Ready: {ready ? 'Yes' : 'No'}</p>
      <p>Is playing: {isPlaying ? 'Yes' : 'No'}</p>
      <p>Time: {Number(time).toFixed(4)}</p>
    </div>
  );
};

export default Info;
