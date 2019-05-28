import React from 'react';
import './App.css';
import Tabs from './Tabs';
import Counter from './Counter';
import Logo from './Logo';

const App = () => (
  <div className="App">
    <Tabs titles={['Counter', 'Logo']}>
      <Counter/>
      <Logo/>
    </Tabs>
  </div>
);

export default App;
