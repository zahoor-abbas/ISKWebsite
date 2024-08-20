import React from "react";
import AboutUs1 from "./AboutUs1";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <AboutUs1 />
      <Footer />
    </>
  );
}
