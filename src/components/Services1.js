import React from "react";
import Services2 from "./Services2";

export default function Services1() {
  return (
    <section className="headerr home-section">
      <h1 className="icon">My Services</h1>
      <p>Our Company Services</p>
      <br></br>
      <br></br>

      <div className="containerr flex  bnb" style={{ gap: "30px" }}>
        <Services2
          image="./img/services.jpg"
          heading={<>Assessoria Empresarial</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
        <Services2
          image="./img/services1.jpg"
          heading={<>Planejamento Tributario</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
        <Services2
          image="./img/services.jpg"
          heading={<>Planejamento Tributario</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
        <Services2
          image="./img/services1.jpg"
          heading={<>Assessoria Empresarial</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
        <Services2
          image="./img/services.jpg"
          heading={<>Planejamento Tributarioo</>}
          paragraph={
            <>
              Visando apresentar de forma clara e pratica a aplicacao de
              conceitos financeiros ajustados ao foco de…
            </>
          }
        />
        <Services2
          image="./img/services1.jpg"
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
