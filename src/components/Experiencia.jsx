function Experiencia() {
  const experiencias = [
    {
      cargo: "Auxiliar de TI",
      empresa: "TecnoCol",
      año: "2023",
      funciones: "Soporte técnico básico y mantenimiento preventivo.",
    },
    {
      cargo: "Desarrollador Junior",
      empresa: "SoftDev",
      año: "2024",
      funciones: "Desarrollo de interfaces con React.",
    },
    {
      cargo: "Prácticas ADS",
      empresa: "SENA",
      año: "2024",
      funciones: "Apoyo en proyectos de análisis y desarrollo de software.",
    },
    {
      cargo: "Soporte Nivel 1",
      empresa: "HelpDesk SAS",
      año: "2023",
      funciones: "Atención a usuarios y resolución de casos.",
    },
    {
      cargo: "Freelancer Web",
      empresa: "Independiente",
      año: "2022",
      funciones: "Creación de páginas web básicas para pequeños negocios.",
    },
    {
      cargo: "Asistente de Datos",
      empresa: "DataCore",
      año: "2023",
      funciones: "Organización y validación de información.",
    },
    {
      cargo: "Diseñador Web básico",
      empresa: "StudioWeb",
      año: "2021",
      funciones: "Maquetación web con HTML y CSS.",
    },
    {
      cargo: "Practicante Frontend",
      empresa: "DigitalPro",
      año: "2022",
      funciones: "Componentes en React y consumo de APIs.",
    },
    {
      cargo: "Auxiliar Administrativo",
      empresa: "OfiSystem",
      año: "2020",
      funciones: "Gestión de documentos e informes básicos.",
    },
    {
      cargo: "Editor de contenido",
      empresa: "MediaSoft",
      año: "2023",
      funciones: "Gestión de contenido digital y soporte web.",
    },
  ];

  return (
    <section>
      <h2>Experiencia Laboral (Dinámico)</h2>

      {experiencias.map((exp, index) => (
        <div key={index}>
          <h3>{exp.cargo}</h3>
          <p>
            <strong>Empresa:</strong> {exp.empresa}
          </p>
          <p>
            <strong>Año:</strong> {exp.año}
          </p>
          <p>{exp.funciones}</p>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
