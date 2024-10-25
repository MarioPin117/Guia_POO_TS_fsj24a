class Cancion {
    private autor: string; 

    constructor(public titulo: string, public genero: string) {
        this.autor = ""; 
    }

    // Método getter para obtener el autor
    getAutor(): string {
        return this.autor;
    }

    // Método setter para establecer el autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método para mostrar los datos de la canción
    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

// Ejemplo de uso
const cancion1 = new Cancion("Bohemian Rhapsody", "Rock");
cancion1.setAutor("Queen"); 
cancion1.mostrarDatos(); 
