import React from "react";
import piscina from "../images/clip-pool-party.png";
import "./Inicio.css";

export const Inicio = () => {
  return (
    <div className="Body">
      <div className="left">
        <h1 className="Titulo">Piscina IoT</h1>
        <h2 className="subTitulo">
          Una piscina inteligente para todos, observar constantemente los niveles de
          cloro, PH y turbidez.
        </h2>
        <p className="bajar">
          ¡¡Sigue Bajando!!
        </p>
      </div>
      <div className="right">
        <img src={piscina} alt="Imagen de una piscina" className="imagen" />
      </div>
    </div>
  );
};
