function Pessoa(props){
  return(
    <div>
      <hr></hr>
      <img src={props.foto} alt={props.nome} />
      <h3>Nome: {props.nome}</h3>
      <h3>Idade: {props.idade}</h3>
      <h3>Profissão: {props.profissao}</h3>
      <hr></hr>
    </div>
  )
}

export default Pessoa