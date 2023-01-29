import Frase from './components/Frase'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'
import Item from './components/Item'
import Thumbnail from './components/Thumbnail'
import './App.css'

function App() {

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Oi paco</h1>
      <img src={url} alt='minha imagem'></img>
      <h1>Dois componentes:</h1>
      <HelloWorld />
      <Frase />
      <List />

      <h1>Props</h1>
      <SayMyName nome="Er Pepe" />
      <SayMyName nome="João" />
      <Frase />

      <h1>Props mais complexo</h1>
      <Pessoa
        nome="João"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />

      <Thumbnail
        foto="https://via.placeholder.com/150"
        canal="RicardoGameplays"
        titulo="Incrivel gameplay 500kills - BF3"
        views={50.000}
        datap="02/02/23"
      />

      <Thumbnail
        foto="https://via.placeholder.com/150"
        canal="RichieLoko98"
        titulo="Revolução Russa, como mudou minha vida"
        views={20.000}
        datap="09/12/2013"
      />
    </div>
  )
}

//================================================================
import Evento from './components/Evento'

function App2() {
  return (
    <>
      <div className='App'>
        <h1>Testando Eventos</h1>
        <Evento numero="1"/>
        <Evento numero="2"/>
      </div>
    </>
  )
}

export default App2
