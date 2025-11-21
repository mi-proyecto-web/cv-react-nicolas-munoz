Proyecto: CV en React – Actividad 3.4

Este proyecto corresponde al desarrollo del currículo (CV) modularizado utilizando componentes de React, siguiendo las instrucciones de la guía 2 – Punto 3.4: Implementación de componentes.

El objetivo del ejercicio es estructurar un CV a través de componentes reutilizables, organizados en carpetas y vinculados en el componente principal App.jsx.

Componentes creados en el punto 3.4

Durante esta actividad se crearon los siguientes componentes dentro de la carpeta src/components/:

1. CabeceraCV.jsx

Contiene nombre, rol y datos personales básicos.

2. Perfil.jsx

Incluye una breve descripción profesional y habilidades blandas destacadas.

3. Experiencia.jsx

Registra experiencias laborales previas.

4. Educacion.jsx

Describe la formación académica realizada.

5. Habilidades.jsx

Lista habilidades técnicas y competencias personales relevantes.

Continuar componiendo Proyectos, Contacto y Footer en caso de necesitarse más adelante.

Integración en App.jsx

Todos los componentes fueron importados en App.jsx, de la siguiente manera:

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import Habilidades from "./components/Habilidades";

function App() {
return (
<>
<CabeceraCV />
<Perfil />
<Experiencia />
<Educacion />
<Habilidades />
</>
);
}

export default App;

Ejecución del proyecto

Para ejecutar el proyecto en un servidor de desarrollo:

npm install
npm run dev

El proyecto se abrirá en:

http://localhost:5173/

Commits realizados en la actividad 3.4

Cada componente incluye su commit correspondiente:

feat: componente CabeceraCV con datos personales actualizados

feat: componente Perfil con descripción personalizada

feat: componente Experiencia laboral creado

feat: componente Educación agregado

feat: componente Habilidades integrado

Captura del CV
![El CV](src/assets/captura-CV.png)

Conclusión

El punto 3.4 permitió crear una estructura modular, ordenada y mantenible del CV a través de React, siguiendo buenas prácticas de componentes y control de versiones con Git.

EV06 – Componentes dinámicos y renderizado condicional en React

En esta actividad se implementaron componentes dinámicos en React utilizando:

Renderizado de listas mediante map()

Renderizado condicional mediante funciones lógicas

Arreglos de datos estructurados

Buenas prácticas de organización de componentes

Componentes creados en EV06

1. Experiencia.jsx (Dinámico)

Contiene 10 experiencias laborales o proyectos.

Cada elemento incluye cargo, empresa, año y funciones.

Renderizado automático con map().

2. Educacion.jsx (Dinámico)

Lista de cursos, estudios y formación complementaria.

10 elementos renderizados desde un array.

3. StackTecnologias.jsx (Dinámico + Condicional)

Lista de tecnologías representadas con “etiquetas”.

Cada tecnología muestra un color diferente según su nombre.

Se usó una función condicional getColor() para asignar colores.

Captura componente dinamico y renderizado

![EV06](src/assets/captura-ev06.png)

![EV07](src/assets/ev07props.png)
EV07 – Reutilización de Componentes en React

Props y Desestructuración con un CV Dinámico

Descripción de la Actividad

En esta evidencia se refactorizó el proyecto cv-react-nicolas-munoz para implementar componentes reutilizables, usar props para pasar datos y aplicar desestructuración dentro de cada componente.

Los datos globales del CV se movieron al archivo cvData.js, desde donde son enviados hacia los componentes por medio de props.
Esto permite una estructura modular, escalable y fácil de mantener.

Objetivos Cumplidos

1. Extracción de datos en cvData.js

Se creó el archivo que contiene:

datosPersonales

perfil

experiencias

educacion

tecnologías iniciales (para EV08)

2. Envío de datos por props a los componentes

Los componentes:

CabeceraCV

Perfil

Experiencia

Educacion

reciben los datos desde App.jsx por medio de props.

Ejemplo:

<CabeceraCV
  nombre={datosPersonales.nombre}
  cargo={datosPersonales.cargo}
  ciudad={datosPersonales.ciudad}
  contacto={datosPersonales.contacto}
/>

3. Desestructuración de props

Dentro de cada componente se utiliza:

function CabeceraCV({ nombre, cargo, ciudad, contacto })

Esto mejora la legibilidad y evite escribir props.nombre, props.cargo, etc.

4. Renderizado dinámico de listas

Los componentes Educacion y Experiencia utilizan .map() para mostrar todos los datos enviados desde App.jsx.

