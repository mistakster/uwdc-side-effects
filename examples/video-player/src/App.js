import React from 'react';
import Tabs from './Tabs';
import Logo from './Logo';
import Content from './Content';

function App() {
  return (
    <Tabs titles={['Player', 'Logo']}>
      <Content src={[
        { type: "video/mp4", src: "https://vjs.zencdn.net/v/oceans.mp4" },
        { type: "video/webm", src: "https://vjs.zencdn.net/v/oceans.webm" },
        { type: "video/ogg", src: "https://vjs.zencdn.net/v/oceans.ogv" }
      ]}/>
      <Logo/>
    </Tabs>
  );
}

export default App;
