import './Layout.css'
import logo from '../assets/logo.png'

function Nav() {
  return (
    <nav id="navbar" class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a id="link_logo" className="d-flex align-items-center" href="#">
          <img id="imageLogo" src={logo} />
          <span classNameName="brand ms-3">PetsCo</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" href="#">
                Produtos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" id="loginLink" href="#">
                <span>Login</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav
