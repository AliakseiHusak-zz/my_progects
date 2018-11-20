import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFact } from '../../actions';
import style from './style.css';

let input;
let dropdown;

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      error: false,
      options: [<option />],
    };
    this.submit = this.submit.bind(this);
    this.select = this.select.bind(this);
    this.setOptions = this.setOptions.bind(this);
    this.resetError = this.resetError.bind(this);
  }

  componentDidMount() {
    this.setOptions();
  }

  setOptions() {
    const options = [<option />];
    if (this.props.state.persons) {
      this.props.state.persons.forEach(element => {
        options.push(<option value={element.name}>{element.name}</option>);
      });
      this.props.state.persons && this.setState({ options });
    }
  }

  select(e) {
    this.setState({
      error: false,
    });
  }

  submit(e) {
    e.preventDefault();
    this.resetError();
    if (!dropdown.value.trim() || !input.value.trim()) {
      this.setState({
        error: true,
      });
      return;
    }
    const value = {
      fact: input.value,
      name: dropdown.value,
    };
    this.props.dispatch(addFact(value));
    input.value = '';
    dropdown.value = '';
  }

  resetError() {
    this.setState({
      error: false,
    });
  }

  render() {
    return (
      <form onSubmit={this.submit} className={'form'}>
        <select
          onChange={this.select}
          className="select"
          ref={node => (dropdown = node)}
        >
          {this.state.options}
        </select>
        <input
          className="input"
          onChange={this.resetError}
          ref={node => (input = node)}
        />
        <button type="submit"> Add fact</button>
        {this.state.error && (
          <p className="error">You shoul complete all fields</p>
        )}
      </form>
    );
  }
}

export default connect()(Facts);
