import { useState } from "react";
import "./App.css";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";

import StackTecnologias from "./components/StackTecnologias";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

import {
  datosPersonales,
  perfil,
  experiencias,
  educacion,
  tecnologiasIniciales,
} from "./cvData";

function App() {
  // Estado dinámico de tecnologías
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  // Función para agregar tecnologías desde el formulario
  const agregarTecnologia = (nuevaTecno) => {
    setTecnologias([...tecnologias, nuevaTecno]);
  };

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

      {/* === EV08 === */}
      <ToggleHabilidades />

      <StackTecnologias lista={tecnologias} />

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
    </>
  );
}

export default App;
