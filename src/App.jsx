import "./style/app.css";
import Navbar from "./componentes/navbar";
import Seccion1 from "./componentes/seccion1";
import Seccion2 from "./componentes/seccion2";
import Seccion3 from "./componentes/seccion3";
import Seccion4 from "./componentes/seccion4";


function App() {


  return (
    <>
    
      <div id="seccion1" className="seccion-1 ">
        <Navbar />
      <Seccion1/>
       
      </div>

      <div id="seccion2" className="seccion-2">
       <Seccion2/>
      </div>

      <div id="seccion3" className="seccion-3">
        <Seccion3/>
      </div>

      <div id="seccion4" className="seccion-4">
       <Seccion4/>
      </div>
    </>
  );
}

export default App;
