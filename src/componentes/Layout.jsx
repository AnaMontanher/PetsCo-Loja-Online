import Container from './Container'
import Nav from './Nav'
import ListaCategoria from './ListaCategoria'
import Footer from './Footer'
import './Layout.css'

function Layout() {
  return (
    <div>
      <Nav></Nav>
      <div id="container" className="">
        <div id="hero" className="d-flex">
          <h1 className="pt-3">
            Os melhores produtos <br></br>para seu Pet está aqui!
          </h1>
        </div>
        <ListaCategoria></ListaCategoria>
        <Container></Container>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
