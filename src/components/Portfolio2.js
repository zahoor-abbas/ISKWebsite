import React from "react";

export default function Portfolio2(props) {
  return (
    <div class="port1" style={{ textAlign: "center" }}>
      <div class="" style={{}}>
        <img src={props.image} alt="Jane" className="" style={{ width:'100%'}} />
        </div>
        <div class="" style={{padding:''}}>
          <h2>{props.h2}</h2>
          <p class="title">{props.title}</p>
          <p style={{padding:'0px 30px 0 0'}}>{props.para1}</p>
          <p>{props.para2}</p>
        </div>
      
    </div>
  );
}
