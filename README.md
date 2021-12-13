# Desafío BSALE
Este proyecto presenta la solución del desafío propuesto por BSALE.

## 1. Descripción del ejercicio
Se debe Construir una tienda online que despliegue productos agrupados por la categoría a la que pertenecen, generando por separado backend (API REST) y frontend
(aplicación que la consuma).

Además, se debe agregar un buscador, el cual tiene que estar implementado a nivel de servidor, mediante una Api Rest cuyo lenguaje y framework puede ser de libre 
elección.

La aplicación de cliente tiene que estar desarrollada con vanilla javascript (javascript puro), sin ningún framework. Se puede usar librerías o componentes específicos, tales como: boopstrap, material, Jquery, entre otros.

Finalmente, se debe disponibilizar la aplicación y el repositorio con el código en un hosting.

## 2. Solución

### 2.1 Backend
El Backend fue desarrollado con:
- Node.JS v14.17.6
- Express v4.17.1

### 2.2 Frontend
El Frontend fue desarrollado con:
- Vanilla Javascript.
- Bootstrap v5.1.3
- Se utilizó el empaquetador de módulos Webpack v5 para compilar los archivos de Frontend en el Backend para la producción del proyecto.
- Entre otros paquetes de Webpack, se utilizó Webpack-server para levantar un servidor local de desarrollo para el Frontend.

## 3. Instalación

### 3.1 Requisitos previos:
- Instalación de Node.JS.

### 3.2 Clonación del proyecto:
```
git clone jsalinas96/desafio_bsale
```

### 3.3 Instalación de módulos
```
npm install
```

### 3.4 Ejecutar Backend en desarrollo
```
npm run dev
```

### 3.5 Ejecutar Frontend en desarrollo
```
npm run serve
```

### 3.6 Preparación para producción
(compilar los archivos de Frontend con Webpack)
```
npm run build
```

## 4. Despliegue
Para disponibilizar la aplicación en un host, se utilizó Heroku. El siguiente enlace muestra el proyecto funcionando:
- [Ver proyecto desplegado](https://www.google.cl)
