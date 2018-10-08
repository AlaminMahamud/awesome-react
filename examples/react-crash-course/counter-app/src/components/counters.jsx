import React, {Component} from 'react';
import Counter from './counter';


class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {id: 1, value: 10},
        {id: 2, value: 10},
        {id: 3, value: 10},
        {id: 4, value: 10},
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (<Counter key={counter.id} value={counter.value} />))}
      </div>
    );
  }

}

export default Counters;
