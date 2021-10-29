import React from "react";
import { useForm } from "../../../customHooks/useForm";
import { Calculos } from "../../../ResMatematica/Calculos";

export const EcCaracteristica = ({ setResultados, Resultados }) => {
  //console.log(setResultados, Resultados);
  const initialState = {
    a: "",
    b: "",
    c: "",
    k: "",
  };

  const { form, handleState } = useForm(initialState);
  const handleSForm = (e) => {
    const { target } = e;
    e.preventDefault();
    //console.log(target.name);
    handleState(target);
  };

  const calcular = (e) => {
    e.preventDefault();
    const { a, b, c, k } = form;
    const res = Calculos.calculoGral(a, b, c, k);
    //console.log(res);
    setResultados([...Resultados, { r: res }]);
  };

  return (
    <div className="main-Form">
      <form className="form-respuestaTransitoria">
        <input
          onChange={handleSForm}
          name="k"
          className="inpk"
          placeholder="Ingrese K"
        />
        <div className="denominador">
          <input
            onChange={handleSForm}
            placeholder="a"
            name="a"
            className="inp"
          ></input>
          <label className="lblex">
            S<span className="ex">2</span> +
          </label>
          <input
            onChange={handleSForm}
            name="b"
            placeholder="b"
            className="inp"
          ></input>
          <label className="lblex">+ S + </label>
          <input
            onChange={handleSForm}
            placeholder="c"
            name="c"
            className="inp"
          ></input>
        </div>
        <button onClick={calcular} className="btn btn-fijar btn-primary">
          Fijar
        </button>
      </form>
    </div>
  );
};
