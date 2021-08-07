import "./App.css";
import React from "react";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailHeadphone from "./components/DetailPage/detailHeadphone";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route exact path="/detail">
          <DetailHeadphone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
