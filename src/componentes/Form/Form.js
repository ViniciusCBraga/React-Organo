import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import DropDown  from '../DropDown'
import './Form.css'

export const Form = (props) => {



    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    
    }

    return(
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio = {true}
                    label ='Nome'
                    placeholder='Digite seu nome'
                    value = {nome}
                    aoAlterado = {valor=>setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true}
                    label ='Cargo' 
                    placeholder='Digite o seu cargo'
                    value = {cargo}
                    aoAlterado = {valor=>setCargo(valor)}
                />
                <CampoTexto
                    label ='Imagem' 
                    placeholder='Informe o endereço da imagem'
                    value = {imagem}
                    aoAlterado = {valor=>setImagem(valor)}
                />
                <DropDown
                    obrigatorio = {true}  
                    label = 'Time' 
                    itens = {props.times}
                    value = {time}
                    aoAlterado = {valor => setTime(valor)}
                 />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}