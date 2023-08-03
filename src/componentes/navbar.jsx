import home from "../imagenes/home.png"
import demi from "../imagenes/deMi.png"
import proyectos from "../imagenes/proyecto.png"
import contacto from "../imagenes/contacto.png"
import "../style/navbar.css"; 
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid m-5">
        <button
          className="boton navbar-toggler nav-menu-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#seccion1">
                <div className="home-container">
                  <img src={home} alt="" className="home-image" style={{ maxWidth: "150px" }} />
                  <div className="home-text">Home</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#seccion2">
                <div className="home-container">
                  <img src={demi} alt="" className="home-image" style={{ maxWidth: "150px" }} />
                  <div className="home-text">Historia</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#seccion3">
                <div className="home-container">
                  <img src={proyectos} alt="" className="home-image" style={{ maxWidth: "150px" }} />
                  <div className="home-text">Proyectos</div>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#seccion4">
                <div className="home-container">
                  <img src={contacto} alt="" className="home-image" style={{ maxWidth: "150px" }} />
                  <div className="home-text">Contactos</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
