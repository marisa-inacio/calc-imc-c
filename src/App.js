import React, {useState} from 'react';
import TabelaIMC from './components/TabelaIMC'
import Peso from './components/Peso'
import Altura from './components/Altura'
import CalcularIMC from './components/CalcularIMC'
import Resultado from './components/ResultadoIMC'
import CSS from './App.css'



function App() {

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)



  return (
    <>
    <div className= "Pagina">
    {/* //usa os props do componente, recebe dois parametros */}
    <Peso p={peso} sp={setPeso}/>
    <Altura a={altura} sa={setAltura}/>
    <CalcularIMC p={peso} a={altura} sr={setResultado}/>
    <Resultado r={resultado}/>
    <TabelaIMC/>
    </div>
    
    
    </>
  );
}

export default App;
