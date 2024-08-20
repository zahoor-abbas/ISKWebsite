import React from "react";

export default function Home_Section1(props) {
  return (
    <div className="flex bvb">
      <div className="icon icon-style">
        <img className="image" src={props.image} alt="" />
      </div>
      <div className="paragraph">
        <h1 className="heading">{props.heading}</h1>
        <p>{props.paragraph}…</p>
      </div>
    </div>
  );
}
