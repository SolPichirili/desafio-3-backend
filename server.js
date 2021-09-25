const express = require('express');
const server = express();

const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('products.json');

const port = 8080;

//Inicio
const indexPath = '/';
const indexCallBack = (request, response, next) => {
    response.send('<h1>Bienvenido</h1>');
}
server.get(indexPath, indexCallBack);


//Productos
const productsPath = '/productos';

server.get(productsPath, async (req, res) => {
    const productos = await contenedor.getAll();
    res.json(productos);
});


//Producto Random
const randomPath = '/productoRandom';

server.get(randomPath, async (req, res) => {
    const productos = await contenedor.getAll();

    const getRandom = (max, min) => {
        return Math.round(Math.random() * (max - min) + min);
    };
    let randomId = getRandom(productos.length, 1);

    const randomProduct = await contenedor.getById(randomId);
    res.json(randomProduct);
});


//Correr API
const runCallBack = () => {
    console.log(`Servidor corriendo en ${port}`);
}
server.listen(port, runCallBack);


//Error
const error = 'error';
const errorCallBack = (error) => {
    console.log('Error en servidor:', error)
}
server.on(error, errorCallBack);