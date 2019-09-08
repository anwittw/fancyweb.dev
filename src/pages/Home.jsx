import React from "react";
import Polaroid from "../components/Polaroid/Polaroid";

let pages = [
  { link: "htmlcheatsheet", subline: "Interactive HTML" },
  // { link: "flextest", subline:'Flextest' }
];

export default function Home() {
  return (
    <div className="home">
    <div className="home__polaroids"> 
      {pages.map((page, i) => (
        <Polaroid key={i} {...page} />
      ))}
    </div>
    </div>
  );
}
