const App = () => (
  <AppLayout>
    <Route path='/invoices' component={Invoices} />
  </AppLayout>
);


const Invoices = () => (
  <Layout>
    {/* always show the navigation */}
    <Media query={PRETTY_SMALL}>
      {screenIsSmall => screenIsSmall
        // Small Screen has no redirect
        ? <Switch>
            <Route exact path="/invoices/dashboard" component={Dashboard} />
            <Route path="/invoices/:id" component={Invoice} />
          </Switch>
        // large screen does
        : <Switch>
            <Route exact path="/invoices/dashboard" component={Dashboard}/>
            <Route path="/invoices/:id" component={Invoice}/>
            <Redirect from="/invoices" to="/invoices/dashboard"/>
          </Switch>
      }
    </Media>
  </Layout>
);
