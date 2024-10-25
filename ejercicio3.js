"use strict";
class Cancion {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }
    // Método getter para obtener el autor
    getAutor() {
        return this.autor;
    }
    // Método setter para establecer el autor
    setAutor(autor) {
        this.autor = autor;
    }
    // Método para mostrar los datos de la canción
    mostrarDatos() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}
// Ejemplo de uso
const cancion1 = new Cancion("Bohemian Rhapsody", "Rock");
cancion1.setAutor("Queen");
cancion1.mostrarDatos();
