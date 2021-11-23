import React from "react";
import "./main.scss";
import { Container } from "reactstrap";
import Home from "../../pages/Home";
import Imprint from "../../pages/Imprint";
import DataProtection from "../../pages/DataProtection";
import { Switch, Route } from "react-router-dom";
import HTMLCheatSheet from "../../pages/HTMLCheatSheet";

export default function Main() {
  return (
    <main className="main">
      <Container>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/htmlcheatsheet"
            component={HTMLCheatSheet}
          ></Route>
          <Route exact path="/imprint" component={Imprint}></Route>
          <Route
            exact
            path="/data-protection"
            component={DataProtection}
          ></Route>
        </Switch>
      </Container>
    </main>
  );
}
