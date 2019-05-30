import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Tabs from './Tabs';
import Content from './Content';
import Logo from './Logo';

const App = () => (
  <Provider store={store}>
    <Tabs titles={['Map', 'Logo']}>
      <Content/>
      <Logo/>
    </Tabs>
  </Provider>
);

export default App;
