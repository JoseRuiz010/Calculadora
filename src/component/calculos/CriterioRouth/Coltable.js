import React from 'react'

export const Coltable = ({r}) => {
    //const resultado = [4, 2, 1]
    return (
        <div className='colItems'>
            {
                r.map((c,i)=><div key={Math.random()*i+'22'} className='itemcolf'>{c}</div>)
            }
        </div>
    )
}
