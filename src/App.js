import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import EspaceClient from './pages/espaceclient/EspaceClient';
import HomePage from './pages/Homepages/HomePage';
import Location from './pages/location/Location';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header/>
            <Switch>
              <Route  path="/" component={withRouter(HomePage)}/>
              <Route exact  path="/espace_client" component={withRouter(EspaceClient)}/>
              <Route exact path="/location/:id" component={withRouter(Location)}/>
            </Switch>

          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;


