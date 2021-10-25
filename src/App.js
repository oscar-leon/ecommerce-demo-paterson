import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from './components/Layout';
import GlobalState from "./context/GlobalState";
import routes from './config/routes';

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              {routes.map(route => {
                return (
                  <Route
                    key={route.id}
                    path={route.path}
                    exact={route.exact}
                    render={props => <route.component {...props} />}
                  />
                );
              })}
            </Switch>
          </Layout>
        </Router>
      </div>
    </GlobalState>
  );
}

export default App;
