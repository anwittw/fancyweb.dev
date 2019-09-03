import React from "react";

import ReactHtmlParser from "react-html-parser";

export default function NotRendered(props) {
  return (
    <div>
      <div className="rendered__container">
        {ReactHtmlParser(props.render.join(''))}
      </div>
    </div>
  );
}
