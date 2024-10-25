"use strict";
class CabeceraPagina {
    constructor(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = "left";
    }
    // Método para obtener el título, color y fuente de la página
    obtenerPropiedades() {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`);
    }
    // Método para definir la alineación del título (centrado, derecha, izquierda)
    definirAlineacion(alineacion) {
        const opcionesValidas = ["left", "center", "right"];
        if (opcionesValidas.includes(alineacion)) {
            this.alineacion = alineacion;
            this.actualizarPagina();
        }
        else {
            console.log("Alineación no válida. Usa 'left', 'center' o 'right'.");
        }
    }
    // Método para actualizar las propiedades en el HTML
    actualizarPagina() {
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
