import styles from './List.module.css'
import Item from './Item'

function List(){
  return(
    <>
    <div className={styles.container}>
      <h1>Minha lista</h1>
      <ul>
        <Item   />
        <Item marca="ElMundo.com" ano_lancamento={1965}/>
        <Item marca="Marca.es" ano_lancamento={1970}/>
        <Item />
      </ul>
    </div>
    </>
  )
}

export default List