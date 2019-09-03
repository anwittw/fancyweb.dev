import React, { useState } from "react";
import "./element.scss";
import NotRendered from './NotRendered'
import Rendered from './Rendered'



export default function Element(props) {
  const [stateView, setstateView] = useState(false);

  function handleOnClick() {
    setstateView(!stateView);
  }

  return (
    <div className="element__container" onClick={handleOnClick}>
    <h4 className="element__heading">{props.title}</h4>
    <div>
      {stateView && <NotRendered render={props.render} />}
      {!stateView && <Rendered render={props.render} />}
    </div>
    </div>
  );
}