Cumple completamente los requisitos de la evidencia EV07.
Estructura del Proyecto para EV07
src/
└── components/
├── CabeceraCV.jsx
├── Perfil.jsx
├── Educacion.jsx
└── Experiencia.jsx

src/cvData.js
src/App.jsx

Capturas (EV07)

![EV07](src/assets/ev07props.png)

Descripción Imagen
Vista del CV mostrando datos enviados por props

Vista del componente con desestructuración funcionando

Lista de experiencia dinámica
Cómo Ejecutar el Proyecto

Instalar dependencias:

npm install

Ejecutar:

npm run dev

Abrir en el navegador:

http://localhost:5173

Commits Realizados (según la guía)

refactor: extracción de datos personales en App.jsx

feat: componente CabeceraCV ahora recibe props

feat: desestructuración de props en CabeceraCV

feat: componente Perfil dinámico con props

feat: Experiencia mapeada desde arreglo en App.jsx

feat: componente Educación con props y desestructuración

docs: actualización del README con explicación del uso de props

Conclusión

Con esta evidencia se logró:

Modularizar el CV

Usar props correctamente

Aplicar desestructuración para componentes más limpios

Renderizar datos desde un archivo central

Esto establece la base para un proyecto escalable y profesional.

![EV08](src/assets/ev08formulario.png)

![Ev08](src/assets/ev08habilidades.png)

![EV08](src/assets/ev08stackagregado.png)

![EV08](src/assets/evo08agregar-ocultar.png)

EV08 – Eventos y Estado Local en React

CV Dinámico con Interactividad

Descripción de la Actividad

En esta evidencia se implementaron funcionalidades interactivas dentro del proyecto cv-react-nicolas-munoz, aplicando eventos, estado local (useState), renderizado condicional, props y comunicación entre componentes.

Se agregaron dos componentes nuevos:

ToggleHabilidades → Permite mostrar/ocultar la sección de habilidades mediante un botón.

FormularioTecnologia → Permite agregar nuevas tecnologías dinámicamente al stack tecnológico del CV.

Además, App.jsx fue modificado para:

Manejar el estado global de las tecnologías.

Pasar funciones y valores mediante props a los componentes hijos.

Integrar el renderizado dinámico del stack.

Mantener el proyecto modular y escalable.

Funcionalidades Implementadas

1. Renderizado Condicional

El componente ToggleHabilidades usa useState para controlar si se muestra o no la sección de habilidades:

Botón "Mostrar habilidades"

Botón "Ocultar habilidades"

2. Manejo de Estado Global con useState

En App.jsx se guarda la lista de tecnologías usando:

const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

3. Formulario Controlado

El componente FormularioTecnologia permite:

Capturar el input del usuario

Validar que no esté vacío

Agregar la tecnología a la lista

4. Renderizado Dinámico de Listas

El componente StackTecnologias usa .map() para mostrar todas las tecnologías, incluyendo las agregadas por el usuario.

Estructura del Proyecto (solo componentes de EV08)
src/
└── components/
├── CabeceraCV.jsx
├── Perfil.jsx
├── Educacion.jsx
├── Experiencia.jsx
├── StackTecnologias.jsx
├── ToggleHabilidades.jsx <- (nuevo)
└── FormularioTecnologia.jsx <- (nuevo)

src/cvData.js
src/App.jsx

Capturas

Agregar-ocultar

[EV08](src/assets/evo08agregar-ocultar.png)

Habilidades
![EV08](src/assets/ev08habilidades.png)

Formulario
![EV08](src/assets/ev08formulario.png)

Tecnología agregada
![EV08](src/assets/ev08stackagregado.png)

Cómo Ejecutar el Proyecto

Instalar dependencias:

npm install

Iniciar el servidor:

npm run dev

Abrir en el navegador:

http://localhost:5173

Commits Realizados

Los commits obligatorios según la guía EV08 fueron realizados:

chore: organización inicial del proyecto para integración de eventos

feat: creación de componente ToggleHabilidades con renderizado condicional

feat: implementación de useState para mostrar/ocultar habilidades

feat: creación de componente FormularioTecnologia con inputs controlados

feat: función agregarTecnologia en App.jsx y paso como prop

feat: renderizado dinámico de tecnologías desde estado

docs: README del EV08 actualizado con evidencia

Conclusión

Con esta evidencia se implementaron las bases del comportamiento interactivo en React:

Estado local

Formularios controlados

Renderizado condicional

Comunicación Padre → Hijo mediante props

Esto convierte el CV en una herramienta dinámica, escalable e interactiva.
