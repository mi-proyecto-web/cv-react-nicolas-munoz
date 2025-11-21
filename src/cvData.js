// Datos globales del CV para usar como props

export const datosPersonales = {
  nombre: "Nicolás Muñoz",
  cargo: "Desarrollador Frontend Junior",
  ciudad: "Colombia - Medellín",
  contacto: "nicomunosh@gmail.com",
};

// Cambiado de resumenPerfil → perfil
export const perfil = `
Soy un desarrollador en formación con conocimientos en HTML, CSS, JavaScript y React. 
Apasionado por el frontend y en constante aprendizaje para mejorar mis habilidades.
`;

// Correcto (mantiene el mismo nombre)
export const experiencias = [
  {
    cargo: "Desarrollador Frontend",
    empresa: "Tech Solutions",
    periodo: "2023 - Actualidad",
    descripcion:
      "Construcción de interfaces y mejora de experiencia de usuario.",
  },
  {
    cargo: "Proyecto Personal",
    empresa: "Portafolio Web",
    periodo: "2024",
    descripcion: "Diseño y codificación de sitio web personal usando React.",
  },
];

// Cambiado de formaciones → educacion
export const educacion = [
  {
    institucion: "SENA",
    curso: "Tecnólogo en Análisis y Desarrollo de Software",
    año: "2025",
  },
  {
    institucion: "Udemy",
    curso: "React desde cero",
    año: "2024",
  },
];

// Para EV08
export const tecnologiasIniciales = ["HTML", "CSS", "JavaScript", "React"];
