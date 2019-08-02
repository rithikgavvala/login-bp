import { hot } from 'react-hot-loader/root';

import React, {Component} from 'react';
import '../css/App.css';
import Login from './Login';


class App extends React.Component {
  render(){
    return (
        <section className="login-background-container">

          <Login />
        </section>

    );

  }

}

export default hot(App);
