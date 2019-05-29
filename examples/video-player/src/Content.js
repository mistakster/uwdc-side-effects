import React, { useReducer } from 'react';
import VideoPlayer from './VideoPlayer';
import Info from './Info';
import './Content.css';

const initialState = {
  ready: false,
  isPlaying: false,
  time: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'ready':
      return { ...state, ready: true };
    case 'play':
      return { ...state, isPlaying: true };
    case 'pause':
      return { ...state, isPlaying: false };
    case 'timeupdate':
      return { ...state, time: action.time };
    default:
      throw new Error('Unknown action');
  }
}

const Content = ({ src }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="ContentRow">
      <div className="ContentPlayerCell">
        <VideoPlayer
          dispatch={dispatch}
          fluid
          controls
          preload='auto'
          poster='https://vjs.zencdn.net/v/oceans.png'
          src={src}
        />
      </div>
      <div className="ContentInfoCell">
        <Info {...state}/>
      </div>
    </div>
  );
};

export default Content;
