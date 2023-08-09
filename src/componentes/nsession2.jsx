import yo from "../imagenes/yo.mp4"
import "../style/app.css"


const Nsession2 = () => {


  return (
<div className="container">
  <div className="row">
    <div className="col-md-5 border border-0 ">
      <div className="video-container">
        <video  className="video2 " autoPlay muted loop>
          <source src={yo} type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card-body color border border-0 m-4">
        <div className="quiensoy border border-1">
            <h1>¿Quién soy?</h1>
          </div>
          <p>
            ¡Hola! Mi nombre es Héctor, y mi trayectoria profesional ha sido una
            emocionante aventura. Comencé como Músico e Ingeniero en Sonido,
            colaborando con reconocidos artistas como Ana Tijoux, Beto Cuevas,
            Cami y otros. Esta experiencia fue increíble y la atesoro en mi
            corazón. Sin embargo, descubrí mi verdadera pasión en el desarrollo
            web. Convertirme en desarrollador web cambió mi vida por completo.
            Me formé en 4Geeks Academy, obteniendo mi certificado de FullStack,
            pero el Frontend es lo que realmente mueve mi corazón. Estoy cerca
            de obtener mi certificación en Diseño UX, ya que creo que la
            experiencia del usuario es clave para crear productos impactantes.
            Mis tecnologías favoritas son HTML5, CSS y JavaScript, y amo
            especialmente trabajar con React. Además, he explorado tecnologías
            como Python, SQL Alchemy y Flask, y me apoyo en frameworks como
            Bootstrap y Figma para crear experiencias únicas. Soy apasionado,
            creativo y siempre estoy en busca de aprender más y mejorar como
            desarrollador. Estoy listo para asumir nuevos retos y contribuir a
            hacer del mundo digital un lugar mejor. 
          </p>
        </div>
        
    </div>
    </div>

  </div>
  )
}

export default Nsession2