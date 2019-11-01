import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

window.onload = () => {
  // eslint-disable-next-line no-unused-vars
  function App(){
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
  
  ReactDOM.render(<App />,document.querySelector('div#app'));
}