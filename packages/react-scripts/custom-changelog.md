## Changelog

### 1.1.0

Permite añadir nuevas rutas incluídas para la compilación de fuentes a traves de la extensión de configuración de webpack.

```
module.exports = {
  getIncludeCompilePaths: function() {
    return [];
  },
};
```

### 1.0.0

Nuevo fork directo de create-react-app de Facebook. A partir de esto momento se usa babel para compilar Typescript.

- Añade la posibilidad de añadir nuevos plugins a webpack a través de ficheros en el raiz del proyecto con el nombre: `webpack.config.dev.extension.js` y `webpack.config.prod.extension.js`
  El formato completo de los ficheros se actualiza a:

```
module.exports = {
  getRules: function() {
    return [];
  },
  getPlugins: function() {
    return [];
  },
};
```

- Añade plugin de babel de styled-components

- Nueva opción de configuración para la tarea 'build', llamada 'JS_SOURCEMAPS_ARE_HIDDEN' donde TRUE genera sourcemaps pero no enlazados en los ficheros javascript.

- Incorporada herramienta para el análisis de los chunks. En la compilación a producción generar un informe en .html
