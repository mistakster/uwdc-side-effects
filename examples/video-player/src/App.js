import React from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';
import Tabs from './Tabs';
import Logo from './Logo';

function App() {
  return (
    <div className='App'>
      <Tabs titles={['Player', 'Logo']}>
        <VideoPlayer id='my-player'
          controls
          preload='auto'
          poster='//vjs.zencdn.net/v/oceans.png'
        >
          <source src='//vjs.zencdn.net/v/oceans.mp4' type='video/mp4'/>
          <source src='//vjs.zencdn.net/v/oceans.webm' type='video/webm'/>
          <source src='//vjs.zencdn.net/v/oceans.ogv' type='video/ogg'/>
        </VideoPlayer>
        <Logo/>
      </Tabs>
    </div>
  );
}

export default App;
