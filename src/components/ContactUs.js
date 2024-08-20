import React from "react";
import Footer from "./Footer";

export default function ContactUs() {
  return (
    <>
      <h2 className="textalign home-section">Contact Us Page</h2>
      <section
        className="header home-section "
        style={{ backgroundColor: "lightgray" }}
      >
        <div>
          <h1>Contact Information </h1>
          <p>
            The href attribute requires a valid value to be accessible. Provide
            a valid
          </p>
        </div>

        <div className="containerr flex">
          <div className="input" style={{ textAlign: "left" }}>
            <form>
              <label>First Name</label>
              
              <input type="text" className="homeforminput" />
              <br></br>
              <label>Last Name</label>
              
              <input type="text" className="homeforminput " />
              <br></br>
              <label>Email</label>
              
              <input type="text" className="homeforminput " />
              <br></br>
              <label>Message</label>
              
              <textarea type="text" className="homeforminput" />
              <br></br>

              <div className="" style={{ marginBottom: "15px" }}>
                <a className="btn btn-bg" href="" target="blank">
                  Enter
                </a>
              </div>
            </form>
          </div>
          <div className="home-contact">
            <img
              src="./img/contact.jpg" width={'100%'}/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
