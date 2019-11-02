import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as Components from './components.js';

window.onload = () => {
  // eslint-disable-next-line no-unused-vars
  function App(){

  }
  
  // ReactDOM.render(<App />,document.querySelector('div#app'));
  ReactDOM.render(<Components.Background />, document.querySelector('div#background'));
}