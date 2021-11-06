import React from 'react'
import { Coltable } from './Coltable'

export const ResultadoRouth = ({resultado, grado,ecuacion}) => {
  //  const resultado = [[4, 2, 1],[5,6,7] ,[4, 2, 1],[5,6,7] ]

    //const col = ['s4', 's3', 's2', 's1', 's0']
    const col=[]

    for (let i = 0; i < grado; i++) {
        col.push(`s${grado-1-i}`)
        
    }
     
    return (
        <div className='ResultadoContainer box'>
            <h5>Ec: {ecuacion}</h5>
            <div className='contenedorItems'>
                <div className='contenedorCol'>
               {
                   col.map((c,i)=>(<div key={Math.random()*i+'22'} className='itemcol'>{c}</div>))
                   
               } </div>
                <div className='resultados'>
                    {
                        resultado.map((r,i) => (
                            <Coltable key={Math.random()*i+'22'} r={r}></Coltable>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
