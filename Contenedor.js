const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }

    async getAll() {
        try {
            const content = await fs.promises.readFile(`./${this.file}`, 'utf-8');
            const listaDeProductos = JSON.parse(content);
            return listaDeProductos;
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    async getById(id) {
        try {
            const content = await fs.promises.readFile(`./${this.file}`, 'utf-8')
            const listaDeProductos = JSON.parse(content);
            const product = listaDeProductos.find(e => e.id === id);

            if (!product) {
                return null;
            }

            return product;

        } catch (error) {
            console.error('Error: ', error);
        }
    }
}

module.exports = Contenedor;