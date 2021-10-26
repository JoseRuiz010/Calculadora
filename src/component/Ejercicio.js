import React from 'react'
import { Navbar } from './Nav/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './calculos/style.css'
import { RespuestaDeParam } from './calculos/ParametrodelaRes/RespuestaDeParam';
export const Ejercicio = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route path="/about">
                         
                    </Route>
                    <Route path="/users">
                         
                    </Route>
                    <Route  path="/">
                      <RespuestaDeParam></RespuestaDeParam>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
