function StackTecnologias() {
  const tecnologias = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Git",
    "GitHub",
    "Vite",
    "SQL",
    "MongoDB",
  ];

  const getColor = (tech) => {
    if (tech === "JavaScript") return "yellow";
    if (tech === "React") return "cyan";
    if (tech === "Node.js") return "lightgreen";
    if (tech === "CSS") return "lightblue";
    if (tech === "HTML") return "orange";
    if (tech === "Git") return "salmon";
    if (tech === "GitHub") return "gray";
    if (tech === "Vite") return "purple";
    if (tech === "SQL") return "royalblue";
    return "white";
  };

  return (
    <section>
      <h2>Stack de Tecnologías (Dinámico + Condicional)</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {tecnologias.map((tech, index) => (
          <span
            key={index}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              backgroundColor: getColor(tech),
              color: "black",
              fontWeight: "bold",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default StackTecnologias;
