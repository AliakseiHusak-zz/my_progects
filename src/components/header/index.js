import React, { Component } from 'react';
import style from './style.css';
import { addFacts } from '../../store/actions';

console.log(addFacts('lol'));

export default class Header extends Component {
  switch(e) {
    const { name } = e.target;
    console.log(addFacts(name));
  }
  render() {
    return (
      <div>
        <p className="header">HEADER</p>
        <div className="navigation">
          <button
            name="facts"
            className="link link-facts"
            onClick={this.switch}
          >
            facts
          </button>
          <button
            name="people"
            className="link link-people"
            onClick={this.switch}
          >
            people
          </button>
          <button
            name="voting"
            className="link link-voting"
            onClick={this.switch}
          >
            voting
          </button>
        </div>
      </div>
    );
  }
}
