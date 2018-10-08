import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      tags: ['tag1', 'tag2', 'tag3']
    };
    this.getBadgeClasses = this.getBadgeClasses.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleClick}
          className="btn btn-secondary btn-small">Increment</button>
        <ul>
          {this.renderTags()}
        </ul>
      </div>
    );
  }

  handleClick() {
    this.setState({
      value: this.state.value + 1
    })
  }

  renderTags() {
    if (this.state.tags.length === 0 ) return "<p>There are no Tags! </p>";
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  formatCount() {
      const { value } = this.state;
      return (value === 0) ? 'Zero' : value;
    }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default Counter;
