import React from "react";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Bringing from "./components/Bringing/Bringing";
import Hero2 from "./components/Hero2/Hero2";
import DetailHeadphone from "./components/DetailPage/detailHeadphone";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headphone from "./pages/category/headphones/Headphones";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Hero />
          <Hero2 />
          <Bringing />
          <Footer />
        </Route>
        <Route exact path="/detail">
          <DetailHeadphone />
        </Route>
        <Route exact path="/category">
          <Headphone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
