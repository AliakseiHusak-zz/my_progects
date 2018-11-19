import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';
import NavButtonn from './navButton';

const Header = ({ dispatch }) => {
  return (
    <div>
      <p className="header">Try it</p>
      <div className="navigation">
        <NavButtonn name="facts" dispatch={dispatch} />
        <NavButtonn name="people" dispatch={dispatch} />
        <NavButtonn name="voting" dispatch={dispatch} />
      </div>
    </div>
  );
};

export default connect()(Header);
