import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../../actions';
import style from './style.css';

let input;

class People extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    this.props.dispatch(addPerson(input.value));
    input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.submit} className={'form'}>
        <input ref={node => (input = node)} />
        <button type="submit"> Add person</button>
      </form>
    );
  }
}

export default connect()(People);
