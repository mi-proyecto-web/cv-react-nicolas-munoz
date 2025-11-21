function StackTecnologias({ lista }) {
  return (
    <div>
      <h2>Stack de Tecnologías</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {lista.map((tecno, index) => (
          <span
            key={index}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              backgroundColor: "#282c34",
              color: "white",
              fontSize: "14px",
            }}
          >
            {tecno}
          </span>
        ))}
      </div>
    </div>
  );
}

export default StackTecnologias;
