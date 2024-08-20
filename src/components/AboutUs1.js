import React from "react";
import AboutUs2 from "./AboutUs2";
import './style.css'; 

export default function AboutUs1() {
  return (
    <div class="containerr flex">
      <AboutUs2
        image="./img/contact.jpg"
        h2="Jane Doe"
        title="Ceo & Founder"
        para1="Some text that describes me lorem ipsum ipsum lorem."
        para2="jane@example.com"
        btn="contact"
      />
      <AboutUs2
        image="./img/contact.jpg"
        h2="Jane Doe"
        title="Ceo & Founder"
        para1="Some text that describes me lorem ipsum ipsum lorem."
        para2="jane@example.com"
        btn="contact"
      />
      <AboutUs2
        image="./img/contact.jpg"
        h2="Jane Doe"
        title="Ceo & Founder"
        para1="Some text that describes me lorem ipsum ipsum lorem."
        para2="jane@example.com"
        btn="contact"
      />
    </div>
  );
}
