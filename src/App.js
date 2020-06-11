import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Howitwork from "./Containers/HowItWork/Howitwork";
import Home from "./Containers/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/how_it_work" component={Howitwork} />
      </Switch>
    </Router>
  );
}

export default App;
