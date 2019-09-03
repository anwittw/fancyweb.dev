import React from "react";
import "./polaroid.scss";
import { Link } from "react-router-dom";

export default function Polaroid(props) {
  return (
    <Link to={props.link}>
    <div className="polaroid">
      <div className="polaroid__inner">
        <img src={props.img} />
      </div>
      {props.subline && <div className="polaroid__outer">{props.subline}</div>}
    </div>
    </Link>
  );
}
