import Proptypes from 'prop-types'
import styles from "./Thumbnail.module.css"

function Thumbnail({foto,canal,titulo,views,datap}){
   return(
    <>

      <div className={styles.container}>
        <h2>Thumbnail</h2>

        <img src={foto} alt={canal}/>
        <p>Título: {titulo}</p>
        <p>Nome do Canal: {canal}</p>
        <p>Visualizações: {views}</p>
        <p>Data de publicação: {datap}</p>
      </div>

      <br></br>
    </>
   )
}

Thumbnail.propTypes = {
  titulo: Proptypes.string,
  views: Proptypes.number,
}

export default Thumbnail