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
      peopleOptions: [<option />],
      factsOptions: [<option />],
    };
    this.submit = this.submit.bind(this);
    this.selectPeople = this.selectPeople.bind(this);
    this.setPeopleOptions = this.setPeopleOptions.bind(this);
    this.setFactsOptions = this.setFactsOptions.bind(this);
    this.resetError = this.resetError.bind(this);
  }

  componentDidMount() {
    this.setPeopleOptions();
  }

  setPeopleOptions() {
    const peopleOptions = [<option />];
    if (this.props.state.persons) {
      this.props.state.persons.forEach(element => {
        peopleOptions.push(
          <option value={element.name}>{element.name}</option>,
        );
      });
      this.props.state.persons && this.setState({ peopleOptions });
    }
  }

  selectPeople(e) {
    this.setState({
      error: false,
    });
    this.setFactsOptions(e.target.value);
  }

  setFactsOptions(people) {
    const factsOptions = [<option />];
    this.props.state.persons.forEach(e => {
      if (e.name === people) {
        const addOptions = e.facts.map((element, index) => (
          <option value={element} key={index}>
            {element}
          </option>
        ));
        const options = factsOptions.concat(addOptions);
        this.setState({
          factsOptions: options,
        });
      }
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
          onChange={this.selectPeople}
          className="select"
          ref={node => (dropdown = node)}
        >
          {this.state.peopleOptions}
        </select>
        <select
          onChange={this.selectPeople}
          className="select"
          ref={node => (dropdown = node)}
        >
          {this.state.factsOptions}
        </select>
      </form>
      //   <input
      //     className="input"
      //     onChange={this.resetError}
      //     ref={node => (input = node)}
      //   />
      //   <button type="submit"> Add fact</button>
      //   {this.state.error && (
      //     <p className="error">You shoul complete all fields</p>
      //   )}
    );
  }
}

export default connect()(Facts);
