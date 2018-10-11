import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';



const Child = ({match}) => (
  <p>ID: {match.params.slug}</p>
);

const ComponentWithRegex = ({match}) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);


const App = () => (
  <div>
    <h3> Accounts </h3>
    <ul>
      <li><Link to="/netflix">Netflix</Link></li>
      <li><Link to="/zillow-group">Zillow Group</Link></li>
      <li><Link to="/yahoo">Yahoo</Link></li>
      <li><Link to="/modus-create">Modus Craete</Link></li>
    </ul>
    <Route exact path="/:slug" component={Child} />
    <Route
      path="/order/:direction(asc|desc)"
      component={ComponentWithRegex} />
    {/* <Route path="/zillow-group" component={ZillowGroup} />
    <Route path="/yahoo" component={Yahoo} />
    <Route path="/modus-create" component={ModusCreate} /> */}
  </div>
);


const target = document.getElementById('root');
ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  target
);
