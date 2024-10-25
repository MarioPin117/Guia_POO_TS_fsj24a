class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "left"; 
    }

    // Método para obtener el título, color y fuente de la página
    obtenerPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }

    // Método para definir la alineación del título (centrado, derecha, izquierda)
    definirAlineacion(alineacion: string): void {
        const opcionesValidas = ["left", "center", "right"];
        if (opcionesValidas.includes(alineacion)) {
            this.alineacion = alineacion;
            this.actualizarPagina();
        } else {
            console.log("Alineación no válida. Usa 'left', 'center' o 'right'.");
        }
    }

    // Método para actualizar las propiedades en el HTML
    actualizarPagina(): void {
        const tituloElemento = document.getElementById("titulo");
        if (tituloElemento) {
            tituloElemento.innerText = this.titulo;
            tituloElemento.style.color = this.color;
            tituloElemento.style.fontFamily = this.fuente;
            tituloElemento.style.textAlign = this.alineacion;
        }
    }
}

// Ejemplo de uso
const cabecera = new CabeceraPagina("Bienvenido a mi Página", "red", "Arial");
cabecera.definirAlineacion("center");
