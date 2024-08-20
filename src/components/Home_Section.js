import React from "react";
import "./style.css";
import HomeSection1 from "./Home_Section1";

export default function Home_Section(props) {
  return (
    <section className="header " style={{ textAlign: "center" }}>
      <h1 className="btn1" style={{ fontSize: "40px" }}>
        SERVICES
      </h1>
      <p className="">Conheca nosso portfolio de servicos</p>

      <div className="containerr flex btn1 bnb" style={{ gap: "30px" }}>
        <HomeSection1
          image="./img/section3-icon1.png"
          heading={<>Assessoria Empresarial</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
        <HomeSection1
          image="./img/section3 -icon2.png"
          heading={<>Planejamento Tributario</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
        <HomeSection1
          image="./img/section3-icon3.png"
          heading={<>Planejamento Tributario</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />

        <HomeSection1
          image="./img/section3-icon4.png"
          heading={<>Assessoria Empresarial</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
        <HomeSection1
          image="./img/section3-icon5.png"
          heading={<>Planejamento Tributarioo</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
        <HomeSection1
          image="./img/section3-icon6.png"
          heading={<>Planejamento Tributario</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
      </div>
    </section>
  );
}
