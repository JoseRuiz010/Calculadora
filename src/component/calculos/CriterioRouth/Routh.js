import React from "react";
import "./stylesRouth.css";
export const Routh = () => {
  const calcularEcCaracteristica = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mainRouth">
      <h1 className="title">Criterio de Routh</h1>

      <form className="form-respuestaTransitoria">
        <input name="k" className="inpk" placeholder="Ingrese K" />
        <div className="denominador">
          <input placeholder="a" name="a" className="inp"></input>
          <label className="lblex">
            S<span className="ex">2</span> +
          </label>
          <input name="b" placeholder="b" className="inp"></input>
          <label className="lblex">+ S + </label>
          <input placeholder="c" name="c" className="inp"></input>
        </div>
        <button
          className="btn btn-fijar btn-primary"
          onClick={calcularEcCaracteristica}
        >
          Fijar
        </button>
      </form>
      <form className="form-respuestaTransitoria">
        <div className="denominador">
          <input placeholder="a" name="a" className="inp"></input>
          <label className="lblex">
            S<span className="ex">2</span> +
          </label>
          <input name="b" placeholder="b" className="inp"></input>
          <label className="lblex">+ S + </label>
          <input placeholder="c" name="c" className="inp"></input>+
          <label className="lblex">K</label>
          <input placeholder="k" name="k" className="inp"></input>
        </div>
        <button
          className="btn btn-fijar btn-primary"
          onClick={calcularEcCaracteristica}
        >
          Fijar
        </button>
      </form>
    </div>
  );
};
