import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../style/botonFijo.css";

const BotonFijo = () => {
  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="botonFijo" onClick={volverArriba}>
       <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default BotonFijo;