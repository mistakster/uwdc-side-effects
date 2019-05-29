import React, { useRef } from 'react';
import 'video.js/dist/video-js.min.css';
import VideoJS from 'video.js';
import useDeepCompareEffect from './useDeepCompareEffect';

const VideoPlayer = (props) => {
  const { dispatch, src, ...playerProps } = props;
  const playerContainer = useRef(null);

  function playerInitialization() {
    const video = document.createElement('video');

    video.classList.add('video-js');

    playerContainer.current.appendChild(video);

    const player = VideoJS(video, playerProps, () => {
      dispatch({ type: 'ready' });
    });

    player.on('play', () => {
      dispatch({ type: 'play' });
    });

    player.on('pause', () => {
      dispatch({ type: 'pause' });
    });

    player.on('timeupdate', () => {
      dispatch({ type: 'timeupdate', time: player.currentTime() });
    });

    player.src(src);

    return () => {
      player.dispose();
    }
  }

  useDeepCompareEffect(playerInitialization, [dispatch, src, playerProps]);

  return (
    <div ref={playerContainer}/>
  );
};

export default VideoPlayer;
