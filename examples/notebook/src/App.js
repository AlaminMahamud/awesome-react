import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';


const Home = () => (
  <h1>Hello World</h1>
);

const About = () => (
  <h1>Hello About</h1>
);

const Notes = ({ match }) => (
  <div>
    <h2>Notes</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:noteId`} component={Note} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a Note.</h3>}
    />
  </div>
);

const Note = ({ match }) => (
  <div>
    <h3>Hello #{match.params.noteId}</h3>
  </div>
);



const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/notes" component={Notes} />
    </div>


  </BrowserRouter>
);

export default App;
