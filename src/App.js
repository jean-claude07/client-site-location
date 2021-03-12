import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/espace_client" component={EspaceClient}/>
              <Route path="/location/:id" component={Location}/>
            </Switch>

          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;


