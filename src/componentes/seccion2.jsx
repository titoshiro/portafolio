import yo from "../imagenes/yo.png";

const Seccion2 = () => {
    
  return (
    <div className="container ">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 ">
              <div className="quiensoy">
                <h1>¿Quién soy?</h1>
              </div>
              <p>
                ¡Hola! Mi nombre es Héctor, y mi trayectoria profesional ha sido
                una emocionante aventura. Comencé mi carrera como Músico e
                Ingeniero en Sonido, trabajando en escenarios importantes de
                Chile y colaborando con reconocidos artistas como Ana Tijoux,
                Beto Cuevas, Cami, entre otros. Fue una experiencia increíble
                que atesoro en mi corazón. Sin embargo, en el camino, descubrí
                mi verdadera pasión: el desarrollo web. El mundo de la
                programación me cautivó y me di cuenta de que podía utilizar
                este superpoder para hacer una diferencia en la vida de las
                personas. Convertirme en desarrollador web cambió mi vida por
                completo. Me formé en 4Geeks Academy, donde obtuve mi
                certificado de FullStack, pero el Frontend es lo que realmente
                mueve mi corazón. Estoy muy cerca de obtener mi certificación en
                Diseño UX, ya que creo que la experiencia del usuario es clave
                para crear productos impactantes. Mis tecnologías favoritas son
                HTML5, CSS y JavaScript, y amo especialmente trabajar con React.
                Además, he explorado tecnologías como Python, SQL Alchemy y
                Flask, y me apoyo en frameworks como Bootstrap y Figma para
                crear experiencias únicas. Soy apasionado, creativo y siempre
                estoy en busca de aprender más y mejorar como desarrollador.
                Estoy listo para asumir nuevos retos y contribuir a hacer del
                mundo digital un lugar mejor.
              </p>
            </div>
            <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center ">
              <img className="yo " src={yo} alt="" />
            </div>
          </div>
        </div>
  )
}

export default Seccion2