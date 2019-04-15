## @biko/react-scripts readme

### Como probar modificaciones en proyectos existentes sin publicar en npm

Para poder probar modificaciones que se estén desarrollando localmente en @biko/react-scripts, en proyectos que utilicen la versión anterior hay que seguir los siguientes pasos:

1. modificar la dependencia existente a @biko/react-scripts en el fichero package.json para que utilize una ruta local. Por ejemplo, en el caso de que tengamos descargados @biko/react-scripts y el proyecto que lo utiliza en la misma carpeta, si en el proyecto tenemos definida la dependencia como `"@biko/react-scripts": "^2.0.0"`, tras la modificación esa dependencia deberá quedar como `"@biko/react-scripts": "file:../biko-create-react-app/packages/react-scripts"`

2. ejecutar el comando `yarn upgrade @biko/react-scripts`

    **Importante:** Este paso hay que ejecutarlo cada vez que haya nuevas modificaciones en @biko/react-scripts que se deseen probar en el proyecto

Una vez realizados estos pasos en el proyecto ya se estará utilizando la versión local de @biko/react-scripts.
