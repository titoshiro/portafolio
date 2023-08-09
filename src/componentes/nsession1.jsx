import { useRef } from "react";
import video from "../imagenes/video4.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import BotonFijo from "./botonfijo";

const Nsession1 = () => {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card  border border-0" onClick={handleVideoClick}>
            <div className="row ">
              <div className="presentacion col-md-7 border border-0 ">
                <video ref={videoRef} className="video1 color border border-0 " autoPlay muted loop>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
              <div className="presentacion col-md-5 border border-0 ">
                <div className="card-body border border-0">
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
              </div>
            </div>
          </div>
          <BotonFijo />
        </div>
      </div>
    </div>
  );
};

export default Nsession1;
