"use strict";
class Cuenta {
    constructor(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
        this.cantidad = cantidad;
    }
    // Método para depositar dinero
    depositar(cantidad) {
        if (cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente: $${cantidad}. Saldo actual: $${this.cantidad}`);
        }
    }
    // Método para retirar dinero
    retirar(valor) {
        if (this.cantidad <= 0) {
            console.log("No hay nada en la cuenta.");
        }
        else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo para retirar esa cantidad.");
        }
        else {
            this.cantidad -= valor;
            console.log(`Se ha retirado: $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }
    // Método para mostrar los datos de la cuenta
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
        console.log(`Saldo actual: $${this.cantidad}`);
    }
}
// Ejemplo de uso
const cuenta1 = new Cuenta("Mario Pinto", 50, "Ahorros", "123456789");
cuenta1.mostrarDatos();
cuenta1.depositar(2);
cuenta1.depositar(10);
cuenta1.retirar(20);
cuenta1.retirar(40);
cuenta1.retirar(30);
cuenta1.retirar(10);
