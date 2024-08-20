import React from "react";
import { BsBootstrapReboot } from "react-icons/bs";

export default function Home_FormSection() {
  return (
    <section className="headerr btn1">
      <div className="containerr flex vv ">
        <div className="input" style={{  }}>
          <form className="" style={{ margin: "0px auto" }}>
            <label>First Name</label>
            
            <input type="text" className="homeforminput" />
            <br />
            <label>Last Name</label>
            
            <input type="text" className=" homeforminput" />
            <br />
            <label>Email</label>
            
            <input type="text" className="homeforminput " />
            <br />
            <label>Gender</label>
            <br />
            <input type="radio" name="gender" /> &nbsp; <span>Male</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" />
            &nbsp;
            <span>Female</span>
            <br /><br/>
            <label>Languages</label>
            <br />
            <input type="checkbox" /> &nbsp;<span>HTML</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" /> &nbsp; <span>CSS</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" /> &nbsp;<span>Javascript</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" /> &nbsp; <span>React JS</span>
            <br /><br/>
            <label>Message</label>
            <br />
            <textarea type="text" className=" homeforminput" />
            
            <div className="btn1">
              <a className="btn btn-bg" href="" target="blank">
                <input type="checkbox" /> Not a rebot
                <BsBootstrapReboot style={{ marginLeft: "20px" }} />{" "}
              </a>
            </div>
            <div className="btn1" style={{ marginBottom: "15px" }}>
              <a className="btn " href="" target="blank">
                Enter
              </a>
            </div>
          </form>
        </div>
        <div className="aboutus-section">
          <h1>Fale Conosco</h1>
          <p>
            Para duvidas ou mais informacoes, fale conosco! Nossa equipe esta
            pronta para atende-lo.Para duvidas ou mais informacoes.
          </p>
          <p className="btn1">Para duvidas ou mais informacoes</p>
          <h1>(47) 3084-5500</h1>
        </div>
      </div>
    </section>
  );
}
