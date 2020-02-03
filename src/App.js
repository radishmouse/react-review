import React from 'react';

import './App.css';

import Greet from './Greet';
import Counter from './Counter';

// I want to move the state of the counters (and their behavior)
// into the App.
// I have to "lift state up" so that the Coutners can share state (and/behavior)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        1111,
        90
      ]
    };
  }
  render() {
    return (
      <div>
        <Counter 
          changeBy={2}
          value={this.state.values[0]}
          addHandler={this._incrementAll}
          subtractHandler={this._decrementAll}
          index={0}
        />
        <Counter 
          value={this.state.values[1]}
          changeBy={33}
          addHandler={this._incrementAll}
          subtractHandler={this._decrementAll}
          index={1}
        />
      </div>
    );
  }

  _updateValue = (index, newValue) => {
    // make a copy of the current values array
    const newValues = [
      ...this.state.values
    ];
    // modify the copy
    newValues[index] = newValue;

    // update state with the new copy
    this.setState({
      values: newValues
    });
  }

  _incrementAll = () => {
    const newValues = this.state.values.map(num => num + 1);
    this.setState({
      values: newValues
    })
  }

  _decrementAll = () => {
    const newValues = this.state.values.map(num => num - 1);
    this.setState({
      values: newValues
    })    
  }

}


export default App;



