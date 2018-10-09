import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
            title: 'React Starter',
            description: 'A basic template that consists of the essential elements that are required to start building a React application'
    };
  }

  render() {
    return (
            <div>
                <Header />
                <div className="container mt-5">
                    <NoteManager />
                </div>
            </div>
        );
  }
}

export default App;
