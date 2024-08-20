import React from "react";

export default function AboutUs2(props) {
  return (
    <div class="aboutus-section" style={{}}>
      <div class="card">
        <img
          src={props.image}
          alt="Jane"
          className=""
          style={{ }}
        />
        </div>
        <div class="">
          <h2>{props.h2}</h2>
          <p class="title">{props.title}</p>
          <p>{props.para1}</p>
          <p>{props.para2}</p>
          <p>
            <button class="btn">{props.btn}</button>
          </p>
        </div>
      
    </div>
  );
}
