import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer';

// import DetailHeadphone from "./components/DetailPage/detailHeadphone";
// import Headphone from "./pages/category/headphones/Headphones";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <Navbar />
        <LandingPage />

        {/* <Route exact path='/headphones'>
        <HeadphonesPage />
        </Route> */}
        {/* nanti bikin rute seperti di atas sebelum import komponen ke app js ya */}
        {/* jadi, masing2 pages punya komponennya tersendiri */}


          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
