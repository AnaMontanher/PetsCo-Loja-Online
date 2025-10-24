import Botao from './Botao'
import './Card.css'

function Card({ descricao, imagem, preco }) {
  return (
    <div className="card">
      <img src={imagem} alt="imagem do produto" />
      <p className="descricao">{descricao}</p>
      <div>
        <p className="preco">R${preco}</p>
        <Botao></Botao>
      </div>
    </div>
  )
}

export default Card
