import React from "react";
 
export const ResultadoSp = ({ res }) => {
  const { r1, r2 ,sp1, sp2} = res;
 
 console.log(res);
  return (
    <div className="restultadoSP box">
      <div className="title">
        Para: <b> {`${sp1} + " < " + "SP" + " < " + ${sp2}`} </b>
      </div>
      <div className="valoresZ">
        <p>{r1.z+ " < "}</p>
        <p>
          <b> Z </b> 
         </p>
        <p>{" < " + r2.z}</p>
      </div>
      <div className="valoresZ">
        <p>{r1.k+ " < "}</p>
        <p>
          <b> K</b>
        </p>
        <p>{" < " + r2.k}</p>
      </div>
    </div>
  );
};


