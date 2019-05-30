import React from 'react';
import Tabs from './Tabs';
import Counter from './Counter';
import Logo from './Logo';

const App = () => (
  <Tabs titles={['Counter', 'Logo']}>
    <Counter/>
    <Logo/>
  </Tabs>
);

export default App;
