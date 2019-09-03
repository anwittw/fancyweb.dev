import React from "react";
import { Nav, NavItem } from "reactstrap";
import "./header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
    <img className="header__img" src="/IMG_2215.png" />
      <Nav className="Nav">
        <NavItem className="nav__navitem">
          <NavLink activeClassName="nav__navlink--active" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem className="nav__navitem">
          <NavLink  activeClassName="nav__navlink--active" to="/about">
            About
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  );
}
