class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    // this binding is necessary to make `this` work in the callback.
    this.handleClick = this.handleClick.bind(this);
  }

  // lambda function syntax:
  // (param1, param2) => {statements}
  // () => {statements}
  // param => statement
  // Todo: how state is being passed as an argument. who passes it
  handleClick(){
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

const pointer = document.getElementById('root');
ReactDOM.render(
  <Toggle />,
  pointer
)
