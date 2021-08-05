import React from 'react';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Hero />
          <Footer />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
