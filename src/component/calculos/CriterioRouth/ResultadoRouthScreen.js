import React from 'react'
import { ResultadoRouth } from './ResultadoRouth';
import './stylesRouth.css'
export const ResultadoRouthScreen = ({resultadoState}) => {
   /* const resultado=[]
      resultado.push([`${4}`,`${2}`,`${0}`]);
      resultado.push([`${3}`,`${1}+${0}`,`${0}`]);
      resultado.push([`${3}+ ${7}K`,`${0}`,`${0}`]);
      resultado.push([`${1}+${1}K`,`${0}`,`${0}`]);*/
     // console.log(resultadoState);
    return (
        <div className='resultadoScreen'>
            <h1>Resultado</h1>
            {
                resultadoState.map((re,i)=>(<ResultadoRouth key={Math.random()*i+'22'} ecuacion={re.ecuacion}  grado={re.grado} resultado={re.resultado}></ResultadoRouth>))
            } 
            
        </div>
    )
}
