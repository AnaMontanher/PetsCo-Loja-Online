import racao from '../assets/racao.png'
import limpeza from '../assets/limpeza.png'
import medicina from '../assets/medicina.png'
import acessorio from '../assets/racao.png'
import brinquedo from '../assets/brinquedo.png'
import Categoria from './Categoria'
import './ListaCategoria.css'

function ListaCategoria() {
  return (
    <div id="lista" className="d-flex flex-column">
      <h2>Categorias</h2>
      <ul id="categoria_lista">
        <li >
          <a className="link_categoria" href="">
            <Categoria imagem={racao} descricao="Rações"></Categoria>
          </a>
        </li>
        <li>
          <a className="link_categoria" href="">
            <Categoria
              imagem={limpeza}
              descricao="Higiene e Limpeza"
            ></Categoria>
          </a>
        </li>
        <li>
          <a className="link_categoria" href="">
            <Categoria
              imagem={medicina}
              descricao="Medicina e Saúde"
            ></Categoria>
          </a>
        </li>
        <li>
          <a className="link_categoria" href="">
            <Categoria imagem={acessorio} descricao="Acessórios"></Categoria>
          </a>
        </li>
        <li>
          <a className="link_categoria" href="">
            <Categoria imagem={brinquedo} descricao="Brinquedos"></Categoria>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ListaCategoria
