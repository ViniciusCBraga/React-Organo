import './DropDown.css'

export const DropDown = (props) => {

    const aoSelecionado = (evento) => {
        props.aoAlterado(evento.target.value)
    } // === onChange={evento => props.aoAlterado(evento.target.value)}

    
    return(
        <div className='dropdown'>
            <label> {props.label}</label>
            <select onChange={aoSelecionado}  required = {props.obrigatorio} value={props.value}>
                <option value={''}></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

} 