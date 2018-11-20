import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  facts(element) {
    return element.facts.map((fact, index) => (
      <span key={'fact' + index} className={'fact'}>
        {fact}{' '}
      </span>
    ));
  }

  render() {
    const { persons } = this.props.state;
    return (
      <div>
        <h2 className={'footer-heading'}>Result</h2>
        {persons &&
          persons.map((element, index) => {
            return (
              <p
                key={'line' + index}
                onClick={this.action}
                className={'footer-line'}
                element={element}
              >
                <span>{element.name}:</span> {this.facts(element)}
              </p>
            );
          })}
      </div>
    );
  }
}
export default connect()(Footer);
