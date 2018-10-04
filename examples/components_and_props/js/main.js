function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }

}

function App(){
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )
}

const pointer = document.getElementById('root');

ReactDOM.render(
  <App />,
  pointer
);
