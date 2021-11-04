import React, { useState } from "react";
import { EcCaracteristica } from "./EcCaracteristica";
import "../style.css";
import { Resultado } from "./Resultado";
import { Calculos } from "../../../ResMatematica/Calculos";
import { useForm } from "../../../customHooks/useForm";
import { ResultadoSp } from "./ResultadoSp";

export const RespuestaDeParam = () => {
  const [Resultados, setResultados] = useState([]);
  const [ResultadoSP, setResultadoSP] = useState([]);

  const { handleState, form } = useForm({
    sp1: "",
    sp2: "",
  });
  const calcularSP = (e) => {
    e.preventDefault();
    const o = Resultados[Resultados.length - 1].r.raices.s1.a;
    const ressp1 = Calculos.calcSP(form.sp1, o);
    const ressp2 = Calculos.calcSP(form.sp2, o);
    setResultadoSP([...ResultadoSP, { r1: ressp1, r2: ressp2, sp1:form.sp1,sp2:form.sp2}]);

     
  };
  const handleForm = (e) => {
    const { target } = e;
    handleState(target);
  };
  return (
    <div className="respuestaTransitoria-main">
      <h1 className="title">Parametros de la respuesta transitoria</h1>
      <EcCaracteristica
        Resultados={Resultados}
        setResultados={setResultados}
      ></EcCaracteristica>

      {Resultados.length > 0 && <h3>Resultados</h3>}

      <div className="content-Resultados-gral">
        {Resultados.length > 0
          ? Resultados.map((res, i) => (
              <Resultado
                className="resultados-content"
                key={i}
                res={res.r}
              ></Resultado>
            ))
          : false}
      </div>
      
      {
        Resultados.length>0 &&  <div className="box form-sp">
        <h3>
          <input
            className="inp"
            name="sp1"
            value={form.sp1}
            onChange={handleForm}
          />
          <label>{"< Sp <"}</label>
          <input
            className="inp"
            name="sp2"
            value={form.sp2}
            onChange={handleForm}
          />
        </h3>
        <button className="btn btn-fijar btn-primary" onClick={calcularSP}>
          Fijar
        </button>
      </div>
      }
     

     {ResultadoSP.length>0 && <div className="contentresSP">
       {ResultadoSP.map(r=>(
        <ResultadoSp
            
            res={{ r1: r.r1, r2:r.r2,sp1:r.sp1,sp2:r.sp2}}
          ></ResultadoSp>

       )) }
      </div>}
    </div>
  );
};
