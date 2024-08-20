import React from "react";
import "./style.css";
import { LuMessageSquare } from "react-icons/lu";
import HomeSection from "./Home_Section";
import HomeForm from "./Home_FormSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <section className="background-image headerr">
        <div className="home-contact containerr">
          <div className="header-left">
            <h1 style={{ fontSize: "42px" }}>
              Focamos em oferecer profissionalismo e competencia!
            </h1>

            <p align="justify" className="btn1">
              A ISK Contabilidade oferece ao cliente um atendimento diferenciado
              e especifico para cada segmento de negocio, sempre estruturado
              sobre os pilares que sustentam a ISK: confianca, credibilidade e
              etica
            </p>
          </div>

          <div className="btn1">
            <a className="btn btn-bg" href="" target="blank">
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
      {/*card section */}

      <section className="">
        <div className="containerr flex card-section ">
          <div className=" card">
            <div className="icon">
              <img className="imagee" src="./img/icon1.png" alt="" />
            </div>
            <div className="padding">
              <h2>CONFIANCA</h2>
              <p className="padding">
                Sobre ela estruturamos todas as nossas atitudes, buscando
                fortalece-la a cada dia atraves de um trabalho integro e de
                qualidade.
              </p>
            </div>
          </div>
          <div className=" card">
            <div className=" icon">
              <img className="imagee" src="./img/icon1.png" alt="" />
            </div>
            <div className="padding">
              <h2>CONFIANCA</h2>
              <p className="padding">
                Sobre ela estruturamos todas as nossas atitudes, buscando
                fortalece-la a cada dia atraves de um trabalho integro e de
                qualidade.
              </p>
            </div>
          </div>
          <div className="card" style={{}}>
            <div className="icon">
              <img className="imagee" src="./img/icon1.png" alt="" />
            </div>
            <div className="padding">
              <h2>CONFIANCA</h2>
              <p className="padding">
                Sobre ela estruturamos todas as nossas atitudes, buscando
                fortalece-la a cada dia atraves de um trabalho integro e de
                qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      <HomeSection />
      <HomeForm />
      <Footer />
    </>
  );
}
