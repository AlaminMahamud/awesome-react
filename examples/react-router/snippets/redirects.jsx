
const App = () => (
  <div>

    <ul>
      <li><Link to="/public">Public</Link></li>
      <li><Link to="/protected">Protected</Link></li>
    </ul>

    <Route path="/public" component={Public}/>
    <Route path="/protected" component={Protected}/>

  </div>
);
