import React from 'react'

export default function NotRendered(props) {
  return (
    <div>
    {props.render.map((element,i) => (
      <div key={i} className="notrendered__container">{element}</div>
    ))}
    </div>
  )
}
