import "./App.css";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";

import { datosPersonales, perfil, experiencias, educacion } from "./cvData";

function App() {
  return (
    <>
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={perfil} />

      <Experiencia lista={experiencias} />

      <Educacion lista={educacion} />
    </>
  );
}

export default App;
