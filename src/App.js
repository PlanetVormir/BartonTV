import React from 'react';
import HomeScreen from './components/HomeScreen';
import RedSkull from 'redskulljs';

const API = new RedSkull();

const App = () => {
  return <HomeScreen api={API} />;
};

export default App;
