import React, {Component} from 'react';
import Counter from './counter';


class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {id: 1, value: 5},
        {id: 2, value: 2},
        {id: 3, value: 0},
        {id: 4, value: 2},
      ]
    }
  }

  handleIncrement = (counter) => {
    const counters = this.state.counters.map(c => {
      if (c.id === counter.id) {
        c.value = c.value + 1
      }
      return c;
    });
    this.setState(counters);
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {counter.value = 0; return counter;});
    this.setState({counters});
  };

  render() {
    return (
      <div>
        <button className="btn btn-sm btn-primary m-2" onClick={this.handleReset}>Reset</button>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}>
            <h4> Title </h4>
          </Counter>
        ))}
      </div>
    );
  }

}

export default Counters;
