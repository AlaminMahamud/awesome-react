import {Route, Switch} from 'react-router-dom';

// when location = { pathname: '/about' }
<Route path='/about' component={About} /> // renders <About />
<Route path='/contact' component={Contact} /> // renders null
<Route component={Always} /> // renders Always


<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
</Switch>


<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  {/* When none of the above match, <NoMatch> will be rendered */}
  <Route component={NoMatch} />
</Switch>
