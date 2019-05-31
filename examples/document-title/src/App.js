import React from 'react';
import Tabs from './Tabs';
import Content from './Content';
import Logo from './Logo';

const App = () => (
  <Tabs titles={['Counter 1', 'Counter 2', 'Logo']}>
    <Content n={1}/>
    <Content n={2}/>
    <Logo/>
  </Tabs>
);

export default App;
