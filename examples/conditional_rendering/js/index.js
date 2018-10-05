function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please Sign Up</h1>
}

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
}


const pointer = document.getElementById('root');
ReactDOM.render(
  <Greeting
    isLoggedIn={false}
  />,
  pointer
);
