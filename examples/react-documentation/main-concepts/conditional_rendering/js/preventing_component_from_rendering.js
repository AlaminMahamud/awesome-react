function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}


class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.hanldeToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => {
      showWarning: !state.showWarning
    });
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}


const target = document.getElementById('root');

ReactDOM.render(
  <Page />,
  target
);