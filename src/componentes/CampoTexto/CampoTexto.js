import { useState } from 'react'
import './CampoTexto.css'

export const CampoTexto = ({value, label, obrigatorio, placeholder,aoAlterado}) =>{

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{label}</label>
            <input  value= {value} onChange={aoDigitado} required={obrigatorio} placeholder={`${placeholder}...`}/>
        </div>
    )
}

