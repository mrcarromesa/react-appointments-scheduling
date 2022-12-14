import './styles/global.scss';

import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => (
  <HashRouter>
    <Routes />
  </HashRouter>
);

export default App;
