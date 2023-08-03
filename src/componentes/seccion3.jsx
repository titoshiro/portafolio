
import starwars from "../imagenes/starwars.png";
import todolist from "../imagenes/todolist.png";
import companion from "../imagenes/companion.png";
import registrate from "../imagenes/registrate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Seccion3 = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-12 col-md-6">
        <h1 className="tituloCard">Blog Star Wars</h1>
        <p className="habilidades">
          #Creacion-API #React #React-router #Bootstrap #CSS #Js #Python
          #Flask
        </p>
        <h5 className="info">
          Sitio web donde puedes recorrer personajes de StarWars y
          seleccionar a tus favoritos utilizando Hooks de React. Explora
          la información de los personajes y disfruta de una experiencia
          interactiva gracias a los Hooks que hacen que la aplicación sea
          más dinámica y fácil de usar.
        </h5>
        <div className="icon">
          <a
            href="https://github.com/titoshiro/Blog_de_Starwars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
         
        </div>
        <img className="starwars" src={starwars} alt="" />
      </div>
      <div className="col-12 col-md-6">
        <h1 className="tituloCard">Lista de Contactos</h1>
        <p className="habilidades">
          #Contexto-Global #React #React-router #Bootstrap #CSS #JS
        </p>
        <h5 className="info">
          Sitio web donde puedes guardar tus contactos utilizando un
          contexto global de la aplicación. El contexto global asegura que
          los datos de contacto estén disponibles y se puedan acceder
          desde cualquier parte de la aplicación de manera eficiente y
          organizada.
        </h5>
        <div className="icon">
          <a
            href="https://github.com/titoshiro/lista-contactos-react-context"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
       
        </div>
        <img className="starwars" src={todolist} alt="" />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6">
        <h1 className="tituloCard">Kitchen Companión</h1>
        <p className="habilidades">
          #Creacion-API #React #React-router #Bootstrap #CSS #Js #Python
          #Flask
        </p>
        <h5 className="info">
          Proyecto colaborativo, tuve un rol destacado en el frontend y la
          UX. Creamos un sitio web para generar recetas con los productos
          del refrigerador, y me enfoqué en diseñar una interfaz atractiva
          y fácil de usar para los usuarios.
        </h5>
        <div className="icon">
          <a
            href="https://github.com/titoshiro/KitchenCompanion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          
        </div>
        <img className="starwars" src={companion} alt="" />
      </div>
      <div className="col-12 col-md-6">
        <h1 className="tituloCard">Registro JWT</h1>
        <p className="habilidades">
          #Creacion-API #React #React-router #Bootstrap #CSS #Js #Python
          #Flask
        </p>
        <h5 className="info">
          Sitio web donde puedes registrar y realizar un inicio de sesión
          de forma segura a través de JWT (JSON Web Tokens). Los datos se
          envían de manera segura a la página segura, garantizando la
          protección de la información del usuario.
        </h5>
        <div className="icon">
          <a
            href="https://github.com/titoshiro/autenticacion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        
          <br />
          <br />
        </div>
        <img className="starwars" src={registrate} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Seccion3