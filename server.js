const express = require('express');
const server = express();

const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('products.json');

const port = 8080;

const getRandom = (max) => {
    return Math.floor(Math.random() * (max));
};

//Inicio
server.get('/', (req, res) => {
    res.send('<h1>Bienvenido</h1>');
});


//Productos
server.get('/productos', async (req, res) => {
    const productos = await contenedor.getAll();
    res.json(productos);
});


//Producto Random
server.get('/productoRandom', async (req, res) => {
    const productos = await contenedor.getAll();
    let random = getRandom(productos.length);
    res.json(productos[random]);
});


//Correr API
const app = server.listen(port, () => {
    console.log(`Servidor corriendo en ${port}`);
});

app.on('error', (error) => {
    console.log(`Error en servidor del tipo ${error}`)
});