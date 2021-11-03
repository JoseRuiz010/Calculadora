import React from "react";
import { Navbar } from "./Nav/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./calculos/style.css";
import { RespuestaDeParam } from "./calculos/ParametrodelaRes/RespuestaDeParam";
import { Routh } from "./calculos/CriterioRouth/Routh";
import { LugarRaices } from "./calculos/LugarRaices/LugarRaices";
export const Ejercicio = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/lugardelasraices">
            <LugarRaices></LugarRaices>
          </Route>
          <Route path="/routh">
            <Routh></Routh>
          </Route>
          <Route path="/">
            <RespuestaDeParam></RespuestaDeParam>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
