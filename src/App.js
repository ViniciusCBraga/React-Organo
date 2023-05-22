import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome:'Projetos',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Comercial',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F88F'
    },
    {
      nome:'Gente e Gestão',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'Marketing',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome:'Presidência',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },

  ]

  const[colaboradores,setColaboradores] = useState([])
  const aoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Form times = {times.map(times => times.nome)} aoColaboradorCadastrado ={colaborador => aoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
        key = {time.nome} 
        nome = {time.nome} 
        corPrimaria = {time.corPrimaria} 
        corSecundaria = {time.corSecundaria}
        colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome) }  
      />)}
      <Rodape/>
      
    </div>
  );
}

export default App;
