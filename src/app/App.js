import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import body from '../components/body';

import './App.css';

class AppContainer extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <body />
        <Footer />
      </div>
    );
  }
}

export default AppContainer;
