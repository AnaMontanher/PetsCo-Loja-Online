import './Container.css'
import Card from './Card'

function Container() {
  return (
    <div id="produtos" className="">
      <div id="card-container" className="row justify-content-center mb-3">
        <h2 className="p-4">Destaques</h2>
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3  mb-3">
          <Card
            descricao="Produto 1"
            imagem="/cactus-svgrepo-com.svg"
            preco="25,90"
          ></Card>
        </div>
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3  mb-3">
          <Card
            descricao="Produto 1"
            imagem="/cactus-svgrepo-com.svg"
            preco="25,90"
          ></Card>
        </div>
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3  mb-3">
          <Card
            descricao="Produto 2"
            imagem="/cactus-svgrepo-com.svg"
            preco="49,90"
          ></Card>
        </div>
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3  mb-3">
          <Card
            descricao="Produto 1"
            imagem="/cactus-svgrepo-com.svg"
            preco="25,90"
          ></Card>
        </div>
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3  mb-3">
          <Card
            descricao="Produto 1"
            imagem="/cactus-svgrepo-com.svg"
            preco="25,90"
          ></Card>
        </div>
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3  mb-3">
          <Card
            descricao="Produto 2"
            imagem="/cactus-svgrepo-com.svg"
            preco="49,90"
          ></Card>
        </div>{' '}
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3  mb-3">
          <Card
            descricao="Produto 2"
            imagem="/cactus-svgrepo-com.svg"
            preco="49,90"
          ></Card>
        </div>{' '}
        <div className=" col-12 col-sm-6 col-md-4 col-lg-3  mb-3">
          <Card
            descricao="Produto 2"
            imagem="/cactus-svgrepo-com.svg"
            preco="49,90"
          ></Card>
        </div>
      </div>
    </div>
  )
}

export default Container
