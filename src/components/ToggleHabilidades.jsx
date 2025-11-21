import { useState } from "react";
import Habilidades from "./Habilidades";

function ToggleHabilidades() {
  const [visible, setVisible] = useState(true);

  const toggleMostrar = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggleMostrar}>
        {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {visible && <Habilidades />}
    </div>
  );
}

export default ToggleHabilidades;
