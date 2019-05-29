import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Tabs from './Tabs';
import Content from './Content';
import Logo from './Logo';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Tabs titles={['Map', 'Logo']}>
        <Content/>
        <Logo/>
      </Tabs>
    </div>
  </Provider>
);

export default App;
