"use strict";
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para verificar si es mayor de edad
    verificarEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        }
        else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = 0;
    }
    // Método para cargar el sueldo
    cargarSueldo(sueldo) {
        this.sueldo = sueldo;
    }
    // Método para imprimir el sueldo
    imprimirSueldo() {
        console.log(`Sueldo: $${this.sueldo}`);
    }
    // Implementación del método abstracto para mostrar datos personales
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.verificarEdad();
    }
}
// Ejemplo de uso
const empleado1 = new Empleado("Mario", "Pinto", "Calle Prueba 123", "123-456-7890", 30);
empleado1.cargarSueldo(1500);
empleado1.mostrarDatos();
empleado1.imprimirSueldo();
