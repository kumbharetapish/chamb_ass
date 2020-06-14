import React from "react";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Howitwork from "./Containers/HowItWork/Howitwork";
import Home from "./Containers/Home/Home";
import Footer from "./Components/Footer/Footer";
import Product from "./Containers/ProductPage/Product";
import Pricing from "./Containers/Pricing/Pricing";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/how_it_work" component={Howitwork} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/product/page/:id" component={Product} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
