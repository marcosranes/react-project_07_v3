import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/global-styles.css";

import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home tem-uma-prop-aqui="o valor dela"/>
  </React.StrictMode>,
  document.getElementById('root')
);
