import React, { Component } from 'react';
import { setView } from '../../actions';
import style from './style.css';

export default class NavButtonn extends Component {
  render() {
    return (
      <button
        name={this.props.name}
        className={`link link-${this.props.name}`}
        onClick={e => {
          this.props.dispatch(setView(e.target.name));
        }}
      >
        {this.props.name}
      </button>
    );
  }
}
