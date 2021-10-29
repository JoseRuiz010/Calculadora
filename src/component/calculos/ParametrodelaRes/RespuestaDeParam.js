import React, { useState } from "react";
import { EcCaracteristica } from "./EcCaracteristica";
import "../style.css";
import { Resultado } from "./Resultado";

export const RespuestaDeParam = () => {
  const [Resultados, setResultados] = useState([]);
  return (
    <div className="respuestaTransitoria-main">
      <h1 className="title">Parametros de la respuesta transitoria</h1>
      <EcCaracteristica
        Resultados={Resultados}
        setResultados={setResultados}
      ></EcCaracteristica>

      {Resultados.length > 0
        ? Resultados.map((res, i) => (
            <Resultado key={i} res={res.r}></Resultado>
          ))
        : false}
    </div>
  );
};
