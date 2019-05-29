import React from 'react';
import './App.css';
import Tabs from './Tabs';
import CityMap from './CityMap';
import Logo from './Logo';

const App = () => (
  <div className="App">
    <Tabs titles={['Map', 'Logo']}>
      <CityMap/>
      <Logo/>
    </Tabs>
  </div>
);

export default App;
