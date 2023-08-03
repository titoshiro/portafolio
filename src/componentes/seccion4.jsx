import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import conectemos from "../imagenes/conectemos.png";

const Seccion4 = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="footer col-12 col-md-6 text-center ">
        <h2 className="hola">Conectemos</h2>
        <h5 className="email">titocontactos@gmail.com</h5>
        <p className="full">
          &lt; Mis redes con todos mis proyectos /&gt;
        </p>
        <div className="iconprincipal">
          <a
            href="https://github.com/titoshiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/h%C3%A9ctor-gerardo-silva-villena/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <img className="conectemos" src={conectemos} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Seccion4