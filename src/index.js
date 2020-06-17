import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/styles/all.scss'
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Saler from './page/saler';
import Signin from './page/signin';
import Signup from './page/signup';


ReactDOM.render(
  <React.StrictMode>
    <Signup />
    <Signin />
    <Saler />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
