import "./style/app.css";
import Navbar from "./componentes/navbar";


import Seccion3 from "./componentes/seccion3";
import Seccion4 from "./componentes/seccion4";
import Nsession1 from "./componentes/nsession1";
import Nsession2 from "./componentes/nsession2";

function App() {
  return (
    <>
      <div id="seccion1" className="seccion-1 ">
        <Navbar />

        <Nsession1 />
      </div>

      <div id="seccion2" className="seccion-2">
        <Nsession2 />
      </div>

      <div id="seccion3" className="seccion-3">
        <Seccion3 />
      </div>

      <div id="seccion4" className="seccion-4">
        <Seccion4 />
      </div>
    </>
  );
}

export default App;
