import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Form from "./pages/form";
import ServiceForm from "./pages/service-form";
import Detail from "./pages/detail";
import Confirmation from "./pages/confirmation";
import BuyRepairForm from "./pages/buy-repair";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/service-form">
          <ServiceForm />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/buy-repair/:id">
          <BuyRepairForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
