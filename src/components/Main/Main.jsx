import React from "react";
import "./main.scss";
import { Container } from "reactstrap";
import Home from "../../pages/Home";
import { Switch, Route } from "react-router-dom";
import HTMLCheatSheet from "../../pages/HTMLCheatSheet";

export default function Main() {
  return (
    <main className="main">
      <Container>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/htmlcheatsheet" component={HTMLCheatSheet}></Route>
        </Switch>
      </Container>
    </main>
  );
}
