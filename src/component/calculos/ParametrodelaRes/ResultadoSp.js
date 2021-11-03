import React from "react";

export const ResultadoSp = ({ res, val }) => {
  const { r1, r2 } = res;
  const { sp1, sp2 } = val;

  return (
    <div className="restultadoSP box">
      <div className="title">
        Para: <b> {sp1 + " < " + "SP" + " < " + sp2}</b>
      </div>
      <div className="valoresZ">
        <p>{r1 + "<"}</p>
        <p>
          <b> Z</b>
        </p>
        <p>{"<" + r1}</p>
      </div>
    </div>
  );
};
