function Educacion() {
  const formacion = [
    {
      institucion: "SENA",
      curso: "Tecnólogo en Análisis y Desarrollo de Software",
      año: "2024 - Actual",
    },
    {
      institucion: "Google Activate",
      curso: "Curso de Marketing Digital",
      año: "2023",
    },
    {
      institucion: "Udemy",
      curso: "JavaScript Moderno",
      año: "2022",
    },
    {
      institucion: "Platzi",
      curso: "Curso Básico de React",
      año: "2023",
    },
    {
      institucion: "FreeCodeCamp",
      curso: "Responsive Web Design",
      año: "2021",
    },
    {
      institucion: "Coursera",
      curso: "Introducción a Bases de Datos",
      año: "2022",
    },
    {
      institucion: "Universidad de Michigan",
      curso: "Web Development Fundamentals",
      año: "2020",
    },
    {
      institucion: "Cisco Networking Academy",
      curso: "Introduction to Cybersecurity",
      año: "2021",
    },
    {
      institucion: "OpenBootcamp",
      curso: "Git y GitHub desde cero",
      año: "2023",
    },
    {
      institucion: "Alura Latam",
      curso: "Lógica de Programación",
      año: "2022",
    },
  ];

  return (
    <section>
      <h2>Educación (Dinámico)</h2>

      {formacion.map((edu, index) => (
        <div key={index}>
          <h3>{edu.curso}</h3>
          <p>
            <strong>Institución:</strong> {edu.institucion}
          </p>
          <p>
            <strong>Año:</strong> {edu.año}
          </p>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default Educacion;
