import React from 'react';
import Header from './header/index';
import Body from '../containers/body';
import Footer from '../containers/footer';

const App = ({ state }) => (
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);

export default App;
