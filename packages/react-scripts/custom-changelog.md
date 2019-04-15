## Changelog

### 2.0.0

Breaking changes:

- Unificados los ficheros de configuración personalizada `webpack.config.dev.extension.js` y `webpack.config.prod.extension.js` en uno solo `webpack.config.extension.js`. Para poder diferenciar el entorno, este nuevo fichero exporta una función que recibe como parámetro el valor de la variable webpackEnv que puede ser `development` o `production`:

  ```
  module.exports = function(webpackEnv) {
    return ({
      getRules: function() {
        return [];
      },
      getPlugins: function() {
        return [];
      },
    });
  }
  ```

Otros cambios:

- Añadida la posibilidad de incluir nuevos entry points a través del fichero de configuración personalizado. Esta nueva configuración devolverá un objeto en el que las claves serán los nombres de las nuevas entradas y sus valores la ruta al fichero a incluir.

  ```
  module.exports = function(webpackEnv) {
    return ({
      getEntries: function() {
        return {
          'nombre': 'ruta-a-fichero.js',
        };
      },
    });
  }
  ```

  Además, estas nuevas entradas no serán incluidas en el fichero index.html general, ni se les generará uno propio.

- Añadida la posibilidad de personalizar el nombre de variable que utiliza webpack para realizar la carga de los diferentes chunks.

  ```
  module.exports = function(webpackEnv) {
    return ({
      getJsonpFunctionName: function() {
        // nombre original: webpackJsonp
        return 'customJsonp';
      },
    });
  }
  ```

- Añadida la posibilidad de añadir plugins a la sección resolve de webpack:

  ```
  module.exports = function(webpackEnv) {
    return ({
      getResolvePlugins: function() {
        return [];
      },
    });
  }
  ```


### 1.2.0

Actualiza a la versión 2.1.5 de create-react-app

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
