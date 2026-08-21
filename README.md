# Character Counter

## 1. Objetivo del proyecto

El objetivo de este proyecto fue desarrollar una aplicación web de análisis de texto llamada **Character Counter**, tomando como referencia visual una interfaz de contador de caracteres.

La aplicación permite ingresar texto y analizarlo en tiempo real, mostrando información sobre la cantidad de caracteres, palabras y oraciones, además de calcular un tiempo aproximado de lectura y representar la densidad de las letras utilizadas.

También se buscó respetar el diseño de referencia proporcionado, aplicando un diseño moderno, responsive y adaptable a diferentes tamaños de pantalla.

---

## 2. Tecnologías utilizadas

* **React** — desarrollo de la interfaz mediante componentes reutilizables.
* **Vite** — herramienta utilizada para crear y ejecutar el proyecto.
* **JavaScript (JSX)** — lógica y comportamiento de la aplicación.
* **CSS3** — estilos visuales, Flexbox, Grid, Media Queries y animaciones.
* **HTML5** — estructura base de la aplicación.
* **Git y GitHub** — control de versiones y almacenamiento del repositorio.
* **Visual Studio Code** — editor utilizado durante el desarrollo.
* **Node.js y npm** — ejecución del proyecto y administración de dependencias.

Las dependencias principales del proyecto incluyen React y React DOM, mientras que Vite se utiliza como herramienta de desarrollo y compilación.

---

## 3. Organización del proyecto

El proyecto fue organizado utilizando componentes de React para separar las diferentes partes de la interfaz y facilitar el mantenimiento del código.

La estructura principal es:

