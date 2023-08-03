import prueba2 from "../imagenes/prueba2.png"

const Card = () => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
        <img
            src={prueba2} 
            className="img-fluid rounded-start "
           
          />
        </div>
        <div className="col-md-8">
        <img
            src={prueba2} 
            className="img-fluid rounded-start"
           
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
