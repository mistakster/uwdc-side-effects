import React, { useEffect, useRef } from 'react';
import 'video.js/dist/video-js.min.css';
import VideoJS from 'video.js';

const VideoPlayer = ({ children, ...rest }) => {
  const playerElement = useRef(null);

  useEffect(() => {
    const player = VideoJS(playerElement.current);

    return () => {
      if (player) {
        player.dispose();
      }
    }
  });

  return (
    <div>
      <div data-vjs-player="">
        <video className="video-js" {...rest} ref={playerElement}>
          {children}
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
