import './Categoria.css'

function Categoria({ imagem, descricao }) {
  return (
    <div className="flex-column align-items-center px-2">
      <img className="categoria_imagem" src={imagem} alt="imagem do produto" />
      <div className="categoria_texto mt-3">{descricao}</div>
    </div>
  )
}

export default Categoria
