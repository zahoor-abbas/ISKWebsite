import React, { useState } from "react";
import "./style.css";
import "./headerstyle.css";
import { LuMessageSquare } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaUserNurse } from "react-icons/fa";
import { GiToggles } from "react-icons/gi";
import Home from "./Home";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

export default function Header() {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="headerr">
        <div className="containerr flex ">
          <div className=" col1 flex mobile-hidden">
            <div className="icon1">
              <LuMessageSquare style={{ width: "19px", height: "19px" }} />
            </div>
            <div>
              <p>
                <strong>Fale Conosco</strong>
              </p>
              <p>
                <span>47-3084-5500</span>
              </p>
            </div>
          </div>
          <div className=" col1 flex mobile-hidden">
            <div className="icon1">
              <SlCalender style={{ width: "19px", height: "19px" }} />
            </div>
            <div>
              <p>
                <strong>Fale Conosco</strong>
              </p>

              <p>
                <span>47-3084-5500</span>
              </p>
            </div>
          </div>
          <div className=" col1 flex bb" style={{}}>
            <div className="icon1" style={{}}>
              <FaUserNurse style={{ width: "19px", height: "19px" }} />
            </div>
            <div className="" style={{ display: "flex", alignItems: "center" }}>
              <a className="btn " href="" target="blank">
                Contact to Client
              </a>
            </div>
          </div>
        </div>

        <nav className=" cl " style={{ paddingTop: "10px" }}>
          <div className="containerr flex cc">
            <a href="">
              <img src="./img/logo2.jpg" className="logo" />
            </a>

            <div className={Mobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setMobile(false)} >
              <ul className=" flex " style={{}}>
                <li>
                  <Link to="/" className="link">Home</Link>
                </li>
                <li>
                  <Link to="contact"  className="link">Contact Us</Link>
                </li>
                <li>
                  <Link to="about" className="link" >About Us </Link>
                </li>
                <li>
                  <Link to="services" className="link">Services</Link>
                </li>
                <li>
                  <Link to="portfolio" className="link">Portfolio</Link>
                </li>
                <a className="btn btn-bg mobile-hidden" href="" target="blank">
                  Contact to Client
                </a>
              </ul>
            </div>
            <a href="#" className="nav-toggle" id="nav-toggle" onClick={() => setMobile(!Mobile)} >
              {Mobile ? <GiToggles /> : <ImCross />}{" "}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
