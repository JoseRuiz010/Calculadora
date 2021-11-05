import React, { useState } from "react";
import "./stylesRouth.css";
export const Routh = () => {
  const [string, setstring] = useState()
  const [arrays, setarrays] = useState([])
  const [gradostate, setgrado] = useState(0)
  let ecuacion = []

  let grado;
  const ingresaElGrado = () => {
    const ec = [];
    grado = prompt('Ingresa el grado')

    grado++;
    setgrado(grado)
    for (let i = grado; i > 0; i--) {
      ec[i] = prompt(`Ingresa X^${i - 1}`)
    }
    ec[0] = prompt(`Ingresa K`);
    // console.log(ecuacion);
    ecuacion.push(ec)
    setarrays(ec);
    stringEcuacion()
  }

  let str = '';
  const stringEcuacion = () => {
    console.log(ecuacion);
    for (let i = 0; i < grado; i++) {
      (grado - i - 1) === 0 ? str = str.concat(` ${ecuacion[0][grado - i]} +`) :
        str = str.concat(` ${ecuacion[0][grado - i]}( X^${grado - i - 1})+`)

    }
    str = str.concat(` ${ecuacion[0][0]} K`)
    console.log(str);
    setstring(str);
  }
  const calcular = () => {

    const ar = arrays
    //console.log(ar);
    const g = gradostate;
    //console.log(g);

    if (g-1 == 4) {
      //  while (g<=0) {
      // console.log(`${ar[g-1]} * ${ar[g-2]}-${ar[g]} * ${ar[g-3]}`);
      let a = (ar[g - 1] * ar[g - 2]) - (ar[g] * ar[g - 3]) / (ar[g - 1])
      let b = (ar[4] * ar[1]) / (ar[4])
      //console.log(`${ar[4]} * ${ar[1]} /${ar[4]}`);
      let b2 = (ar[4] * ar[0]) / (ar[4])
      //console.log(`${ar[4]} * ${ar[0]} /${ar[4]}`);
      let c = ((a * ar[2]) - (ar[4] * b)) / a
      let c1 = -(ar[4] * b2) / a
      let d = b;
      let d1 = b2
      console.log(`${ar[5]}   ${ar[3]}      ${ar[1]}+${ar[0]}K`);
      console.log(`${ar[4]}   ${ar[2]}           ${0}`);
      console.log(`${a}      ${b}+ ${b2}K        ${0}`);
      console.log(`${c}+${c1}        ${0}             ${0}`);
      console.log(`${d}+${d1}K         ${0}             ${0}`);


    }else{
      if(g-1==3){
         //  while (g<=0) {
      //console.log(`${ar[3]} * ${ar[2]}-${ar[4]} * ${ar[1]}`);
      let a = ((ar[3] * ar[2]) - (ar[4] * ar[1])) / (ar[3])
      let a1 = ( - (ar[4] * ar[0]) / (ar[3]));
      let b=ar[0]
      
  
      console.log(`${ar[4]}   ${ar[2]}   0`)      
      console.log(`${ar[3]}   ${ar[1]}+${ar[0]}K  0`)          
      console.log(`${a}+ ${a1}K     0`)
      console.log(`${ar[1]}+${ar[0]}K     ${0}             `);
      
      }
    }



  }

  return (
    <div className="mainRouth">
      <h1 className="title">Criterio de Routh</h1>

      <button className='btn btn-primary mt-3'
        onClick={() => ingresaElGrado()}
      > Cargar Grado</button>

      <b className='mt-4'>{string} =0</b>

      <button className='btn btn-primary mt-3'
        onClick={() => calcular()}
      > Calcular</button>

    </div>
  );
};
