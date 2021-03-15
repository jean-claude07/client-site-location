import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import EspaceClient from './pages/espaceclient/EspaceClient';
import HomePage from './pages/Homepages/HomePage';
import Location from './pages/location/Location';

function App() {
  return (
    <>
      <HashRouter>
          <Header/>
            <Switch>
              <Route  path="/" component={HomePage}/>
              <Route  path="/espace_client" component={EspaceClient}/>
              <Route path="/location/:id" component={Location}/>
            </Switch>

          <Footer/>
      </HashRouter>
    </>
  );
}

export default App;