```text
tpfinal-fullstack/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Controlls.jsx
│   │   ├── Header.jsx
│   │   ├── LetterDensity.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Stats.jsx
│   │   └── WriteArea.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 4. Componentes principales

### Header

El componente `Header.jsx` contiene la cabecera de la aplicación.

Incluye:

* Logo del proyecto.
* Nombre **Character Counter**.
* Botón para cambiar entre modo claro y modo oscuro.

El cambio de tema se encuentra conectado al contexto de React utilizado para administrar el estado visual de la aplicación.

---

### WriteArea

El componente `WriteArea.jsx` contiene el área donde el usuario puede ingresar el texto.

Se utiliza un elemento `<textarea>` controlado por React, permitiendo actualizar el contenido en tiempo real.

---

### Controlls

El componente `Controlls.jsx` contiene las opciones de configuración del contador.

Incluye:

* **Exclude Spaces** — permite excluir los espacios del conteo de caracteres.
* **Set Character Limit** — permite activar un límite de caracteres.
* Campo numérico para establecer la cantidad máxima de caracteres.
* Tiempo aproximado de lectura.

---

### Stats

El componente `Stats.jsx` presenta las estadísticas principales mediante tres tarjetas.

Las tarjetas muestran:

* **Total Characters**
* **Word Count**
* **Sentence Count**

Los valores se actualizan automáticamente a medida que el usuario modifica el texto.

---

### Letter Density

El componente `LetterDensity.jsx` muestra la frecuencia de las letras utilizadas en el texto.

Incluye:

* Las letras más utilizadas.
* Cantidad de apariciones.
* Porcentaje de utilización.
* Barras visuales de progreso.
* Opción **See more** para mostrar las letras restantes.

---

### ProgressBar

El componente `ProgressBar.jsx` se utiliza para representar visualmente el porcentaje correspondiente a cada letra.

La barra se genera dinámicamente utilizando el porcentaje calculado por la aplicación.

---

### ThemeContext

El archivo `ThemeContext.jsx` administra el estado del modo claro y oscuro.

El contexto permite que diferentes componentes puedan acceder al estado del tema sin necesidad de pasar las propiedades manualmente entre todos los componentes.

Además, la selección del usuario se guarda utilizando `localStorage`, permitiendo conservar el tema seleccionado al recargar la página.

---

## 5. Funcionalidades principales

### Contador de caracteres

La aplicación calcula automáticamente la cantidad de caracteres introducidos.

El usuario puede elegir si desea contar o excluir los espacios.

---

### Contador de palabras

Las palabras se calculan automáticamente utilizando los espacios como separación entre ellas.

Cuando no existe texto ingresado, el contador muestra `0`.

---

### Contador de oraciones

Las oraciones se identifican utilizando los signos:

```text
.
!
?
```

De esta manera se obtiene una cantidad aproximada de oraciones presentes en el texto.

---

### Tiempo de lectura

La aplicación calcula un tiempo aproximado de lectura utilizando una velocidad estimada de **180 palabras por minuto**.

El resultado se muestra en minutos.

---

### Límite de caracteres

La opción **Set Character Limit** permite establecer una cantidad máxima de caracteres.

Cuando el límite está activo, el texto ingresado se restringe al número indicado por el usuario.

---

### Excluir espacios

La opción **Exclude Spaces** permite modificar el cálculo de caracteres para que los espacios no sean incluidos.

---

### Densidad de letras

La aplicación analiza las letras utilizadas en el texto y calcula:

* Cantidad de apariciones.
* Porcentaje de aparición.
* Orden de frecuencia.

Las letras se muestran de mayor a menor frecuencia.

---

### Modo claro y oscuro

La aplicación dispone de dos modos visuales:

* ☀️ Modo claro.
* 🌙 Modo oscuro.

La selección se guarda en `localStorage`, por lo que el tema seleccionado permanece después de recargar la página.

---

## 6. Cómo resolví el CSS

El archivo `index.css` contiene los estilos principales de la aplicación.

Para organizar el diseño se utilizaron:

1. Reset general.
2. Estilos globales.
3. Header.
4. Título principal.
5. Área de texto.
6. Controles.
7. Tarjetas de estadísticas.
8. Letter Density.
9. Barras de progreso.
10. Modo claro.
11. Modo oscuro.
12. Diseño responsive.

Para el diseño visual se utilizaron:

* **Flexbox** para la distribución de elementos.
* **CSS Grid** para las tarjetas de estadísticas.
* **Border Radius** para las esquinas redondeadas.
* **Linear Gradient** para las tarjetas.
* **Hover Effects** para mejorar la interacción.
* **Transitions** para suavizar algunos cambios visuales.
* **Media Queries** para adaptar la aplicación a diferentes dispositivos.

Las barras de Letter Density fueron realizadas mediante elementos `div`, utilizando el porcentaje calculado para determinar dinámicamente el ancho de cada barra.

---

## 7. Diseño Responsive

La aplicación fue adaptada para funcionar en diferentes tamaños de pantalla.

Se establecieron diferentes comportamientos para:

### Desktop

Las tres tarjetas de estadísticas aparecen en una misma fila.

### Tablet

Los elementos se reorganizan para aprovechar mejor el espacio disponible.

### Mobile

Las tarjetas pasan a mostrarse una debajo de otra y los controles se reorganizan verticalmente.

También se ajustaron:

* Tamaño del título.
* Tamaño de las tarjetas.
* Área de texto.
* Barras de densidad.
* Controles.
* Botón de cambio de tema.

---

## 8. Dificultades encontradas

### Funcionamiento del modo claro y oscuro

Durante el desarrollo, al realizar modificaciones sobre los estilos, el fondo permanecía oscuro aunque se presionara el botón de cambio de tema.

Fue necesario revisar la combinación entre `ThemeContext.jsx`, `App.jsx` y `index.css` para permitir que los estilos respondieran correctamente a la clase `dark-theme`.

---

### Límite de caracteres

Una de las dificultades encontradas fue que el valor ingresado en el campo de límite no se estaba utilizando correctamente.

Se corrigió la función encargada de recibir el valor del input para convertirlo en un número y utilizarlo correctamente en el textarea.

---

### See More

La opción **See more** no era visible correctamente en el modo claro porque el color del texto estaba establecido en blanco.

Se agregaron estilos diferentes para el modo claro y oscuro.

---

### Diseño de Letter Density

Inicialmente se utilizó el elemento HTML `<meter>` para representar las barras.

Posteriormente se reemplazó por elementos `div` personalizados para tener mayor control sobre:

* Color.
* Tamaño.
* Bordes.
* Porcentaje.
* Animaciones.
* Adaptación responsive.

---

### Diseño Responsive

Fue necesario agregar Media Queries para evitar que las tarjetas, controles y barras de densidad se salieran de la pantalla en dispositivos pequeños.

---

## 9. Commits realizados

Durante el desarrollo se realizaron commits progresivos para mantener un historial organizado del proyecto.
Estos commits permitieron desarrollar el proyecto progresivamente y mantener un registro de los cambios realizados durante el desarrollo.

---

## 10. Ejecución del proyecto

Para ejecutar el proyecto localmente es necesario tener instalado **Node.js**.

Primero se deben instalar las dependencias:

```bash
npm install
```

Luego se puede iniciar el servidor de desarrollo mediante:

```bash
npm run dev
```

Vite proporciona el entorno de desarrollo con recarga automática durante la modificación de los archivos. El proyecto también cuenta con comandos para compilación y previsualización definidos en `package.json`.

Para generar una versión de producción:

```bash
npm run build
```

Para previsualizar la compilación:

```bash
npm run preview
```

---

## 11. Capturas del resultado final

### Vista Desktop

![Vista Desktop](assets/images/CharacterCounter.png)

### Vista Mobile

![Vista Mobile](assets/images/character_counter_combinada.png)

### Estructura del proyecto en VS Code

![Estructura del proyecto](assets/images/Explorador_VSCode.png)

---

## 12. Autor

**Ramón More**
