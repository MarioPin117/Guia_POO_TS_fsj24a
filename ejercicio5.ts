abstract class Persona {
    constructor(
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public telefono: string,
        public edad: number
    ) {}

    // Método para verificar si es mayor de edad
    verificarEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }

    // Método abstracto para mostrar datos personales
    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = 0; 
    }

    // Método para cargar el sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    // Implementación del método abstracto para mostrar datos personales
    mostrarDatos(): void {
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
