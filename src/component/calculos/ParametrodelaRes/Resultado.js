import React from "react";

export const Resultado = ({ res }) => {
  const { z, q } = res;
  //console.log(q);

  if (res.sp) {
    return (
      <div className="ResultadoRespuestaTransitoria box">
        <h1>Resultado</h1>
        <div className="Resultados">
          <label className="items-result">
            <b>Z=</b> <span>{z}</span>
          </label>
          <label className="items-result">
            <b>q=</b> <span>{q}</span>
          </label>
          <label className="items-result">
            <b>wd=</b> <span>{res.wd}</span>
          </label>
          <label className="items-result">
            <b>wn=</b> <span>{res.wn}</span>
          </label>
          <label className="items-result">
            <b>tc=</b> <span>{res.tc}</span>
          </label>
          <label className="items-result">
            <b>tp=</b> <span>{res.tp}</span>
          </label>
          <label className="items-result">
            <b>sp=</b> <span>{res.sp}</span>
          </label>
          <label className="items-result">
            <b>sp%=</b> <span>{res.spp}</span>
          </label>
          <label className="items-result">
            <b>ts3=</b> <span>{res.ts3}</span>
          </label>
          <label className="items-result">
            <b>ts4=</b> <span>{res.ts4}</span>
          </label>
          <label className="items-result">
            <b>tp=</b> <span>{res.tp}</span>
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="ResultadoRespuestaTransitoria">
      <h1 className="title">Resultado</h1>
      <div className="Resultados">
        <label className="items-result">
          <b>Z=</b> <span>{z}</span>
        </label>
        <label className="items-result">
          <b>q=</b> <span>{q}</span>
        </label>
      </div>
    </div>
  );
};
