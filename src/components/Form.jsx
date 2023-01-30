import { useState } from "react"

function Form() {

  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(name)
  }

  const [name, setName] = useState("El pepe")

  return (
    <>
      <div>
        <h1>Meu cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
          <div>
            <label htmlFor="name">Usuario</label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" />
          </div>
          <div>
            <label htmlFor="name"></label>
            <input type="submit" value="Cadastrar" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Form