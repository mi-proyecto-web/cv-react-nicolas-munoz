import { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {
  const [nuevaTecno, setNuevaTecno] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault(); //evita que se recargue la página

    if (nuevaTecno.trim() === "") return;

    agregarTecnologia(nuevaTecno);
    setNuevaTecno("");
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Agregar tecnología"
        value={nuevaTecno}
        onChange={(e) => setNuevaTecno(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTecnologia;
