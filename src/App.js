import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
// import Footer from './components/Footer/Footer';
import Bringing from './components/Bringing/Bringing';
import Hero2 from './components/Hero2/Hero2';
import Catalog from './components/CatalogCard/Catalog';
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
        <Navbar />
          <Hero />
          <Container>
          <Catalog />
          <Hero2 />
          <Bringing />
          {/* <Footer /> */}
          </Container> 
        </Route>
      </Switch>
    </Router>

  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  margin-bottom: 7.5rem;
  @media screen and (min-width: 768px) {
    gap: 6rem;
    margin-bottom: 6rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 10.5rem;
    margin-bottom: 12.5rem;
  }
`;

export default App;