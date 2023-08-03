import BotonFijo from "./botonfijo";
import { useRef } from "react";
import video from "../imagenes/video4.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Seccion1 = () => {

const videoRef = useRef(null);

const handleVideoClick = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

  return (
    <div
    className="container-fluid d-flex align-items-center justify-content-center"
    onClick={handleVideoClick}
  >
    <div className="row">
      <div className="presentacion col-9 col-md-7 ">
        <h2 className="hola">Hola!!</h2>
        <h3 className="yosoy">Soy </h3>
        <h1 className="nombre">Héctor Silva</h1>
        <p className="full">
          &lt; FullStack Developer & Ux desing /&gt;{" "}
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
      <div className=" video col-12 col-md-5 d-flex align-items-center justify-content-center">
        <video
          ref={videoRef}
          className="img-fluid rounded-start"
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
    <BotonFijo />
  </div>
  )
}

export default Seccion1