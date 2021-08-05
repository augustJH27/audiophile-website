import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Headphones from "./pages/category/headphones/Headphones";
import Earphones from "./pages/category/earphones/Earphones";
import Speakers from "./pages/category/speakers/Speakers";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/headphones" component={Headphones} />
            <Route exact path="/earphones" component={Earphones} />
            <Route exact path="/speakers" component={Speakers} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
